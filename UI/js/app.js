const userToken = localStorage.getItem("authToken");
const viewProduct = document.querySelector(".adminViewProducts");
const viewSale = document.querySelector(".adminViewSales");
const firstTable = document.querySelector("#first-table tbody");
const tableFirst = document.querySelector("#first-table");
const tableSecond = document.querySelector("#second-table");
const secondTable = document.querySelector("#second-table tbody");
const addProductsForm = document.querySelector(".addProductsForm");
const productName = document.querySelector(".product-name");
const productPrice = document.querySelector(".product-price");
const productQuantity = document.querySelector(".product-quantity");
const modal = document.querySelector(".modal");
const modalText = document.querySelector(".modal p");
const span = document.getElementsByClassName("close")[0];
const storeAttendantForm = document.querySelector(".storeAttendantForm");
const firstname = document.querySelector(".firstname");
const lastname = document.querySelector(".lastname");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const newName = document.querySelector(".new-name");
const newPrice = document.querySelector(".new-price");
const newQuantity = document.querySelector(".new-quantity");
const deleteProduct = tableFirst.getElementsByClassName("delete");

// view all products
viewProduct.addEventListener("click", event => {
	fetch("http://localhost:3000/api/v1/products", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"access-token": userToken
		}
	})
		.then(res => res.json())
		.then(data => {
			let html = "";

			data.products.forEach(datas => {
				html += `
				<tr>
				<td>${datas.name}</td>
				<td>${datas.price}</td>
				<td>${datas.quantity}</td>
				<td><a href="#" dataId="${
					datas.id
				}" class="edit" onclick="openForm()">Edit</a></td>
                <td><a href="#" dataId="${
					datas.id
				}" class="delete" onclick="Delete()">Delete</a></td>
				</tr>`;
			});
			tableSecond.style.display = "none";
			tableFirst.style.display = "inline-block";
			firstTable.innerHTML = html;
		})
		.catch(error => console.log(error.message));

	event.preventDefault();
});

// Add Products

addProductsForm.addEventListener("submit", event => {
	fetch("http://localhost:3000/api/v1/products", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"access-token": userToken
		},
		body: JSON.stringify({
			name: productName.value,
			price: productPrice.value,
			quantity: productQuantity.value
		})
	})
		.then(res => res.json())
		.then(data => {
			modal.style.display = "block";
			modalText.innerHTML = data.message;
		})
		.catch(error => console.log(error.message));

	event.preventDefault();
});

// Close Modal

span.onclick = function() {
	modal.style.display = "none";
	window.location.reload();
};

// Add store attendant

storeAttendantForm.addEventListener("submit", event => {
	fetch("http://localhost:3000/api/v1/auth/signup", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"access-token": userToken
		},
		body: JSON.stringify({
			firstname: firstname.value,
			lastname: lastname.value,
			email: email.value,
			password: password.value
		})
	})
		.then(res => res.json())
		.then(data => {
			modal.style.display = "block";
			modalText.innerHTML = data.message;
		})
		.catch(error => console.log(error.message));

	event.preventDefault();
});

// View All Sales

viewSale.addEventListener("click", event => {
	fetch("http://localhost:3000/api/v1/sales", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"access-token": userToken
		}
	})
		.then(res => res.json())
		.then(data => {
			let html = "";

			data.sales.forEach(datas => {
				html += `
				<tr>
				<td>${datas.name}</td>
				<td>${datas.price}</td>
				<td>${datas.quantity}</td>
				</tr>`;
			});
			tableFirst.style.display = "none";
			tableSecond.style.display = "inline-block";
			secondTable.innerHTML = html;
		})
		.catch(error => console.log(error.message));

	event.preventDefault();
});

function Delete() {
	for (let i = 0; i < deleteProduct.length; i++) {
		deleteProduct[i].addEventListener("click", event => {
			fetch(
				`http://localhost:3000/api/v1/products/${deleteProduct[
					i
				].getAttribute("dataId")}`,
				{
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
						"access-token": userToken
					}
				}
			)
				.then(res => res.json())
				.then(data => {
					modal.style.display = "block";
					modalText.innerHTML = data.message;
				})
				.catch(error => console.log(error.message));
		});
	}
}

// form pop-up

function openForm() {
	document.getElementById("myForm").style.display = "block";
}

function closeForm() {
	document.getElementById("myForm").style.display = "none";
}

// Editing a Product

function Edit() {
	fetch(
		`http://localhost:3000/api/v1/products/${document
			.querySelector(".edit")
			.getAttribute("dataId")}`,
		{
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				"access-token": userToken
			},
			body: JSON.stringify({
				name: newName.value,
				price: newPrice.value,
				quantity: newQuantity.value
			})
		}
	)
		.then(res => res.json())
		.then(data => {
			modal.style.display = "block";
			modalText.innerHTML = data.message;
		})
		.catch(error => console.log(error.message));
}
