import Project from "../model/projectModel.js";

async function getProjects(req, res){
    const userId = req.user.id;
    const projects = await Project.find({user: userId});
    if(!projects){
        return res.json({
            success: false,
            message: "No projects found"
        })
    }
    return res.json({
        success: true,
        projects
    })
}

async function createProject(req, res){
    const { data, type } = req.body;
    const userId = req.user.id;

    if( !data || !type){
        return res.json({
            success:false,
            message: "Please provide all the fields"
        })
    }

    const newProject = await Project.create({
        user: userId,
        data,
        type
    })

    res.json({success: true,
        message: "Project created successfully",
        project: newProject
    })
}

async function deleteProject(req, res){
    const { id } = req.params;
    const userId = req.user.id;

    if(!id){
        return res.json({
            success: false,
            message: "Internal error occured"
        })
    }

    const project = await Project.findById(id);

    if(!project){
        return res.json({
            success: false,
            message: "Project not found"
        })
    }

    if(project.user.toString() !== userId){
        return res.json({
            success: false,
            message: "You are not authorized to delete this project"
        })
    }

    await Project.findByIdAndDelete(id);

    res.json({
        success: true,
        message: "Project deleted successfully"
    })
}


export {getProjects, createProject, deleteProject};