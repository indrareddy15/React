import React, { useEffect, useState } from 'react';
import { useCartStore } from '../store/cartStore';
import { useProductStore } from '../store/productStore';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { Product } from '../types';
import toast from 'react-hot-toast';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, fetchCart } = useCartStore();
  const { getProduct } = useProductStore();
  const [products, setProducts] = useState<(Product & { quantity: number })[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadCartItems = async () => {
      await fetchCart();
      const productDetails = await Promise.all(
        items.map(async (item) => {
          const product = await getProduct(item.productId);
          return product ? { ...product, quantity: item.quantity } : null;
        })
      );
      setProducts(productDetails.filter((p): p is Product & { quantity: number } => p !== null));
      setIsLoading(false);
    };
    loadCartItems();
  }, [items.length, fetchCart, getProduct]);

  const handleUpdateQuantity = async (productId: number, newQuantity: number) => {
    try {
      await updateQuantity(productId, newQuantity);
      toast.success('Cart updated');
    } catch (error) {
      toast.error('Failed to update cart');
    }
  };

  const handleRemoveItem = async (productId: number) => {
    try {
      await removeFromCart(productId);
      toast.success('Item removed from cart');
    } catch (error) {
      toast.error('Failed to remove item');
    }
  };

  const total = products.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-color"></div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-8">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <p className="text-gray-600">Start shopping to add items to your cart!</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      <div className="space-y-4">
        {products.map((item) => (
          <div key={item.id} className="cart__item">
            <img src={item.image} alt={item.title} className="cart__image" />
            <div className="cart__details">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-primary-color font-bold">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
            <div className="cart__actions">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <Minus size={18} />
                </button>
                <span className="w-8 text-center">{item.quantity}</span>
                <button
                  onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <Plus size={18} />
                </button>
              </div>
              <button
                onClick={() => handleRemoveItem(item.id)}
                className="text-error-color hover:opacity-80"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-6 border-t">
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold">Total:</span>
          <span className="text-2xl font-bold text-primary-color">
            ${total.toFixed(2)}
          </span>
        </div>
        <button className="w-full button button--primary mt-4">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;