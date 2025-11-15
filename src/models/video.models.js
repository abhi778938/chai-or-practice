import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSechma= new Schema({
   videoFile:{
    type:String,  // from cloudnary
    required:true,

   } ,
   thumbnale:{
    type:String,
    required:true
   }
   ,
   discription:{
    type:String,
    required:true
   },
   duration:{
    type:Number,
    required:true
   },
   views:{
    type:Number,

   },
   isPublished:{
    type:String
   },
   owner:{
    type:Schema.Types.ObjectId,
    ref:"User"
   }
},{timestamps:true})

videoSechma.plugin(mongooseAggregatePaginate)
export const Video= mongoose.model("Video",videoSechma)