const errorMiddleware= (err, req, res, next)=>{
	console.log(err)
	res.status(500).render("error", {
		message: err.message || "Something went wrong",
		
	})
}

export default errorMiddleware