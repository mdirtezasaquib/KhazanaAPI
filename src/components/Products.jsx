import { useContext } from "react";
import { ProductContext } from "../contextApi/ProductContext";

const Products = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-teal-700">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition-all"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-48 object-cover rounded-md mb-3"
            />
            <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>
            <p className="text-gray-600 text-sm mt-1">{product.description.slice(0, 60)}...</p>
            <p className="mt-2 text-teal-600 font-bold">₹ {product.price}</p>
            <p className="text-sm text-yellow-500">⭐ {product.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
