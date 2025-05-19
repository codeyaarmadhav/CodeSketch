import Project from "../model/projectModel.js";
import User from "../model/userModel.js"


const allUsers= async (req, res) => {
    const users = await User.find({}).select('-password');

    if(!users){
        return res.json({
            success: false,
            message: "No Users available"
        })
    }

    res.json({
        success: true,
        users
    })
}

const allProjects = async (req, res) => {
    const projects = await Project.find({}).populate('user', '-password');

    if(!projects){
        return res.status(400).json({
            success: false,
            message: "No projects available"
        })
    }

    res.json({
        success: true,
        projects
    })
}

const userActivity = async (req, res) => {
    const { userId, active } = req.body;

    const user = await User.findById(userId);

    if(!user){
        return res.status(400).json({
            success: false,
            message: "User not found"
        })
    }
    if(active){
        user.active = false;
    }else{
        user.active = true;
    }

    await user.save();

    res.json({
        success: true,
        message: active ? "User activated successfully" : "User deactivated successfully"
    })
}

const changePlan = async (req, res) => {
    const {userId, isStandard} = req.body;

    const user = await User.findById(userId);

    if(!user){
        return res.status(400).json({
            success: false,
            message: "User Bnot found"
        })
    }

    if(isStandard){
        user.plan = "basic";
    } else {
        user.plan = "standard";
    }

    await user.save();

    res.json({
        success: true,
        message: "Plan Updated"
    })
}

export {allUsers, allProjects, userActivity, changePlan};