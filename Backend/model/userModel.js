import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
        default: true,
    },
    plan: {
        type: String,
        default: "basic",
        enum: ["basic", "standard"]
    },
    admin: {
        type: Boolean,
        default: false
    },
    password: {
        type: String,
        required: true,
    }
}, { timestamps: true });


const User = mongoose.model("User", userSchema);

export default User;