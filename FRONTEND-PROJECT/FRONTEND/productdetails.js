const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

if (productId) {
    fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(response => response.json())
        .then(product => {
            document.getElementById("product-info").innerHTML = `
                <h1>${product.title}</h1>
                <img src="${product.image}" width="200">
                <p>${product.description}</p>
                <h2>$${product.price}</h2>
            `;
        });
}
