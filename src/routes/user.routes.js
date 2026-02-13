import { Router } from "express";
const router= Router()
import userController from "../controllers/userController.js"
import authMiddleware from "../middlewares/authMiddleware.js";

router.get("/home", authMiddleware, userController.getHome)

export default router;