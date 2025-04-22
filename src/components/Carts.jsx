import { useContext } from "react";
import { CartContext } from "../contextApi/CartContext";

const Carts = () => {
  const { carts } = useContext(CartContext);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-teal-700 mb-6">Cart Summary</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {carts.map((cart) => (
          <div key={cart.id} className="bg-white rounded-xl shadow-lg p-4">
            <h2 className="text-xl font-semibold text-teal-800 mb-2">Cart ID: {cart.id}</h2>
            <p className="text-gray-700">Total Items: {cart.totalQuantity}</p>
            <p className="text-gray-700 mb-4">Total Price: ₹ {cart.total}</p>
            <div className="border-t pt-2">
              <h3 className="text-lg font-bold mb-2 text-gray-800">Products:</h3>
              {cart.products.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center gap-4 border-b py-2"
                >
                  <img
                    src={product.thumbnail || "https://via.placeholder.com/60"}
                    alt={product.title}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">{product.title}</p>
                    <p className="text-sm text-gray-600">Qty: {product.quantity} × ₹{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carts;
