import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
    // res.status(200).json({
    //     message: "ok"
    // })


    // steps for userRegister
    // get use detail from frontend
    //validaiton
    // check if user already exists: username, email
    // check for img, check for avatar
    // upload them to cloudinary, avatar check
    // create user object - create entry in db
})


export {registerUser}