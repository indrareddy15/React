import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, LogOut } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import { useCartStore } from '../store/cartStore';

const Navbar = () => {
  const { token, logout } = useAuthStore();
  const { items } = useCartStore();

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-primary-color">
            FakeStore
          </Link>

          <div className="flex items-center space-x-4">
            <Link to="/products" className="hover:text-primary-color">
              Products
            </Link>
            
            <Link to="/cart" className="relative hover:text-primary-color">
              <ShoppingCart className="w-6 h-6" />
              {items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary-color text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {items.length}
                </span>
              )}
            </Link>

            {token ? (
              <button
                onClick={logout}
                className="flex items-center hover:text-primary-color"
              >
                <LogOut className="w-6 h-6" />
              </button>
            ) : (
              <Link to="/login" className="hover:text-primary-color">
                <User className="w-6 h-6" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;