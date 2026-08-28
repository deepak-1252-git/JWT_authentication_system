import mongoose from 'mongoose';

const sessionSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref :"users",
        require:[true,"User is required"]
    },
    refreshTokenHash:{
        type:String,
        require:[true,"Hash Token is requird"]
    },
    ip:{
        type:String,
        require:[true,"IP address is required"]
    },
    userAgent:{
        type:String,
        require:[true,"User agent is require"]
    },
    revoked:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
})

const sessionModel = mongoose.model("sessions",sessionSchema)

export default sessionModel;