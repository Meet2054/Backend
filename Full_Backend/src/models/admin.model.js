import mongoose , { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"; 


const AdminSchema = new Schema({
    username : {
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        index : true,
        trim : true

    },
    email :{
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        trim : true

    },
    fullname : {
        type : String,
        required : true,
        lowercase : true,
        trim : true,
        index : true
    },
    avatar : {
         type: String,   // cloudinary url
         required : true 

    },
    coverimg: { 
        type: String 
    },
    password : {
        type : String,
        required : [true,"Password is required"],
         
    },
    refreshToken : {type : String},
    
},{timestamps : true})

//Hashing the password before saving in the user schema  
userSchema.pre=("save",async function (next){
    if(!this.isModified("password")) return next();

    this.password = bcrypt.hash(this,password,10);
    next(); 
})

// Creating a custom method to check the pawword is correct or not
userSchema.methods.isPasswordCorrect = async function (password){
    return await bcrypt.compare(password,this.password);
} 

AdminSchema.methods.genrateAccessToken = function(){
    return jwt.sign(
        {
            _id : this._id,
            username : this.username,
            email : this.email,
            fullname : this.fullname,

        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRE
        }
    )
};

AdminSchema.methods.genrateRefreshToken = function(){
    return jwt.sign(
        {
            _id : this._id, 

        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRE
        }
    )
}


export const  Admin = mongoose.model("Admin",AdminSchema);