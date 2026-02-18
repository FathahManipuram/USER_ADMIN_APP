const cacheMiddleware= (req, res, next)=>{
	res.setHeader("Cache-Control","no-store, no-cache, must-revalidate, private");
	res.setHeader("pragma", "no-cache");
	res.setHeader("Expires", "0")
	next()

}

export default cacheMiddleware