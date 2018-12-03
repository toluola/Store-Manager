const userToken = localStorage.getItem("authToken");
const attendantViewProducts = document.querySelector(
	".attendant-view-products"
);
const firstTable = document.querySelector("#first-table tbody");
const tableFirst = document.querySelector("#first-table");
const tableSecond = document.querySelector("#second-table");
const secondTable = document.querySelector("#second-table tbody");
const courseList = document.querySelector("#courses-list");
const productName = document.querySelector("#courses-list h4");
const productPrice = document.querySelector(".product-price");
const viewProduct = tableFirst.getElementsByClassName("view");

// fetching all products In store attendant page

attendantViewProducts.addEventListener("click", event => {
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
				<td><a href="#" dataId="${datas.id}" class="view" onclick="View()">View</a></td>
				
				</tr>`;
			});
			courseList.style.display = "none";
			firstTable.innerHTML = html;
			tableFirst.style.display = "inline-block";
			// firstTable.style.display = "block";

			// localStorage.setItem("Products", data.products);
		})
		.catch(error => console.log(error.message));

	event.preventDefault();
});

// view an individual product

// function View() {
// 	fetch(
// 		`http://localhost:3000/api/v1/products/${document
// 			.querySelector(".view")
// 			.target()
// 			.getAttribute("dataId")}`,
// 		{
// 			method: "GET",
// 			headers: {
// 				"Content-Type": "application/json",
// 				"access-token": userToken
// 			}
// 		}
// 	)
// 		.then(res => res.json())
// 		.then(data => {
// 			tableFirst.style.display = "none";
// 			courseList.style.display = "block";
// 			productName.innerHTML = data.product.name;
// 			productPrice.innerHTML = data.product.price;
// 		})
// 		.catch(error => console.log(error.message));
// }

function View() {
	for (let i = 0; i < viewProduct.length; i++) {
		viewProduct[i].addEventListener("click", event => {
			fetch(
				`http://localhost:3000/api/v1/products/${viewProduct[
					i
				].getAttribute("dataId")}`,
				{
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"access-token": userToken
					}
				}
			)
				.then(res => res.json())
				.then(data => {
					tableFirst.style.display = "none";
					courseList.style.display = "block";
					productName.innerHTML = data.product.name;
					productPrice.innerHTML = data.product.price;
				})
				.catch(error => console.log(error.message));
		});
	}
}
