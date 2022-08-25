/**
 * 
 */

const signupButton = document.querySelector(".signup-button");


signupButton.onclick = () => {
	const user = {
		userID: document.querySelector(".user-id").value,
		userPassword: document.querySelector(".user-passowrd").value,
		userName: document.querySelector(".user-name").value,
		userEmail: document.querySelector(".user-email").value
	}
	
	send(user);
	
}


function send(user) {
	
	$.ajax({
		async: false,
		type: "post",					
		url: "/api/v1/auth/signup", 	
		data: user,					
		dataType: "json",		
				
		success: (response) =>{			
			alert("회원가입 성공.");
			console.log(response);
			document.querySelector("body").innerHTML = `
				<h1>${response.id}</h1>
				<h1>${response.pw}</h1>
				<h1>${response.name}</h1>
				<h1>${response.email}</h1>
			
			`
		},
		
		error: (error) => {				
			console.log(error);
			
			}
			
	});

}