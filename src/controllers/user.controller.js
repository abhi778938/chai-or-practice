import  {asyncHandler} from "../utils/asyncHandler.js";
 const getUsers = asyncHandler(async(req, res) => {

  res.json({ message: "All users fetched successfully" });

});


export{ getUsers }