import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import toast from 'react-hot-toast';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    firstname: '',
    lastname: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await api.post('/users', {
        email: formData.email,
        username: formData.username,
        password: formData.password,
        name: {
          firstname: formData.firstname,
          lastname: formData.lastname,
        },
      });
      toast.success('Registration successful! Please login.');
      navigate('/login');
    } catch (error) {
      toast.error('Registration failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="form">
      <h1 className="text-2xl font-bold mb-6">Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="form__group">
          <label htmlFor="email" className="form__label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form__input"
            required
          />
        </div>
        <div className="form__group">
          <label htmlFor="username" className="form__label">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="form__input"
            required
          />
        </div>
        <div className="form__group">
          <label htmlFor="password" className="form__label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="form__input"
            required
          />
        </div>
        <div className="form__group">
          <label htmlFor="firstname" className="form__label">
            First Name
          </label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            className="form__input"
            required
          />
        </div>
        <div className="form__group">
          <label htmlFor="lastname" className="form__label">
            Last Name
          </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            className="form__input"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full button button--primary"
          disabled={isLoading}
        >
          {isLoading ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default Register;