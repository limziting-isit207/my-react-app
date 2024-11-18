// Donate.js
import React, { useState } from 'react';
import './Donate.css';

const Donate = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        amount: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you, ${formData.name}, for donating $${formData.amount}!`);
        setFormData({ name: '', email: '', amount: '' }); // Reset the form
    };

    return (
        <div className="donate-container">
            <h2>How to Donate?</h2>
            <p>Fill out the donation form and scan the QR code to donate directly.</p>
            <p>Thank you for trusting us, any donations is a good donation.</p>

            <div className="donation-purpose">
                <p>Your donations help us:</p>
                <ul>
                    <li>Provide grooming and medical care for pets in need.</li>
                    <li>Purchase nutritious food and supplies for our animals.</li>
                    <li>Build and maintain safe, comfortable shelters for rescued pets.</li>
                </ul>
            </div>
            
            <div className="qr-code"></div> {/* QR Code placeholder */}
            
            <form className="donation-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="amount">Amount Donated ($):</label>
                    <input
                        type="number"
                        id="amount"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                        placeholder="Enter donation amount"
                        required
                        min="1"
                    />
                </div>
                <button type="submit" className="donate-button">
                    Donate Now
                </button>
            </form>
        </div>
    );
};

export default Donate;
