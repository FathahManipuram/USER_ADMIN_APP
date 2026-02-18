const guestMiddleware= (req, res, next)=>{
	if(req.session.user){

		if(req.session.user.role==="admin"){
			return res.redirect("/admin/dashboard")
		}

		return res.redirect("/user/home")
		
	}
	next()
}

export default guestMiddleware