import Router from "express";

import { getUsers } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
const router=Router()

// router.route("/").get(getUsers)

router.route("/register").post(
    upload.fields(
        [
            {
                name:"avatar",
                maxCount:1
            },
            {
                name:"coverImage",
                maxCount:2
            }
        ]
    ),
    getUsers
)


export default router;