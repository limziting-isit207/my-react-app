import React, { useState } from 'react';
import './SuccessStories.css';

const successStories = [
    {
        id: 1,
        adopterName: "Elle",
        petName: "maomao",
        story: "maomao found a loving home with Elle and her family. Maomao now enjoys daily walks, lots of cuddles, and is part of a warm family who adores her.",
        image: "/images/maomao.jpeg"
    },
    {
        id: 2,
        adopterName: "John & Daisy",
        petName: "Biscuit",
        story: "John found his best friend in Biscuit. They go on adventures together, and Biscuit has brought so much joy into John's life.",
        image: "/images/Biscuit.jpeg",
    },
    {
        id: 3,
        adopterName: "KiKi",
        petName: "JiJi",
        story: "JiJi was adopted by KiKi and her family. Now, she's the star of the household, loved and spoiled by everyone.",
        image: "/images/JiJi.jpeg",
    },
    {
        id: 4,
        adopterName: "Ben",
        petName: "Bagel",
        story: "Bagel has found his forever home with Ben. Bagel loves going on coffee runs with Ben and stealing Ben's bagel breakfast.",
        image: "/images/Bagel.jpeg",
    }
];

const SuccessStories = () => {
    const [formData, setFormData] = useState({
        adopterName: '',
        petName: '',
        story: '',
        image: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real application, this is where you would submit the data to a backend or store it
        console.log("New story submitted:", formData);
        setFormData({
            adopterName: '',
            petName: '',
            story: '',
            image: null
        });
        alert("Your story has been submitted!");
    };

    return (
        <section className="success-stories" id="successStories">
            <h2>Success Stories</h2>
            <p>Heartwarming stories of our paw friends who found their forever homes.</p>
            <div className="stories-grid">
                {successStories.map((story) => (
                    <div key={story.id} className="story-card">
                        <img
                            src={story.image}
                            alt={`${story.petName} with ${story.adopterName}`}
                            style={{ width: '100%', height: '350px', objectFit: 'cover' }}
                        />
                        <h3>{story.petName} & {story.adopterName}</h3>
                        <p>{story.story}</p>
                    </div>
                ))}
            </div>
            <div className="share-story">
                <h3>Want to share your adoption story?</h3>
                <p>We’d love to hear about your journey! Please share your success story with us below:</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <label>Your Name:</label>
                        <input
                            type="text"
                            name="adopterName"
                            value={formData.adopterName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-row">
                        <label>Pet's Name:</label>
                        <input
                            type="text"
                            name="petName"
                            value={formData.petName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-row">
                        <label>Story:</label>
                        <textarea
                            name="story"
                            value={formData.story}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-row">
                        <label>Upload Image:</label>
                        <input
                            type="file"
                            name="image"
                            accept="image/*"
                            onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
                        />
                    </div>
                    <button type="submit" className="storyButton">Share My Story</button>
                </form>
            </div>
        </section>
    );
};

export default SuccessStories;