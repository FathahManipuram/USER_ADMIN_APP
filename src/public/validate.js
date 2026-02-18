
const form= document.querySelector('form')

form.addEventListener('submit', (e)=>{
	if(!validateForm()){
		e.preventDefault()
		console.log("prevented")
	}
})

function validateForm(){

	const userName= document.querySelector('input[type="text"]')
	const email= document.querySelector('input[type="email"]')
	const password= document.querySelector('input[type="password"]')
	
	const errorname= document.querySelector(".userName")
	const errorEmail= document.querySelector(".Email")
	const errorPassword= document.querySelector(".password")

	let isValid= true;

	if (errorname) errorname.textContent = ""
  	if (errorEmail) errorEmail.textContent = ""
  	if (errorPassword) errorPassword.textContent = ""
	
	if(userName){
	nameVal= userName.value.trim()
	const namePattern= /^[A-Za-z]+$/

			if(!namePattern.test(nameVal)){
			errorname.textContent= "Username can contain only letters"
			isValid= false
			}else if(nameVal.length <4){
			errorname.textContent="Username must be at least 4 characters"
			isValid=false
			}

	}


	const emailPattern= /^[^@\s]+@[^\s@]+\.[^\s@]+$/
	const emailVal= email.value.trim()

	if(!emailPattern.test(emailVal)){
		errorEmail.textContent= "Enter a valid email"
		isValid= false;
	}

const passwordVal= password.value.trim()
	if(passwordVal.length<6){
		errorPassword.textContent= "Password must be at least 6 characters"
		isValid=false;
	}

	return isValid
}
