import dotenv from "dotenv";
dotenv.config();
import express from "express";
import session from "express-session";
import path from "path";
import { fileURLToPath } from "url";
import nocache from "nocache";

import connectDB from "./src/config/db.js"
import authRoutes from "./src/routes/auth.routes.js";
import userRoutes from "./src/routes/user.routes.js";
import adminRoutes from "./src/routes/admin.routes.js";


const app= express();
connectDB()

const __filename= fileURLToPath(import.meta.url);
const __dirname= path.dirname(__filename)


app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"src","views"))

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, "src","public")))
app.use (nocache())
app.use(
	session({
		secret:process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: false,
	})
)

app.use("/", authRoutes)
app.use("/user",userRoutes)
app.use("/admin", adminRoutes)


const PORT= process.env.PORT ||3000
app.listen(PORT,()=>{
	console.log("Port running")
})