
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
			
			if(response.status){
				alert("로그인 성공");
				
			}else{
				alert("사용자의 정보를 확인해 주세요.");
			}
			
		},
		error: (error) => {
			console.log(error);
		}
		
	});
}