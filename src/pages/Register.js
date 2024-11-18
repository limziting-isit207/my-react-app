import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState ("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Signed up: ', {username, email, password});
        navigate('/login');
    };

    return (
        <div className="register">
            <h1>register now to be part of our family</h1>
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label>Username: </label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>

                <div class="form-group">
                    <label>Email: </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="test@mail.com" required />
                </div>

                <div class="form-group">
                    <label>Password: </label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password123" required />
                </div>

                <div class="form-group">
                    <button type="submit" className="submitButton">Register</button>
                </div>
            </form>
        </div>
    );
};

export default Register;