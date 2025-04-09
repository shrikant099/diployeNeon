document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id'); // Extract 'id' from URL

    if (!productId) {
        alert("Error: Product ID is missing in URL");
        console.error("Error: Product ID is missing in URL");
        return;
    }

    try {
        // Fetch product details by ID
        const fetchProductWithId = await fetch(`/api/get/product/${productId}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        });

        if (!fetchProductWithId.ok) {
            alert("Response Not Recieved: Product Get Internal Error");
            return;
        }

        const data = await fetchProductWithId.json();

        // Populate form fields with fetched product data
        document.querySelector('#product_name').value = data.productData.productName;
        document.querySelector('#product_price').value = data.productData.price;
        document.querySelector('#offer_price').value = data.productData.offerOnPrice;
        document.querySelector('#rating').value = data.productData.rating;
        document.querySelector('#category').value = data.productData.category;

        // Set image preview
        const imagePath = `/uploads/${data.productData.productImage}`;
        document.querySelector('#product_image_preview').src = imagePath;

        // Handle form submission for PUT request
        const form = document.querySelector('#edit-product-form');
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Collect form data
            const formData = new FormData();
            formData.append('productName', document.querySelector('#product_name').value);
            formData.append('price', document.querySelector('#product_price').value);
            formData.append('offerOnPrice', document.querySelector('#offer_price').value);
            formData.append('category', document.querySelector('#category').value);
            formData.append('rating', document.querySelector('#rating').value);

            // Append image file only if a new file is selected
            const imageInput = document.querySelector('#product_image');
            if (imageInput.files.length > 0) {
                formData.append('image', imageInput.files[0]);
            }

            try {
                // Send PUT request to update product
                const response = await fetch(`/api/product/edit/${productId}`, {
                    method: "PUT",
                    body: formData,
                });

                const result = await response.json();

                if (response.ok) {
                    alert(result.message);
                    window.location.href = "./admin-products.html"; // Redirect to product list page
                } else {
                    alert(`Error: ${result.message}`);
                }
            } catch (error) {
                console.error("Error updating product:", error);
                alert("Failed to update product. Please try again.");
            }
        });
    } catch (error) {
        console.log(`Error: Internal Server Error while fetching product: ${error}`);
    }
});
