document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Fetch API response
        const response = await fetch('/api/get/product', {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            console.log("Error fetching product");
            return;
        }

        const fetchedProduct = await response.json();

        if (!fetchedProduct || !fetchedProduct.allProduct) {
            return console.log('Error: No products found');
        }

        // Hobies and intresst
        const cardOne = document.querySelector("#product-slider-wrapper");
        fetchedProduct.allProduct.forEach(product => {
            if (product.category === "Hobbies & Interests") {
                // Generate image path
                const imagePath = `/uploads/${product.productImage}`;
                const productCard = document.createElement('div');
                productCard.classList.add('product-card');
                productCard.innerHTML = `
                    <img src="${imagePath}" style="width:300px; height:300px; background-size: cover;" alt="${product.productName}">
                    <h4 class="product">${product.productName}</h4>
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <span>(${product.rating})</span>
                    </div>
                    <p class="old-price">
                        Rs. ${product.price}
                    </p>
                    <p class="price">
                        From Rs. ${product.offerOnPrice}
                    </p>
                <button data-id=${product._id} class="whatsapp-btn">Order on WhatsApp</button>
                `;

                cardOne.appendChild(productCard);

                // Select the WhatsApp button for this 


                const whatsappBtn = productCard.querySelector('.whatsapp-btn');
                whatsappBtn.addEventListener('click', async (event) => {
                    const id = event.target.dataset.id; // Product ID
                
                    try {
                        // Send the click request without token
                        const updateClick = await fetch(`/api/update/product-click/${id}`, {
                            method: "POST",
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                            },
                        });
                
                        if (!updateClick.ok) {
                            console.error("Error updating product click count");
                            return;
                        }
                
                        const clickResponse = await updateClick.json();
                        console.log("Click count updated:", clickResponse);
                
                        // Extract product details from the response
                        const product = clickResponse.product;
                        const message = `Hello, I am interested in the product: ${product.productName}.\nPrice: ₹${product.price}\nCategory: ${product.category}`;
                
                        // WhatsApp URL with product details
                        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
                
                        // Open WhatsApp chat with product details
                        window.open(whatsappUrl, "_blank");
                
                    } catch (error) {
                        console.error("Error handling click event:", error);
                    }
                });
            } else {
                // console.log(`Skipped product: ${product.productName} as it doesn't match category.`);
            };


            // Home Decor Category
            const cardNumberTwo = document.querySelector("#product-slider-wrapper11");
            if (product.category === 'Home Decor') {
                const imagePath = `/uploads/${product.productImage}`;
                const productCard = document.createElement('div');
                productCard.classList.add('product-card');
                productCard.innerHTML = `
                    <img src="${imagePath}" style="width:300px; height:300px; background-size: cover;" alt="${product.productName}">
                    <h4 class="product">${product.productName}</h4>
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <span>(${product.rating})</span>
                    </div>
                    <p class="old-price">
                        Rs. ${product.price}
                    </p>
                    <p class="price">
                        From Rs. ${product.offerOnPrice}
                    </p>
                <button data-id=${product._id} class="whatsapp-btn">Order on WhatsApp</button>
                `;
                cardNumberTwo.appendChild(productCard);

                // Select the WhatsApp button for this product
                const whatsappBtn = productCard.querySelector('.whatsapp-btn');
                whatsappBtn.addEventListener('click', async (event) => {
                    const id = event.target.dataset.id; // Product ID
                
                    try {
                        // Send the click request without token
                        const updateClick = await fetch(`/api/update/product-click/${id}`, {
                            method: "POST",
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                            },
                        });
                
                        if (!updateClick.ok) {
                            console.error("Error updating product click count");
                            return;
                        }
                
                        const clickResponse = await updateClick.json();
                        console.log("Click count updated:", clickResponse);
                
                        // Extract product details from the response
                        const product = clickResponse.product;
                        const message = `Hello, I am interested in the product: ${product.productName}.\nPrice: ₹${product.price}\nCategory: ${product.category}`;
                
                        // WhatsApp URL with product details
                        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
                
                        // Open WhatsApp chat with product details
                        window.open(whatsappUrl, "_blank");
                
                    } catch (error) {
                        console.error("Error handling click event:", error);
                    }
                });



            } else {
                // console.log(`Do not Match This Category`)
            }

            // bussiness Specific Category
            const bussinessSpecific = document.querySelector('#product-slider-wrapper22')
            if (product.category === 'Business Specific') {
                const imagePath = `/uploads/${product.productImage}`;
                const productCard = document.createElement('div');
                productCard.classList.add('product-card');
                productCard.innerHTML = `
                    <img src="${imagePath}" style="width:300px; height:300px; background-size: cover;" alt="${product.productName}">
                    <h4 class="product">${product.productName}</h4>
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <span>(${product.rating})</span>
                    </div>
                    <p class="old-price">
                        Rs. ${product.price}
                    </p>
                    <p class="price">
                        From Rs. ${product.offerOnPrice}
                    </p>
                <button data-id=${product._id} class="whatsapp-btn">Order on WhatsApp</button>

                `;

                bussinessSpecific.appendChild(productCard);

                // Select the WhatsApp button for this product
                const whatsappBtn = productCard.querySelector('.whatsapp-btn');
                whatsappBtn.addEventListener('click', async (event) => {
                    const id = event.target.dataset.id; // Product ID
                
                    try {
                        // Send the click request without token
                        const updateClick = await fetch(`/api/update/product-click/${id}`, {
                            method: "POST",
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                            },
                        });
                
                        if (!updateClick.ok) {
                            console.error("Error updating product click count");
                            return;
                        }
                
                        const clickResponse = await updateClick.json();
                        console.log("Click count updated:", clickResponse);
                
                        // Extract product details from the response
                        const product = clickResponse.product;
                        const message = `Hello, I am interested in the product: ${product.productName}.\nPrice: ₹${product.price}\nCategory: ${product.category}`;
                
                        // WhatsApp URL with product details
                        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
                
                        // Open WhatsApp chat with product details
                        window.open(whatsappUrl, "_blank");
                
                    } catch (error) {
                        console.error("Error handling click event:", error);
                    }
                });
            } else {
                //    console.log(`Do not match you category in database`);
            };

            // Event And Celebrations
            const EventCelebrations = document.querySelector('#product-slider-wrapper33')
            if (product.category === 'Event & Celebrations') {
                const imagePath = `/uploads/${product.productImage}`;
                const productCard = document.createElement('div');
                productCard.classList.add('product-card');
                productCard.innerHTML = `
                    <img src="${imagePath}" style="width:300px; height:300px; background-size: cover;" alt="${product.productName}">
                    <h4 class="product">${product.productName}</h4>
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <span>(${product.rating})</span>
                    </div>
                    <p class="old-price">
                        Rs. ${product.price}
                    </p>
                    <p class="price">
                        From Rs. ${product.offerOnPrice}
                    </p>
                <button data-id=${product._id} class="whatsapp-btn">Order on WhatsApp</button>

                `;


                EventCelebrations.appendChild(productCard);

                const whatsappBtn = productCard.querySelector('.whatsapp-btn');
                whatsappBtn.addEventListener('click', async (event) => {
                    const id = event.target.dataset.id; // Product ID
                
                    try {
                        // Send the click request without token
                        const updateClick = await fetch(`/api/update/product-click/${id}`, {
                            method: "POST",
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                            },
                        });
                
                        if (!updateClick.ok) {
                            console.error("Error updating product click count");
                            return;
                        }
                
                        const clickResponse = await updateClick.json();
                        console.log("Click count updated:", clickResponse);
                
                        // Extract product details from the response
                        const product = clickResponse.product;
                        const message = `Hello, I am interested in the product: ${product.productName}.\nPrice: ₹${product.price}\nCategory: ${product.category}`;
                
                        // WhatsApp URL with product details
                        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
                
                        // Open WhatsApp chat with product details
                        window.open(whatsappUrl, "_blank");
                
                    } catch (error) {
                        console.error("Error handling click event:", error);
                    }
                });
            } else {
                //  console.log(`This category Not match in your database`)
            };


            //  Costam Design  
            const CustomDesign = document.querySelector('#product-slider-wrapper44')
            if (product.category === 'Custom Design') {
                const imagePath = `/uploads/${product.productImage}`;
                const productCard = document.createElement('div');
                productCard.classList.add('product-card');
                productCard.innerHTML = `
                    <img src="${imagePath}" style="width:300px; height:300px; background-size: cover;" alt="${product.productName}">
                    <h4 class="product">${product.productName}</h4>
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <span>(${product.rating})</span>
                    </div>
                    <p class="old-price">
                        Rs. ${product.price}
                    </p>
                    <p class="price">
                        From Rs. ${product.offerOnPrice}
                    </p>
                <button data-id=${product._id} class="whatsapp-btn">Order on WhatsApp</button>

                `;

                CustomDesign.appendChild(productCard)
                const whatsappBtn = productCard.querySelector('.whatsapp-btn');
                whatsappBtn.addEventListener('click', async (event) => {
                    const id = event.target.dataset.id; // Product ID
                
                    try {
                        // Send the click request without token
                        const updateClick = await fetch(`/api/update/product-click/${id}`, {
                            method: "POST",
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                            },
                        });
                
                        if (!updateClick.ok) {
                            console.error("Error updating product click count");
                            return;
                        }
                
                        const clickResponse = await updateClick.json();
                        console.log("Click count updated:", clickResponse);
                
                        // Extract product details from the response
                        const product = clickResponse.product;
                        const message = `Hello, I am interested in the product: ${product.productName}.\nPrice: ₹${product.price}\nCategory: ${product.category}`;
                
                        // WhatsApp URL with product details
                        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
                
                        // Open WhatsApp chat with product details
                        window.open(whatsappUrl, "_blank");
                
                    } catch (error) {
                        console.error("Error handling click event:", error);
                    }
                });
                
            } else {
                //  console.log(`This category Not match in your database`)
            };

            // Seasonal theame 
            const SeasonalTheame = document.querySelector('#seasonalTheame');
            if (product.category === "Seasonal Themes") {
                const imagePath = `/uploads/${product.productImage}`;
                const productCard = document.createElement('div');
                productCard.classList.add('product-card');
                productCard.innerHTML = `
                    <img src="${imagePath}" style="width:300px; height:300px; background-size: cover;" alt="${product.productName}">
                    <h4 class="product">${product.productName}</h4>
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <span>(${product.rating})</span>
                    </div>
                    <p class="old-price">
                        Rs. ${product.price}
                    </p>
                    <p class="price">
                        From Rs. ${product.offerOnPrice}
                    </p>
                <button data-id=${product._id} class="whatsapp-btn">Order on WhatsApp</button>

                `;

                SeasonalTheame.appendChild(productCard)
                // Select the WhatsApp button for this product
                const whatsappBtn = productCard.querySelector('.whatsapp-btn');
                whatsappBtn.addEventListener('click', async (event) => {
                    const id = event.target.dataset.id; // Product ID
                
                    try {
                        // Send the click request without token
                        const updateClick = await fetch(`/api/update/product-click/${id}`, {
                            method: "POST",
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                            },
                        });
                
                        if (!updateClick.ok) {
                            console.error("Error updating product click count");
                            return;
                        }
                
                        const clickResponse = await updateClick.json();
                        console.log("Click count updated:", clickResponse);
                
                        // Extract product details from the response
                        const product = clickResponse.product;
                        const message = `Hello, I am interested in the product: ${product.productName}.\nPrice: ₹${product.price}\nCategory: ${product.category}`;
                
                        // WhatsApp URL with product details
                        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
                
                        // Open WhatsApp chat with product details
                        window.open(whatsappUrl, "_blank");
                
                    } catch (error) {
                        console.error("Error handling click event:", error);
                    }
                });
            } else {
                console.log(`Connot Get Seasonal Theame Product`)
            };


            // Inspirationals Quotes 
            const InspirationalsQuotes = document.querySelector('#inspirationalQuotes');
            if (product.category === "Inspirational & Quotes") {
                const imagePath = `/uploads/${product.productImage}`;
                const productCard = document.createElement('div');
                productCard.classList.add('product-card');
                productCard.innerHTML = `
                        <img src="${imagePath}" style="width:300px; height:300px; background-size: cover;" alt="${product.productName}">
                        <h4 class="product">${product.productName}</h4>
                        <div class="rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <span>(${product.rating})</span>
                        </div>
                        <p class="old-price">
                            Rs. ${product.price}
                        </p>
                        <p class="price">
                            From Rs. ${product.offerOnPrice}
                        </p>
                <button data-id=${product._id} class="whatsapp-btn">Order on WhatsApp</button>
    
                    `;

                InspirationalsQuotes.appendChild(productCard)

                // Select the WhatsApp button for this product
                const whatsappBtn = productCard.querySelector('.whatsapp-btn');
                whatsappBtn.addEventListener('click', async (event) => {
                    const id = event.target.dataset.id; // Product ID
                
                    try {
                        // Send the click request without token
                        const updateClick = await fetch(`/api/update/product-click/${id}`, {
                            method: "POST",
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                            },
                        });
                
                        if (!updateClick.ok) {
                            console.error("Error updating product click count");
                            return;
                        }
                
                        const clickResponse = await updateClick.json();
                        console.log("Click count updated:", clickResponse);
                
                        // Extract product details from the response
                        const product = clickResponse.product;
                        const message = `Hello, I am interested in the product: ${product.productName}.\nPrice: ₹${product.price}\nCategory: ${product.category}`;
                
                        // WhatsApp URL with product details
                        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
                
                        // Open WhatsApp chat with product details
                        window.open(whatsappUrl, "_blank");
                
                    } catch (error) {
                        console.error("Error handling click event:", error);
                    }
                });
            }

            // Outdoor commercial 
            const outdoorCommercial = document.querySelector('#outdoorAndCommercial');
            if (product.category === "Outdoor & Commercial") {
                const imagePath = `/uploads/${product.productImage}`;
                const productCard = document.createElement('div');
                productCard.classList.add('product-card');
                productCard.innerHTML = `
                        <img src="${imagePath}" style="width:300px; height:300px; background-size: cover;" alt="${product.productName}">
                        <h4 class="product">${product.productName}</h4>
                        <div class="rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <span>(${product.rating})</span>
                        </div>
                        <p class="old-price">
                            Rs. ${product.price}
                        </p>
                        <p class="price">
                            From Rs. ${product.offerOnPrice}
                        </p>
                <button data-id=${product._id} class="whatsapp-btn">Order on WhatsApp</button>
    
                    `;

                outdoorCommercial.appendChild(productCard)

                // Select the WhatsApp button for this product
                const whatsappBtn = productCard.querySelector('.whatsapp-btn');
                whatsappBtn.addEventListener('click', async (event) => {
                    const id = event.target.dataset.id; // Product ID
                
                    try {
                        // Send the click request without token
                        const updateClick = await fetch(`/api/update/product-click/${id}`, {
                            method: "POST",
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                            },
                        });
                
                        if (!updateClick.ok) {
                            console.error("Error updating product click count");
                            return;
                        }
                
                        const clickResponse = await updateClick.json();
                        console.log("Click count updated:", clickResponse);
                
                        // Extract product details from the response
                        const product = clickResponse.product;
                        const message = `Hello, I am interested in the product: ${product.productName}.\nPrice: ₹${product.price}\nCategory: ${product.category}`;
                
                        // WhatsApp URL with product details
                        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
                
                        // Open WhatsApp chat with product details
                        window.open(whatsappUrl, "_blank");
                
                    } catch (error) {
                        console.error("Error handling click event:", error);
                    }
                });
            }
            // Artist Abstract 
            const artistsAbstract = document.querySelector('#artistAndAbstract');
            if (product.category === "Artistic & Abstract") {
                const imagePath = `/uploads/${product.productImage}`;
                const productCard = document.createElement('div');
                productCard.classList.add('product-card');
                productCard.innerHTML = `
               <img src="${imagePath}" style="width:300px; height:300px; background-size: cover;" alt="${product.productName}">
                <h4 class="product">${product.productName}</h4>
               <div class="rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                 <span>(${product.rating})</span>
                </div>
               <p class="old-price">
                  Rs. ${product.price}
                 </p>
               <p class="price">
                  From Rs. ${product.offerOnPrice}
              </p>
                <button data-id=${product._id} class="whatsapp-btn">Order on WhatsApp</button>
              `;

                artistsAbstract.appendChild(productCard);

                // Select the WhatsApp button for this product
                const whatsappBtn = productCard.querySelector('.whatsapp-btn');
                whatsappBtn.addEventListener('click', async (event) => {
                    const id = event.target.dataset.id; // Product ID
                
                    try {
                        // Send the click request without token
                        const updateClick = await fetch(`/api/update/product-click/${id}`, {
                            method: "POST",
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                            },
                        });
                
                        if (!updateClick.ok) {
                            console.error("Error updating product click count");
                            return;
                        }
                
                        const clickResponse = await updateClick.json();
                        console.log("Click count updated:", clickResponse);
                
                        // Extract product details from the response
                        const product = clickResponse.product;
                        const message = `Hello, I am interested in the product: ${product.productName}.\nPrice: ₹${product.price}\nCategory: ${product.category}`;
                
                        // WhatsApp URL with product details
                        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
                
                        // Open WhatsApp chat with product details
                        window.open(whatsappUrl, "_blank");
                
                    } catch (error) {
                        console.error("Error handling click event:", error);
                    }
                });
            }


            //Religious & Cultural 
            const ReligiousCultural = document.querySelector('#ReligiousCultural');
            if (product.category === "Religious & Cultural") {
                const imagePath = `/uploads/${product.productImage}`;
                const productCard = document.createElement('div');
                productCard.classList.add('product-card');
                productCard.innerHTML = `
                        <img src="${imagePath}" style="width:300px; height:300px; background-size: cover;" alt="${product.productName}">
                        <h4 class="product">${product.productName}</h4>
                        <div class="rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <span>(${product.rating})</span>
                        </div>
                        <p class="old-price">
                            Rs. ${product.price}
                        </p>
                        <p class="price">
                            From Rs. ${product.offerOnPrice}
                        </p>
                <button data-id=${product._id} class="whatsapp-btn">Order on WhatsApp</button>
    
                    `;

                ReligiousCultural.appendChild(productCard)
                // Select the WhatsApp button for this product
                const whatsappBtn = productCard.querySelector('.whatsapp-btn');
                whatsappBtn.addEventListener('click', async (event) => {
                    const id = event.target.dataset.id; // Product ID
                
                    try {
                        // Send the click request without token
                        const updateClick = await fetch(`/api/update/product-click/${id}`, {
                            method: "POST",
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                            },
                        });
                
                        if (!updateClick.ok) {
                            console.error("Error updating product click count");
                            return;
                        }
                
                        const clickResponse = await updateClick.json();
                        console.log("Click count updated:", clickResponse);
                
                        // Extract product details from the response
                        const product = clickResponse.product;
                        const message = `Hello, I am interested in the product: ${product.productName}.\nPrice: ₹${product.price}\nCategory: ${product.category}`;
                
                        // WhatsApp URL with product details
                        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
                
                        // Open WhatsApp chat with product details
                        window.open(whatsappUrl, "_blank");
                
                    } catch (error) {
                        console.error("Error handling click event:", error);
                    }
                });
            };
        });



        document.querySelector('#searchBtnn').addEventListener('click', () => {
            const searchInput = document.querySelector('#search').value.toLowerCase().trim();

            if (!searchInput) {
                console.log("Please enter a product name to search.");
                return;
            }

            // Select all product elements
            const productElements = document.querySelectorAll('.product');

            let found = false;

            productElements.forEach((productElement) => {
                const productName = productElement.textContent.toLowerCase();

                // Check if product name includes the search term
                if (productName.includes(searchInput)) {
                    found = true;

                    // Scroll to the matched product
                    productElement.scrollIntoView({ behavior: "smooth", block: "center" });

                    // Highlight the matched product
                    productElement.classList.add("highlight");
                    setTimeout(() => productElement.classList.remove("highlight"), 3000);
                }
            });

            if (!found) {
                console.log("No products matched your search.");
                return;
            }
        });

    } catch (error) {
        console.log("Error fetching products:", error);
    };

});
