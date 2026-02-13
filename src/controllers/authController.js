import userService from "../services/userService.js"

class AuthController{
	getLogin(req, res){
		res.render("auth/login",{error:null})
	}

	getSigup(req, res){
		res.render("auth/signup", {error:null})
	}


	async postSignup(req, res){
		try{
			const {name, email, password}=req.body
			console.log(req.body)
			await userService.createUser({name, email, password})
			console.log("stored in db");
			
			res.redirect("/login")
		}catch(error){
			res.render("auth/signup", {error: error.message})
		}
	}


	async postLogin(req, res){
		try{
			const {email, password}=req.body
			console.log("login:", req.body);
			console.log("inside postlogin");
			
			const user= await userService.validateUser(email, password)
			console.log("looged user", user);

			req.session.user={
				id:user._id,
				role: user.role,
				name:user.name,
			}

			if(user.role==="admin"){
				return res.redirect("/admin/dashboard")
			}

			res.redirect("/user/home")

			console.log("logged");
			
			
		}catch(error){
			res.render("auth/login", {error:error.message})
		}

	}

logout(req, res){
	req.session.destroy(()=>{
		res.redirect("/login")
	})
}


}

export default new AuthController()