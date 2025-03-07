import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProductStore } from '../store/productStore';
import { useCartStore } from '../store/cartStore';
import { ShoppingCart, Star } from 'lucide-react';
import toast from 'react-hot-toast';
import { Product } from '../types';

const ProductDetail = () => {
  const { id } = useParams();
  const { getProduct } = useProductStore();
  const { addToCart } = useCartStore();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      if (id) {
        const data = await getProduct(parseInt(id));
        setProduct(data);
        setIsLoading(false);
      }
    };
    fetchProduct();
  }, [id, getProduct]);

  const handleAddToCart = async () => {
    if (product) {
      try {
        await addToCart(product.id, quantity);
        toast.success('Added to cart!');
      } catch (error) {
        toast.error('Failed to add to cart');
      }
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-color"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center text-error-color">
        <p>Product not found</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="max-w-full h-auto max-h-[400px] object-contain"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <div className="flex items-center mb-4">
              <div className="flex items-center text-yellow-400">
                {Array.from({ length: Math.round(product.rating.rate) }).map((_, i) => (
                  <Star key={i} fill="currentColor" size={20} />
                ))}
              </div>
              <span className="ml-2 text-gray-600">
                ({product.rating.count} reviews)
              </span>
            </div>
            <p className="text-2xl font-bold text-primary-color mb-4">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <div className="flex items-center gap-4">
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="form__input w-20"
              />
              <button
                onClick={handleAddToCart}
                className="button button--primary flex items-center gap-2"
              >
                <ShoppingCart size={20} />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;