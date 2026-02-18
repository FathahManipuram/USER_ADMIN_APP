import dotenv from "dotenv/config";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import connectDB from "./src/config/db.js"
import sessionConfig from "./src/config/session.js";
import authRoutes from "./src/routes/auth.routes.js";
import userRoutes from "./src/routes/user.routes.js";
import adminRoutes from "./src/routes/admin.routes.js";
import loggerMiddleware from "./src/middlewares/loggerMiddleware.js";
import errorMiddleware from "./src/middlewares/errorMiddleware.js";
import successMiddleware from "./src/middlewares/successMiddleware.js";
import cacheMiddleware from "./src/middlewares/cacheMiddleware.js";


const app= express();
connectDB()

const __filename= fileURLToPath(import.meta.url);
const __dirname= path.dirname(__filename)


app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"src","views"))

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, "src","public")))
app.use(sessionConfig)
app.use(cacheMiddleware)
app.use(loggerMiddleware)
app.use(successMiddleware)


app.use("/", authRoutes)
app.use("/user",userRoutes)
app.use("/admin", adminRoutes)

app.use((req, res)=>{
	res.locals.user= req.session.user
	console.log(req.session.user.role)
	res.status(404).render("error",{
		message:"Page not found",
	})
})
app.use(errorMiddleware)

const PORT= process.env.PORT ||3000
app.listen(PORT,()=>{
	console.log("Port running")
})