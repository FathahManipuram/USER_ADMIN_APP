import User from "../models/User.js"
import { hashPassword, comparePassword } from "../utils/password.js"



class UserService{
	//SignUp
	async createUser({name, email, password, role="user"}){
		console.log("inside create user", name, email, password, role)
		const existingUser= await User.findOne({email})
		
		if(existingUser){
			console.log("User already exists");
			
			throw new Error("User already exists")
		}
		const hashedPassword= await hashPassword(password);
       console.log("hashed password: ",hashedPassword)
		const user=await User.create({
			name,
			email,
			password:hashedPassword,
			role,
		})

		console.log("created user:",user)
		return user
	}

//Login
	async validateUser(email, password){
		console.log("inside validator: ",email, password)
		const user= await User.findOne({email})
		console.log("validate User: ",user);
		
		if(!user){
			console.log("Invalid email");
			
			throw new Error("Invalid email or password")
		}

		const isMatch= await comparePassword(password, user.password);
		console.log("password compared successsfully");
		if(!isMatch){
			console.log("Invalid password");
			
			throw new Error("Invalid email or password")
		}

		console.log("Validated ");
		
		return user;
	}


	async getAllUsers(){
		return User.find({role:"user"}).select("-password")
	}


	async searchUsers(keyword){
		return User.find({
			role:"user",
			$or:[
				{name:{$regex:keyword, $options:"i"}},
				{email:{$regex:keyword, $options:"i"}}
			],
		}).select("-password")
	}


	async updateUser(id, data){
		if(data.password){
			data.password= await hashPassword(data.password)
		}
		return User.findByIdAndUpdate(id, data, {new:true}).select("-password")
	}

	async deleteUser(id){
		return User.findByIdAndDelete(id)
	}

	async getUserById(id){
		return User.findById(id).select("-password")
	}

}


export default new UserService()