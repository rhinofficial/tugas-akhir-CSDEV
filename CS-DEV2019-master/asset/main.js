(document).ready(function(){
	let url 	= location.pathname
	let file 	= url.substring(url.lastIndexOf('/')+1)

	function goToOtherPage(pageName){
		location.replace(pageName)
	}


	if(file == 'login.html'){
		let username = "user"
		let password = "123"

		console.log(location)

		let submit = document.querySelector("#login")

		window.onload = function(){
			submit.addEventListener('click', event => {
				event.preventDefault()
				let userInput = document.querySelector('#username')
				let passInput = document.querySelector('#pass')

				if(userInput.value == username && passInput.value == password){
					swal({
						title 	: "Success",
						text 	: "Login Success",
						icon	: "Success"
					});
					setTimeout(() => {
						goToOtherPage('./index.html')
					},2000)
				}else{
					swal({
						title	:"Failed",
						text	:"Try Again",
						icon	:"error",
						button	:"Try Again!",
					});
				}
			})
		}
	}
})
