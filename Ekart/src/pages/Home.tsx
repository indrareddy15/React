import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
      <h1 className="text-4xl font-bold mb-4">Welcome to FakeStore</h1>
      <p className="text-xl text-gray-600 mb-8">Your one-stop shop for all things fake!</p>
      
      <Link
        to="/products"
        className="flex items-center space-x-2 bg-primary-color text-white px-6 py-3 rounded-lg hover:bg-secondary-color transition-colors"
      >
        <ShoppingBag className="w-6 h-6" />
        <span>Start Shopping</span>
      </Link>
    </div>
  );
};

export default Home;