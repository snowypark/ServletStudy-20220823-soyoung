
function send() {
	
	const userId = document.querySelector(".user-id").value;
	const userPassword = document.querySelector(".user-password");
	
	const signinButton = document.querySelector(".signin-button");
	const signupButton = document.querySelector(".signup-button");
	
	signinButton.onclick = () =>{
		send();
	}
	
	signupButton.onclick = () =>{
		location.href = "/auth/signup";
	}
	
	const userJson = JSON.stringify({		
			"userID": userId,
			"userPassword": userPassword
	})
	
	$.ajax({
		async: false,
		type: "post",
		url: "/api/v1/auth/signin",
		contentType: "application/json",
		data: {
			user: userJson
		},
		
		dataType: "json",
		success: (response) => {
			
		},
		error: (error) => {
			console.log(error);
		}
		
	});
}