import React, { useState } from 'react';
import './AboutUs.css'; // Optional: for adding external CSS styling

const AboutUs = () => {
    const [activeQuestion, setActiveQuestion] = useState(null);

    const toggleAnswer = (index) => {
        setActiveQuestion(activeQuestion === index ? null : index);
    };

    const faqData = [
        { 
            question: "How can I adopt a pet?", 
            answer: "Visit our adoption page to view available pets and complete an adoption application."
        },
        { 
            question: "What types of pets do you have?", 
            answer: "We have dogs and cats."
        },
        { 
            question: "Can I release pets that are not cats and dogs?", 
            answer: "Yes, we welcome all kinds of animals."
        },
        { 
            question: "Are there any adoption fees?", 
            answer: "Yes, the adoption fees vary depending on the type of pet and cover vaccinations, microchipping, and spaying/neutering."
        },
        { 
            question: "Can I return a pet if it doesn't work out?", 
            answer: "Yes, we have a policy in place to ensure pets are returned to us rather than abandoned or rehomed without our knowledge."
        },
        { 
            question: "Do you offer post-adoption support?", 
            answer: "Absolutely! We provide guidance on training, healthcare, and adjusting to a new home."
        },
    ];

    return (
        <div className="about-us-container">
            {/* Mission Section */}
            <section className="mission-section">
                <h1>Our Mission</h1>
                <p>Our mission is to give every pet a loving home, ensuring that no pet is left without care or a family.</p>
            </section>

            {/* Values Section */}
            <section className="values-section">
                <h1>Our Values</h1>
                <ul>
                    <li>Compassion for animals</li>
                    <li>Commitment to community</li>
                    <li>Integrity and transparency</li>
                    <li>Collaboration for greater impact</li>
                </ul>
            </section>

            {/* Impact Section */}
            <section className="impact-section">
                <h1>Our Impact</h1>
                <p>Since our founding, we have successfully matched over 1,000 pets with their forever families, and we're just getting started!</p>
            </section>

            {/* Team Section */}
            <section className="team-section">
                <h1>Meet Our Team</h1>
                <div className="team-introduction">
                    <div className="team-member">
                        <img src="/images/member1.jpeg" alt="Team Member 1" />
                        <h3>Sandy Liang</h3>
                        <p>Founder & CEO</p>
                        <p>Email: sandyliang@mail.com</p>
                    </div>
                    <div className="team-member">
                        <img src="/images/member2.jpeg" alt="Team Member 2" />
                        <h3>John Smith</h3>
                        <p>Co-Founder</p>
                        <p>Email: johnsmith@mail.com</p>
                    </div>
                    <div className="team-member">
                        <img src="/images/member3.jpeg" alt="Team Member 3" />
                        <h3>Alex Anderson</h3>
                        <p>Head of Outreach</p>
                        <p>Email: alexanderson@mail.com</p>
                    </div>
                    <div className="team-member">
                        <img src="/images/member4.jpeg" alt="Team Member 4" />
                        <h3>Betty Alexandra</h3>
                        <p>Head of Resource</p>
                        <p>Email: bettyalexandra@mail.com</p>
                    </div>
                    <div className="team-member">
                        <img src="/images/member5.jpeg" alt="Team Member 5" />
                        <h3>Dr Simon</h3>
                        <p>Veterinary Surgeon</p>
                        <p>Email: simon@mail.com</p>
                    </div>
                </div>

                <h1>Meet Our Volunters</h1>
                <div className="volunter-introduction">
                    <div className="volunter-member">
                        <img src="/images/volunter1.jpeg" alt="Volunter 1" />
                        <h3>Mindy Maxwell</h3>
                        <p>Mindy is our youngest volunter<br/> in our shelter. She comes every <br/>weekend and enjoys spending time <br/>playing and feeding with all the pets here!</p>
                    </div>
                    <div className="volunter-member">
                        <img src="/images/volunter2.jpeg" alt="Volunter 2" />
                        <h3>Benjamin Parker</h3>
                        <p>Ben is our newest member. <br/>He loves to help around to clean<br/> the rooms of the pets, giving <br/>them a fresh and warm place to sleep everyday!</p>
                    </div>
                    <div className="volunter-member">
                        <img src="/images/volunter3.jpeg" alt="Volunter 3" />
                        <h3>Lindy</h3>
                        <p>Lindy is an expert at teaching<br/> the pets some tricks! All <br/>the pets loves her! It's never a boring<br/> day with her around!</p>
                    </div>
                    <div className="volunter-member">
                        <img src="/images/volunter4.jpeg" alt="Volunter 4" />
                        <h3>Alex Parkson</h3>
                        <p>Alex loves bring the dogs out<br/> for a walk! They love going to<br/> the park and play with other animals <br/>there and making new friends.</p>
                    </div>
                    <div className="volunter-member">
                        <img src="/images/volunter5.jpeg" alt="Volunter 5" />
                        <h3>Cindy Chia</h3>
                        <p>Cindy is our pet trauma therapist.<br/> She make sures all pets are safe and happy.</p>
                    </div>
                </div>

                <div className="contact-info">
                    <h2>Contact Us</h2>
                    <p>Email: petheavensociety@mail.com</p>
                    <p>Phone: (888) 9188-1688</p>
                    <p>Visit Us at: Sunshine street 89, 987089, #01-01 to #01-06</p>
                    <p>Follow us on Social Media: 
                        <a href="https://twitter.com/petheavensociety"> Twitter</a> | 
                        <a href="https://facebook.com/petheavensociety"> Facebook</a> |
                        <a href="http://instagram.com/petheavensociety"> Instagram</a>
                    </p>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="statistics-section">
                <h2>Statistic Summary</h2>
                <p>No. of successful adoptions: 1,200</p>
                <p>Pets currently in need of homes: 250</p>
                <progress value="250" max="1000"></progress> {/* Example Progress Bar */}
            </section>

            {/* FAQ Section */}
            <section className="faq-section">
                <h3>FAQ</h3>
                <ul>
                    {faqData.map((faq, index) => (
                        <li key={index} className="faq-item">
                            <div 
                                className="faq-question" 
                                onClick={() => toggleAnswer(index)}
                                style={{ cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                            >
                                <strong>{faq.question}</strong>
                                <span>{activeQuestion === index ? "▲" : "▼"}</span>
                            </div>
                            {activeQuestion === index && (
                                <p className="faq-answer" style={{ marginTop: "8px" }}>
                                    {faq.answer}
                                </p>
                            )}
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default AboutUs;
