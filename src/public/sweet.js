console.log("sweet outside");


document.addEventListener("DOMContentLoaded", ()=>{
console.log("sweet inside");


//edit
const editBtn= document.querySelectorAll(".edit-btn");
if(editBtn.length>0){
	editBtn.forEach(btn=>{
btn.addEventListener("click", function(e){
	console.log("editbutton");	
	e.preventDefault()
	const url= this.getAttribute("href")
	Swal.fire({
		title:"Edit user?",
		text: "You will be redirected to edit page",
		icon: "question",
		showCancelButton: true,
		confirmButtonColor: "#f59e0b",
		cancelButtonColor: "#5c757d",
		confirmButtonText: "Yes, edit",
	}).then(result=>{
		if(result.isConfirmed){
			window.location.href=url
		}
	})
})
	})
}


// delete

const delBtn= document.querySelectorAll('.delete-btn');
if(delBtn.length>0){
	delBtn.forEach(btn=>{
		btn.addEventListener("click", function(e){
	e.preventDefault()
	const url= this.getAttribute('href')

	Swal.fire({
		title: "Delete user?",
		text: "This action cannot be undone!",
		icon: "warning",
		showCancelButton: true,
		 confirmButtonColor: "#dc3545",
        cancelButtonColor: "#6c757d",
        confirmButtonText: "Yes, delete"
	}).then(result=>{
		if(result.isConfirmed){
			window.location.href= url
		}
		
	})
})

	})
}




})

