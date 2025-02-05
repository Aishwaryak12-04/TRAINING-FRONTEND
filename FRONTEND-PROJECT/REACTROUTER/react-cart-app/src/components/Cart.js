import React from "react";

function Cart({ cart }) {
  return (
    <div className="p-5">
      <h2 className="text-xl font-bold">Cart Page</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ul className="mt-2">
          {cart.map((item, index) => (
            <li key={index} className="p-4 border-b flex items-center gap-4">
              
              {}
              <div className="w-24 h-24 flex items-center justify-center border">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded"
                  style={{ maxWidth: "100px", height: "100px" }}
                />
              </div>

              {}
              <div>
                <h3 className="text-sm font-semibold">{item.title}</h3>
                <p className="text-xs">Price: ${item.price}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
