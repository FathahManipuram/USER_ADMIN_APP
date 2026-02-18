import { Router } from "express";
const router= Router()
import userController from "../controllers/userController.js"
import authMiddleware from "../middlewares/authMiddleware.js";
import adminOnlyMiddleware from "../middlewares/adminOnlyMiddleware.js";

router.get("/home", authMiddleware, adminOnlyMiddleware, userController.getHome)

export default router;