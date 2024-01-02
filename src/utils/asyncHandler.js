const asyncHandler = (requestHandler) => {
    (req,res,next) => {
        Promise.resolve(requestHandler(req,res,next))
        .catch((err) => next(err))
    }


}


export default asyncHandler



// Second way of creating wrapper function 
const asyncHandler2 = (func) => async (req,res,next) => {
    try{
        await func(req,res,next)
    }
    catch (error) {
        res.status(err.code || 500).json({
            success: false,
            message: err.message
        })
    }
}