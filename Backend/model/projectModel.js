import mongoose from 'mongoose';

const projectSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    data: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
}, { timestamps: true });

const Project = mongoose.model('Project', projectSchema);

export default Project;