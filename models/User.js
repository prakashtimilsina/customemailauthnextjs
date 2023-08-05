import mongoose, { Schema, models} from "mongoose";

const userSchema = new Schema({
    name:{
        type: String,
        required: [true, 'Please enter your fullname']
    },
    email:{
        type: String,
        required: [true, 'Please enter your email address']
    },
    password:{
        type: String,
        required: [true, 'Please enter your password']
    },
},
{timestamps: true})

const User = models.User || mongoose.model("User", userSchema);

export default User;