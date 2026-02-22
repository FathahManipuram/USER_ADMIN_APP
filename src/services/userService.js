import User from "../models/User.js"
import { hashPassword, comparePassword } from "../utils/password.js"


class UserService{
	//SignUp
	async createUser({name, email, password, role="user"}){
		const existingUser= await User.findOne({email})
		
		if(existingUser){
			console.log("User already exists");
			
			throw new Error("User already exists")
		}
		const hashedPassword= await hashPassword(password);

		const user=await User.create({
			name,
			email,
			password:hashedPassword,
			role,
		})
		return user
	}

//Login
	async validateUser(email, password){
		const user= await User.findOne({email})
		
		if(!user){
			throw new Error("Invalid email or password")
		}

		const isMatch= await comparePassword(password, user.password);
		if(!isMatch){
			throw new Error("Invalid email or password")
		}
		
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
		// if(data.password){
		// 	data.password= await hashPassword(data.password)
		// }
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