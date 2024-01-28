function Validation() {
	var user = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var password = document.getElementById('password').value;
	function userName() {
		if (user.length < 4) {
			if (user.length < 1) {
				errMess("namErr", "!Name required")
				user = false
			}
			else {
				errMess("namErr", "!Name is less then 4 lettet")
				user = false
			}
		}
		else {
			errMess("namErr", "")
			user = true
		}
	}
	function userPass() {
		if (password.length < 8) {
			errMess("passErr", "!Password is less then 8")
			password = false
		}
		else {
			if(!password.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[a-z]{2,}$/)){
				errMess("passErr", "!Enter strong password capital letter with spacial letter")
				password=false
			}
			else {
				errMess("passErr", "")
				password = true
			}
		}
	}

	function userEmail() {
		if (!email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
			errMess("emailErr", "!email not match")
			email = false
		}
		else {
			errMess("emailErr", "")
			email = true
		}
	}
	userPass()
	userEmail()
	userName()
	if (user == true && password == true && email == true) {
		return true
	} else {
		return false
	}
}
function errMess(id, message) {
	document.getElementById(id).innerHTML = message
}