document.addEventListener('DOMContentLoaded', () => {
    const productForm = document.querySelector('#productForm');

    productForm.addEventListener("submit", async (event) => {
        event.preventDefault();  // Prevent default form submission

        // Collect form data
        const productName = document.querySelector('#productName').value.trim();
        const price = document.querySelector('#price').value.trim();
        const offerOnPrice = document.querySelector('#offer_price').value.trim();
        const category = document.querySelector('#category').value;
        const rating = document.querySelector('#rating') ? document.querySelector('#rating').value.trim() : '';
        const imageFile = document.querySelector('#product_image').files[0];

        // Validate form fields
        if (!productName || !price || !offerOnPrice || !category || !imageFile) {
            alert("All fields are required!");
            return;
        }

        // Create FormData object
        const formData = new FormData();
        formData.append('productName', productName);
        formData.append('price', price);
        formData.append('offerOnPrice', offerOnPrice);
        formData.append('category', category);
        formData.append('rating', rating);
        formData.append('image', imageFile);

        try {
            const response = await fetch('http://localhost:8001/api/admin/add/product', {
                method: 'POST',
                body: formData
            });

            const result = await response.json();
            
            if (response.ok) {
                alert(result.message);
                productForm.reset();
            } else {
                alert(result.message || 'Something went wrong!');
            }
        } catch (error) {
            console.error('Error submitting product:', error);
            alert('An error occurred while adding the product. Please try again.');
        }
    });
});
