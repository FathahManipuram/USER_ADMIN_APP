
class UserController{
	getHome(req, res){
		res.render("user/home", {
			user: req.session.user.name.toUpperCase(),
		})
		
	}
}

export default new UserController()