import {Router} from "express"
const router = Router();
import authController from "../controllers/authController.js"
import guestMiddleware from "../middlewares/guestMiddleware.js";


router.get("/login", guestMiddleware, authController.getLogin)
router.post("/login",authController.postLogin)

router.get("/signup", guestMiddleware, authController.getSigup)
router.post("/signup", authController.postSignup)

router.post("/logout", authController.logout)


export default router;