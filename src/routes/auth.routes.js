import {Router} from "express"
const router = Router();
import authController from "../controllers/authController.js"


router.get("/login", authController.getLogin)
router.post("/login",authController.postLogin)

router.get("/signup", authController.getSigup)
router.post("/signup", authController.postSignup)

router.get("/logout",authController.logout)


export default router;