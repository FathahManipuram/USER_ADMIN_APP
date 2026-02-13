
class UserController{
	getHome(req, res){
		res.render("user/home", {
			user: req.session.user
		})
		
	}
}

export default new UserController()