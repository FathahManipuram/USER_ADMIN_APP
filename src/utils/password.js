import bcrypt from "bcryptjs"

export const hashPassword= async(password)=>{

	const salt= await bcrypt.genSalt(10);
	console.log(bcrypt.hash(password, salt));
	
	return bcrypt.hash(password, salt)
}


export const comparePassword= async (password,hashedPassword)=>{
	
	console.log(password,"hashed:", hashedPassword);
	
return bcrypt.compare(password, hashedPassword)
}

