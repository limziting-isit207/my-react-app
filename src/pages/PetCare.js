import React from 'react';
import YouTube from 'react-youtube';
import './PetCare.css';

const PetCare = () => {
    const videoOptions = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 0,
        },
    };

    return (
        <section className="pet-care">
            <h2>Pet Care Tips</h2>
            <p>New to pet care? Watch this video to learn the basics and ensure your furry friend stays happy and healthy.</p>
            <YouTube videoId="qc4_pAbBafM" opts={videoOptions} />
        </section>
    );
};

export default PetCare;
