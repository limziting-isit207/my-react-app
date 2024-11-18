import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import SuccessStories from './SuccessStories';
import PetCare from './PetCare';

const Home = () => {
    const navigate = useNavigate();

    const handleAdoptButton = () => {
        navigate('/adopt-pet');
    };

    const handleReleaseButton = () => {
        navigate('/release-pet');
    };

    return (
        <div className="home">
            <div class="background-image">
                <div class="welcome-container">
                    <h1>Welcome to Pet Heaven Society</h1>
                    <p>This is the place to give all pets a warm and safe home</p>
                    <div className="button-container">
                        <button onClick={handleAdoptButton} className="button1">Adopt Pet</button>
                        <button onClick={handleReleaseButton} className="button2">Release Pet</button>
                    </div>
                </div>
            </div>


            <SuccessStories />
            <PetCare />
        </div>
    );
};

export default Home;
