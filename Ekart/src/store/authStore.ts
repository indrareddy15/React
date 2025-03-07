import { create } from 'zustand';
import api from '../services/api';

interface AuthState {
  token: string | null;
  user: any | null;
  isLoading: boolean;
  error: string | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: localStorage.getItem('token'),
  user: null,
  isLoading: false,
  error: null,
  login: async (username: string, password: string) => {
    set({ isLoading: true, error: null });
    try {
      const response = await api.post('/auth/login', { username, password });
      const { token } = response.data;
      localStorage.setItem('token', token);
      set({ token, isLoading: false });
    } catch (error) {
      set({ error: 'Login failed', isLoading: false });
    }
  },
  logout: () => {
    localStorage.removeItem('token');
    set({ token: null, user: null });
  },
}));