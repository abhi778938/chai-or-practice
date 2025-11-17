import { asyncHandler } from "../utils/asyncHandler.js";
import { apiError } from "../utils/apiError.js";
import { appResp } from "../utils/appResponse.js";
import { cloudinaryFile } from "../utils/cloudinary.js";
import { User } from "../models/user.models.js";
import router from "../routes/product.router.js";
// import { upload } from "../middlewares/multer.middleware.js";
// import { User } from "../models/user.models.js";
const getUsers = asyncHandler(async (req, res) => {
  // get user details from frontend
  // check validation not empty fields
  //check user already exist : email ,username
  // check  for images  and avatar,
  // upload on cloudnary,avatar
  // to save on db to entery- create user object - create entery on db
  // remove password and refresh token and  field from response
  // check user creation
  // return response
  res.json("hello world");
  const { username, fullName, password, email } = req.body;

  // console.log("email",email);
  console.log(req.body);
  if (
    [username, fullName, password, email].some((field) => {
      field?.trim() === "";
    })
  ) {
    throw new apiError(400, "all feilds are require");
  }

const checkUsr=User.findOne(
  {
    $or:[{email},{username}]
  }
)
if(checkUsr){
  throw new apiError(409,"this already axisted")
}
const checkAavatar=req.file?.avatar[0]?.path
const checkCoverImage=req.file?.coverImage[0]?.path
if(!checkAavatar){
  throw new apiError(404,"avatar is required")
}

const avatar= await cloudinaryFile(checkAavatar)
const coverImg= await cloudinaryFile(checkCoverImage)
console.log(avatar);
if(!avatar){
  throw new apiError(400,"avatar is reqired")
}
const user= await User.create({
  fullName,avatar:avatar.url,
  coverImage:coverImage?.url|| "",
  password,
  username:username.toLowerCase()
})
 const registerUser=await User.findById(user._id).select("-password -refreshToken" )
if (!registerUser) {
  throw new apiError(500,"something server problem");

}

 return res.status(201).json(
  new appResp(200,registerUser,"user registered successfully!")
)
})

export { getUsers };
