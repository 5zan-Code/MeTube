import { asyncHandler } from '../utils/asyncHandler.js'

const registerUser = asyncHandler( async (req,res) => {
    // get user details from frontend
    const {username, fullname, email, password} = req.body
    console.log("Email: " , email, "Fullname:", fullname)
    // Validation - not empty

    // Check if user already exists: username, email

    // check for images, check for avator?

    // upload them to cloudinary, avatar
    
    // create user object - create entry in DB

    // remove password and refresh token field from response

    // Check for user creation 

    // Return response

})



export  { registerUser }