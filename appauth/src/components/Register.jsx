import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../auth';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [reenterPassword, setReenterPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const validateUsername = (username) => {
        return username.length >= 3;
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const validatePassword = (password) => {
        return password.length >= 6;
    };

    const validateReenterPassword = (password, reenterPassword) => {
        return password === reenterPassword;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (!validateUsername(username)) {
            setError('Username must be at least 3 characters long');
            return;
        }

        if (!validateEmail(email)) {
            setError('Invalid email format');
            return;
        }

        if (!validatePassword(password)) {
            setError('Password must be at least 6 characters long');
            return;
        }

        if (!validateReenterPassword(password, reenterPassword)) {
            setError('Passwords do not match');
            return;
        }

        try {
            await registerUser(username, email, password);
            setSuccess('Registration successful!');
            setUsername('');
            setEmail('');
            setPassword('');
            setReenterPassword('');
            navigate('/login');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <h2>Register</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Re-enter Password"
                    value={reenterPassword}
                    onChange={(e) => setReenterPassword(e.target.value)}
                    required
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;