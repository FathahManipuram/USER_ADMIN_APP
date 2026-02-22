const adminOnlyMiddleware=(req, res, next)=>{
	if(req.session.user.role==="admin"){
	//	res.session.locals= req.session.user
		return res.redirect("/admin/dashboard")
	}
	next()
}
 export default adminOnlyMiddleware