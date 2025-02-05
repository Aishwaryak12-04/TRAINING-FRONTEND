import React from "react";
import { useLocation } from "react-router-dom";

function Checkout() {
  const location = useLocation();
  const product = location.state?.product;

  if (!product) {
    return <p className="p-5 text-red-500">No product selected for checkout.</p>;
  }

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold">Checkout Page</h2>
      <div className="border p-4 mt-4">
        <img
          src={product.image}
          alt={product.title}
          className="w-32 h-32 object-contain"  
          style={{ maxWidth: "100px", height: "100px" }}
        />
        <h3 className="font-semibold mt-2">{product.title}</h3>
        <p className="text-gray-700">Price: ${product.price}</p>
        <button
          className="mt-2 bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => alert("Payment process started!")}
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}

export default Checkout;
