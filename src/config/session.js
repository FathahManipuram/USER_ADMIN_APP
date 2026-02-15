
//import dotenv from "dotenv/config"
import session from "express-session";
import MongoStore from "connect-mongo";


console.log("ENV MONGO:", process.env.MONGO_URI);
const sessionConfig= session({
	name: "user_admin_session",
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitialized: false,


	store: MongoStore.create({
		mongoUrl:process.env.MONGO_URI,
		collectionName:"sessions",
	}),

	cookie: {
		httpOnly: true,
		secure: false,
		sameSite: "lax",
		maxAge:1000*60*60*24,
	},
})

export default sessionConfig