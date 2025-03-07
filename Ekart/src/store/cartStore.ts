import { create } from 'zustand';
import api from '../services/api';
import { Cart, CartItem } from '../types';

interface CartState {
  items: CartItem[];
  isLoading: boolean;
  error: string | null;
  addToCart: (productId: number, quantity: number) => Promise<void>;
  removeFromCart: (productId: number) => Promise<void>;
  updateQuantity: (productId: number, quantity: number) => Promise<void>;
  fetchCart: () => Promise<void>;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  isLoading: false,
  error: null,
  addToCart: async (productId: number, quantity: number) => {
    set({ isLoading: true });
    try {
      await api.post('/carts', {
        userId: 1, // In a real app, this would be the actual user ID
        products: [...get().items, { productId, quantity }],
      });
      set((state) => ({
        items: [...state.items, { productId, quantity }],
        isLoading: false,
      }));
    } catch (error) {
      set({ error: 'Failed to add item to cart', isLoading: false });
    }
  },
  removeFromCart: async (productId: number) => {
    set({ isLoading: true });
    try {
      set((state) => ({
        items: state.items.filter((item) => item.productId !== productId),
        isLoading: false,
      }));
    } catch (error) {
      set({ error: 'Failed to remove item from cart', isLoading: false });
    }
  },
  updateQuantity: async (productId: number, quantity: number) => {
    set({ isLoading: true });
    try {
      set((state) => ({
        items: state.items.map((item) =>
          item.productId === productId ? { ...item, quantity } : item
        ),
        isLoading: false,
      }));
    } catch (error) {
      set({ error: 'Failed to update quantity', isLoading: false });
    }
  },
  fetchCart: async () => {
    set({ isLoading: true });
    try {
      const response = await api.get('/carts/1'); // In a real app, this would be the actual cart ID
      set({ items: response.data.products, isLoading: false });
    } catch (error) {
      set({ error: 'Failed to fetch cart', isLoading: false });
    }
  },
}));