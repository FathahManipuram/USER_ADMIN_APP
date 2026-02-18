
const successMiddleware = (req, res, next)=>{
	res.locals.success= req.session.success
	req.session.success= null

	next()

}

export default successMiddleware