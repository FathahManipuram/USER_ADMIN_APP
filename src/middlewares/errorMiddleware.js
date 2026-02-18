const errorMiddleware= (err, req, res, next)=>{
	res.status(500).render("error", {
		message: err.message || "Something went wrong",
		
	})
}

export default errorMiddleware