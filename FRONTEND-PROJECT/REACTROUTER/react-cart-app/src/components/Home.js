import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home({ cart, setCart }) {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.title} added to cart!`);
  };

  const buyNow = (product) => {
    navigate("/checkout", { state: { product } });
  };

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold">Home Page</h2>

      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div className="grid grid-cols-2 gap-4 mt-4">
          {products.map((product) => (
            <div key={product.id} className="p-2 border rounded shadow">
              <div className="flex justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-32 h-32 object-cover mx-auto rounded"
                  style={{ maxWidth: "100px", height: "100px" }}
                />
              </div>
              <h3 className="mt-2 text-sm font-semibold">{product.title}</h3>
              <p className="text-xs">Price: ${product.price}</p>

              <button
                className={`mt-2 p-1 text-xs rounded ${
                  cart.some((item) => item.id === product.id)
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-500 text-white"
                }`}
                onClick={() => addToCart(product)}
                disabled={cart.some((item) => item.id === product.id)}
              >
                {cart.some((item) => item.id === product.id) ? "Added" : "Add to Cart"}
              </button>

              <button
                className="mt-2 p-1 text-xs bg-green-500 text-white rounded ml-2"
                onClick={() => buyNow(product)}
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      )}

      <h3 className="mt-6 text-lg font-bold">Cart Items:</h3>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ul className="mt-2">
          {cart.map((item, index) => (
            <li key={index} className="p-2 border-b">{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Home;
