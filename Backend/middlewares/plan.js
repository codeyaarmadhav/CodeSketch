import Project from "../model/projectModel.js";
import User from "../model/userModel.js";

const checkPlan = async (req, res, next) => {
    const userId = req.user.id;

    const user = await User.findById(userId);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    const isBasic = user.plan === "basic" ;
    const projects = await Project.find({ user: userId});

    if(isBasic && projects.length > 4 || !user.plan){
        return res.json({
            success: false,
            message: "Upgrade to standard to add more projects"
        })
    }

    next();
}

export default checkPlan;