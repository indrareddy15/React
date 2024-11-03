import React, { useState } from 'react';
import { loginUser } from '../auth';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const validateUsername = (username) => {
        return username.length >= 3;
    };



    const validatePassword = (password) => {
        return password.length >= 6;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!validateUsername(username)) {
            setError('Username must be at least 3 characters long');
            return;
        }



        if (!validatePassword(password)) {
            setError('Password must be at least 6 characters long');
            return;
        }

        try {
            await loginUser(username, password);
            alert('Login successful!');
            setUsername('');
            setPassword('');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;