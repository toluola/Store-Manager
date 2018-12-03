// Get the container element
const btnContainer = document.getElementById("sideMenu");

// Get all buttons with class="btn" inside the container
const btns = btnContainer.getElementsByClassName("link");
const bt = getElementsByClassName("content");

// Loop through the buttons and add the active class to the current/clicked button
for (let i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function() {
		// bt.style.display = "block";
		const current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		this.className += " active";
	});
}

function showHide(d) {
	const oneDiv = document.getElementById(d);
	const divs = ["card", "add-new", "view-sales", "view-product"];
	for (let i = 0; i < divs.length; i++) {
		bt.style.display = "block";
		if (oneDiv !== document.getElementById(divs[i])) {
			document.getElementById(divs[i]).style.display = "none";
		}
	}

	oneDiv.style.display = "block";
}
