import {asyncHandler} from "../middlewares/asyncHandler.js";


const registerUser = asyncHandler(async (req, res) => {
    return res.status(200).json({
        message: "User Registered Successfully"
    });
});


export {registerUser,}