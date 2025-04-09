document.addEventListener('DOMContentLoaded', async () => {

    try {
        const fetchProduct = await fetch('/api/get/product', {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        });

        if (!fetchProduct.ok) {
            alert("Product Fetcing Error")
            return
        };


        console.log(fetchProduct);

        const productData = await fetchProduct.json();
        const product = Array.isArray(productData.allProduct) ? productData.allProduct : [];
        if (!Array.isArray(product)) {
            throw new Error("Users is not an Array format!");
        };


        const tableBody = document.querySelector("#table tbody");
        tableBody.innerHTML = '';  // Clear existing rows
        product.forEach((product) => {
            const userRow = `
            <tr>
                <td>${product.productName || "N/A"}</td>
                <td>${product.price || "N/A"}</td>
                <td>${product.offerOnPrice || "N/A"}</td>
                <td>${product.category || "N/A"}</td>
                <td>${product.rating || "N/A"}</td>
                <td>${product.clickCount || 0}</td>
                <td>            
                    <img src="./edit.png" class="icons" style="width:20px; height: 20px; cursor:pointer;" data-id="${product._id}" />
                    <img src="./bin(1).png" class="icons" style="width:20px; height: 20px; cursor:pointer;" data-id="${product._id}" />
                </td> 
            </tr>
            `;
            tableBody.innerHTML += userRow;
        })

    } catch (error) {
        alert("Error fetching Internal server Error Product");
        return;
    }

    const table = document.querySelector('#table');
    table.addEventListener('click', async (event) => {
        if (event.target.tagName === "IMG" && event.target.getAttribute('src') === './bin(1).png') {
            const id = event.target.dataset.id;
            console.log(`Id Delete ${id}`);
            if (confirm("Are You sure you want to Delete User ?")) {
                try {
                    const response = await fetch(`/api/product/delete/${id}`, {
                        method: "DELETE",
                    });
                    if (!response.ok) {
                        throw new Error("Error: DELETE User !!");
                    }
                    const result = await response.json();
                    alert("User Delete Succesfull");
                    location.reload()
                } catch (error) {
                    console.log(`Error: Delete User : ${error}`);
                }
            }
        }
    });


    // Edit Icon
    table.addEventListener('click', (event) => {
        if (event.target.tagName === "IMG" && event.target.getAttribute('src') === './edit.png') {
            const updateUserId = event.target.dataset.id;
            console.log(`Update user Id ${updateUserId}`);
            window.location.href =  `../admin-product-edit.html?id=${updateUserId}`;
        }
    });
})