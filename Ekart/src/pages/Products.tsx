import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/productStore";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "../store/cartStore";
import toast from "react-hot-toast";

const Products = () => {
  const { products, fetchProducts, isLoading, error } = useProductStore();
  const { addToCart } = useCartStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleAddToCart = async (productId: number) => {
    try {
      await addToCart(productId, 1);
      toast.success("Added to cart!");
    } catch (error) {
      toast.error("Failed to add to cart");
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-color"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-error-color">
        <p>Error loading products. Please try again later.</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.title}
              className="product-card__image"
            />
            <h2 className="product-card__title">{product.title}</h2>
            <p className="product-card__price">${product.price.toFixed(2)}</p>
            <div className="flex justify-between items-center mt-4">
              <Link
                to={`/products/${product.id}`}
                className="text-primary-color hover:underline"
              >
                View Details
              </Link>
              <button
                onClick={() => handleAddToCart(product.id)}
                className="button button--primary flex items-center gap-2"
              >
                <ShoppingCart size={18} />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
