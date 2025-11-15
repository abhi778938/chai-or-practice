import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
const userSechma = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    avatar: {
      type: String, // avatar get from cloudnary
      required: true,
    },
    coverImage: {
      type: String, // avatar get from cloudnary
    },
    watchHistory: [
      {
        type: Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
    password: {
      type: String,
      required: [true, "password is required"],
    },
  },
  { timestamps: true }
);


userSechma.pre("save",async function(next) {
    if(!this.isModified("password")) return next();
    this.password=bcrypt.hash(this.password,10)
    next()
})

userSechma.methods.isCorrectPassword =async function (password) {
  return  await bcrypt.compare(password,this.password) 
}
userSechma.methods.accessToken=async function (){
  return  jwt.sign({
       _id:this._id,
email:this.email,
username:this.username,
fullName:this.fullName
    },
    process.env.ACCESSS_TOKEN_SECERT,{
        expiresIn:process.env.ACCESS_EXPIRY_TOKEN
    }
)
}

userSechma.methods.refreshToken=async function (){
 return  jwt.sign({
       _id:this._id
    },
    process.env.REFRESH_TOKEN_SECERT,{
        expiresIn:process.env.REFRESH_EXPIRY_TOKEN
    }
)
}


export const User = mongoose.model("User", userSechma);