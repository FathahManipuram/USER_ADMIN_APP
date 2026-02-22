
class UserController{
	getHome(req, res){
		res.render("user/home", {
			user: req.session.user.name,
		})
		
	}
}

export default new UserController()