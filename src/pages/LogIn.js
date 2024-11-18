import React, {useState} from 'react';
import './LogIn.css';

const LogIn = ({ onLogin }) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === 'test@mail.com' && password === 'password123') {
            alert('Login successful');
            onLogin(username);
        } else {
            alert('invalid credentials');
        }
    };

    return (
        <div className="logIn">
            <h1>log in</h1>
            <form onSubmit={handleSubmit}>
                <div class="loginform-group">
                    <label>Username: </label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>

                <div class="loginform-group">
                    <label>Email: </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="test@mail.com" required />
                </div>

                <div class="loginform-group">
                    <label>Password: </label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password123" required />
                </div>

                <div class="loginform-group">
                    <button type="submit" className="submitButton">Log in</button>
                </div>
            </form>
        </div>
    );
};

export default LogIn;