import { Router } from "express";
const router= Router();
import adminController from "../controllers/adminController.js";
import adminMiddleWare from "../middlewares/adminMiddleware.js";



router.get("/dashboard", adminMiddleWare, adminController.getDashboard)
router.get("/search", adminMiddleWare,adminController.searchUsers)
router.get("/delete/:id",adminMiddleWare, adminController.deleteUser)
router.get("/edit/:id", adminMiddleWare, adminController.getEditUser)
router.post("/edit/:id", adminMiddleWare, adminController.postEditUser)

export default router