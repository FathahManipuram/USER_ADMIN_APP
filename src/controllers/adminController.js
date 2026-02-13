import userService from "../services/userService.js"

class AdminController{
	async getDashboard(req, res){
	const users= await userService.getAllUsers()

		res.render("admin/dashboard",{
			admin: req.session.user,
			users,
		})
	}

	async searchUsers(req, res){
		const {keyword}=req.query;
		const users= await userService.searchUsers(keyword)

		res.render("admin/dashboard",{
			admin:req.session.user,
			users,
		})
	}

	async deleteUser(req, res){
		const { id }= req.params;
		await userService.deleteUser(id)

		res.redirect("/admin/dashboard")
	}


	async getEditUser(req, res){
		const { id }=req.params;
		const user= await userService.getUserById(id)

		res.render("admin/editUser", {user})

	}

	async postEditUser(req, res){
		const { id }=req.prarms

		await userService.updateUser(id, req.body)
		res.redirect("/admin/dashboard")
	}



}

export default new AdminController()