const username = document.getElementById("username");
const password = document.getElementById("password");
const loginError = document.querySelector(".loginError");
const loginForm = document.querySelector(".loginForm");

function jwt_decode(token) {
	const base64Url = token.split(".")[1];
	const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
	return JSON.parse(window.atob(base64));
}

loginForm.addEventListener("submit", event => {
	fetch("https://mystoremanager10.herokuapp.com/api/v1/auth/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			email: username.value,
			password: password.value
		})
	})
		.then(res => res.json())
		.then(data => {
			if (data.message !== "User logged in successfully") {
				loginError.style.display = "block";
				loginError.innerHTML = data.message;
				setTimeout(() => {
					loginError.style.display = "none";
				}, 3000);
			} else {
				localStorage.setItem("authToken", data.token);
				const decoded = jwt_decode(data.token);
				window.location =
					decoded.profile.role === "admin"
						? "admin.html"
						: "order.html";
			}
		})
		.catch(error => console.log(error.message));
	event.preventDefault();
});
