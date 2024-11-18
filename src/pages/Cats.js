import React, { useEffect, useState } from 'react';
import './Cats.css';

const catInfo = [
    { id: 1, name: "Smol cat", dob: "2020-06-15", age: "4 years", hobby: "Likes talking, alot", personality: "Talkative, friendly and sweet", mbti: "ENTF" },
    { id: 2, name: "Cheese", dob: "2019-11-20", age: "5 years", hobby: "Loves hiding under the couch", personality: "Playful, bubbly and excited", mbti: "ISTJ"},
    { id: 3, name: "Tapoki", dob: "2021-02-10", age: "3 years", hobby: "Likes going outside to hunt", personality: "Curious, mysterious and cool", mbti: "ENTP" },
    { id: 4, name: "Honey", dob: "2019-07-25", age: "5 years", hobby: "Must cuddle with his toy", personality: "Sweet, reserve and playful", mbti: "ISTF" },
    { id: 5, name: "Salt", dob: "2024-01-20", age: "1 years", hobby: "Likes to steal your food, especially roasted chicken", personality: "Shy, smart and relaxed", mbti: "ESTF"},
    { id: 6, name: "Pepper", dob: "2022-11-15", age: "2 years", hobby: "Really good at jumping!", personality: "Excited, joyful and curious", mbti: "ESTJ"},
    { id: 7, name: "Mochi Mochi", dob: "2011-11-21", age: "13 years", hobby: "Loves playing with tap water", personality: "Curious, anxious and nervous", mbti: "INFP"},
    { id: 8, name: "Moo Moo", dob: "2017-09-25", age: "7 years", hobby: "Knows how to moo for real", personality: "Awkard, shy and curious", mbti: "ENFP"},
    { id: 9, name: "One-Aye Captain", dob: "2023-12-31", age: "2 years", hobby: "Behaves like shes the captain of the sea", personality: "Happy, confident and indepent", mbti: "ENTP" },
    { id: 10, name: "Chonky", dob: "2024-02-15", age: "1 years", hobby: "Eats anything and eveything", personality: "Friendly, outgoing and affectionate", mbti: "ESTP" },
];

const Cats = () => {
    const [catImages, setCatImages] = useState([]);

    useEffect(() => {
        const fetchCatImages = async () => {
            try {
                const response = await fetch(
                    'https://api.thecatapi.com/v1/images/search?limit=3&order=DESC'
                );
                const data = await response.json();
                setCatImages(data); // store fetched images
            } catch (error) {
                console.error("Error fetching cat images:", error);
            }
        };

        fetchCatImages();
    }, []);

    return (
        <div className="cats-page">
            <h1>Lovely Cats for Adoption</h1>
            <div className="cat-list">
                {catInfo.map((cat, index) => (
                    <div key={cat.id} className="cat-card">
                        {catImages[index] && (
                            <img
                                className="cat-image"
                                src={catImages[index].url}
                                alt={cat.name}
                            />
                        )}
                        <div className="cat-info">
                            <h2>{cat.name}</h2>
                            <p><strong>DOB:</strong> {cat.dob}</p>
                            <p><strong>Age:</strong> {cat.age}</p>
                            <p><strong>Hobby: </strong> {cat.hobby}</p>
                            <p><strong>Personality: </strong> {cat.personality}</p>
                            <p><strong>MBTI: </strong> {cat.mbti}</p>
                            <br/> <br/> <br/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cats;
