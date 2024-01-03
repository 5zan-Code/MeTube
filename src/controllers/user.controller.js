import { asyncHandler } from '../utils/asyncHandler.js'
import apiError from "../utils/apiErrors.js"
import {User} from "../models/user.models.js"
import cloudinary from "../utils/cloudinary.js"
import apiResponse from '../utils/apiResponse.js'


const registerUser = asyncHandler( async (req,res) => {

    // get user details from frontend
    const {username, fullname, email, password} = req.body
    console.log("Email: " , email, "Fullname:", fullname)
    
    // Validation - not empty

    if([fullname, username, password, email].some((field)=> field?.trim() === "")){
        throw new apiError(400, "All fields are required!")
    }

    // Check if user already exists: username, email

    const existedUser = User.findOne({
        $or: [{email}, {username}]
    })
    if(existedUser){
        throw new apiError(409, "User with email or username already exists")
    }

    // check for images, check for avator?

    const avatarLocalPath = req.files?.avatar[0]?.path;
    const coverImageLocalPath = req.files?.coverImage[0]?.path;

    if(!avatarLocalPath){
        throw new apiError(400, "Avatar file is required!")
    }

    // upload them to cloudinary, avatar

   const avatar = await uploadOnCloudinary(avatarLocalPath)
   const coverImage = await uploadOnCloudinary(coverImageLocalPath)

   if(!avatar){
    throw new  apiError(400, "Avatar file is required")
   }
    
    // create user object - create entry in DB

  const user =  await User.create({
        fullname,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        email,
        password,
        username: username.toLowerCase()
    })

  

    // remove password and refresh token field from response

    // Check for user creation 

    const userCreated = await User.findById(user._id).select(
        "-password -refreshToken "
    )
    
    if(!userCreated) {
        throw new apiError(500, "Something went wrong while creating a user")
    }
    // Return response

    return res.status(201).json(
        new apiResponse(200, userCreated, "User registed successfully!")
    )

})



export  { registerUser }