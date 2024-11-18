import React, { useEffect, useState } from 'react';
import './Dogs.css';

const dogInfo = [
    { id: 1, name: "Birkin", dob: "2019-01-01", age: "5 years", hobby: "Likes admiring herself through the mirror ", personality: "Pretty, friendly and sweet", mbti: "ENTF" },
    { id: 2, name: "Smol Dog", dob: "2024-03-21", age: "1 year", hobby: "Likes playing tug-of-war", personality: "Talkative, fierce and sweet", mbti: "ENTF" },
    { id: 3, name: "HotDog", dob: "2022-08-29", age: "2 years", hobby: "Likes chasing", personality: "Energetic, friendly and excited", mbti: "ENTF" },
    { id: 4, name: "Pepperoni", dob: "2020-10-11", age: "4 years", hobby: "Enjoys sun tanning", personality: "Calm, friendly and sweet", mbti: "ENTF" },
    { id: 5, name: "Peanut", dob: "2023-12-21", age: "1 year", hobby: "Loves eating peanut butter", personality: "Cool, lovely and sweet", mbti: "ENTF" },
    { id: 6, name: "Bakedbean", dob: "2017-06-08", age: "7 years", hobby: "Loves chasing bubbles", personality: "Happy, curious and lovely", mbti: "ENTF" },
    { id: 7, name: "Tomato", dob: "2016-08-29", age: "8 years", hobby: "Likes to rest on couch", personality: "Slow, sweet and lovely", mbti: "ENTF" },
    { id: 8, name: "Potato", dob: "2022-11-18", age: "2 years", hobby: "Enjoys muddy puddles in the rain", personality: "Curious, excited and energetic", mbti: "ENTF" },
    { id: 9, name: "Pickles", dob: "2020-10-19", age: "4 years", hobby: "Loves picking flowers when going on a walk", personality: "Lovely, sweet and shy", mbti: "ENTF" },
    { id: 10, name: "Toffee", dob: "2021-07-16", age: "3 years", hobby: "Loves the beach", personality: "Shy, curious and strong", mbti: "ENTF" },
];

const Dogs = () => {
    const [dogImages, setDogImages] = useState([]);

    useEffect(() => {
        // Fetch multiple dog images from the API once
        const fetchDogImages = async () => {
            try {
                const response = await fetch(
                    'https://dog.ceo/api/breeds/image/random/10'
                );
                const data = await response.json();
                setDogImages(data.message); // Store fetched images
            } catch (error) {
                console.error("Error fetching dog images:", error);
            }
        };

        fetchDogImages();
    }, []);

    return (
        <div className="dogs-page">
            <h1>Lovely Dogs for Adoption</h1>
            <div className="dog-list">
                {dogInfo.map((dog, index) => (
                    <div key={dog.id} className="dog-card">
                        {dogImages[index] && (
                            <img className="dog-image" src={dogImages[index]} alt={dog.name} />
                        )}
                        <div className="dog-info">
                            <h2>{dog.name}</h2>
                            <p><strong>DOB:</strong> {dog.dob}</p>
                            <p><strong>Age:</strong> {dog.age}</p>
                            <p><strong>Hobby: </strong> {dog.hobby}</p>
                            <p><strong>Personality: </strong> {dog.personality}</p>
                            <p><strong>MBTI: </strong> {dog.mbti}</p>
                        </div>
                        <br/><br/><br/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dogs;
