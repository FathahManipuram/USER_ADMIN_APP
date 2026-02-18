const adminOnlyMiddleware=(req, res, next)=>{
	if(req.session.user.role==="admin"){
		return res.redirect("/admin/dashboard")
	}
	next()
}
 export default adminOnlyMiddleware