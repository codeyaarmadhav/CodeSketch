import User from "../model/userModel.js"


const isAdmin = async (req, res, next) => {
    const user = await User.findById(req.user.id);
    
    if(!user){
        res.status(400).json({
            success: false,
            message: "user not found"
        })
    }

    
    if(user.admin){
        //console.log(user);
        return next();
    }

    return res.status(400).json({
        status: false,
        message: "User does not have admin permissions"
    })
}

export default isAdmin;