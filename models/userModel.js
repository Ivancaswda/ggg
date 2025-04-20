import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    clerkId: {type:String, required:true, unique: true},
    full_name: {type: String, required:true},
    email: {type:String, required:true, unique:true},
    photo: {type:String, default: ''}
}, {minimize:false})

const userModel = mongoose.models.user || mongoose.model("user", userSchema)

export default userModel