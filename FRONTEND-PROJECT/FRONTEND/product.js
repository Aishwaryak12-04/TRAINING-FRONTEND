fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {
        const productContainer = document.getElementById("product-container");
        products.forEach(product => {
            const productCard = document.createElement("div");
            productCard.classList.add("product-card");
            productCard.innerHTML = `
                <img src="${product.image}" class="product-img">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-price">$${product.price}</p>
                <a href="productdetails.html?id=${product.id}" class="view-btn">View Details</a>
            `;
            productContainer.appendChild(productCard);
        });
    });
