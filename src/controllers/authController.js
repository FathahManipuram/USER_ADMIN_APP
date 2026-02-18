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
	
			await userService.createUser({name, email, password})
			req.session.success= "Successfully registered"
			res.redirect("/login")
		}catch(error){
			res.render("auth/signup", {error: error.message})
		}
	}


	async postLogin(req, res){
		try{
			const {email, password}=req.body
	
			
			const user= await userService.validateUser(email, password)

			req.session.user={
				id:user._id,
				role: user.role,
				name:user.name,
			}

			if(user.role==="admin"){
				return res.redirect("/admin/dashboard")
			}

			req.session.success= "Welcome"
			res.redirect("/user/home")
	
		}catch(error){
			res.render("auth/login", {error:error.message})
		}

	}

logout(req, res){
	req.session.destroy(()=>{
		res.clearCookie("connect.sid")
		res.redirect("/login")
	})
}


}

export default new AuthController()