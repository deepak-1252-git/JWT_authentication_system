import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username :{
        type:String,
        require:[true,"username is required"],
        unique:[true,"username must be unique"]
    },
    email :{
        type:String,
        require:[true,"username is required"],
        unique:[true,"username must be unique"]
    },
    password :{
        type:String,
        require:[true,"username is required"]
    }
})

const userModel = mongoose.model("users",userSchema);

export default userModel;