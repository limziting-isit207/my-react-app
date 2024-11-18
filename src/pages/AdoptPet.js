import React, { useState } from 'react';

const AdoptPet = () => {
    const [showForm] = useState(true); 

    return (
        <div>
            {showForm && (
                <div className="form-container">
                    <h2>Pet Adoption Form</h2>
                    <form>
                        <h3>Interested Pet</h3>
                        <label>
                            Pet Name: <br />
                            <select name="petName" required>
                                <option value="SmolCat">Smol Cat</option>
                                <option value="Cheese">Cheese</option>
                                <option value="Tapoki">Tapoki</option>
                                        <option value="Honey">Honey</option>
                                        <option value="Salt">Salt</option>
                                        <option value="Pepper">Pepper</option>
                                        <option value="MochiMochi">Mochi Mochi</option>
                                        <option value="MooMoo">Moo Moo</option>
                                        <option value="One-AyeCaptain">One-Aye Captain</option>
                                        <option value="Chonky">Chonky</option>
                                        <option value="Birkin">Birkin</option>
                                        <option value="SmolDog">Smol Dog</option>
                                        <option value="HotDog">HotDog</option>
                                        <option value="Pepperoni">Pepperoni</option>
                                        <option value="Peanut">Peanut</option>
                                        <option value="Bakedbean">Bakedbean</option>
                                        <option value="Tomato">Tomato</option>
                                        <option value="Potato">Potato</option>
                                        <option value="Pickles">Pickles</option>
                                        <option value="Toffee">Toffee</option>
                            </select>
                        </label>
                        <br />

                         {/* Common fields */}
                         <h3>Personal Information</h3>
                        <label>
                            Full Name: <br />
                            <input type="text" name="fullName" required />
                        </label>

                        <label>
                            Contact Number: <br />
                            <input type="text" name="contactNo" required />
                        </label>

                        <label>
                            Address: <br />
                            <input type="text" name="address" required />
                        </label>

                        <h3>Lifestyle and Work Schedule</h3>
                        <label>
                            Work Schedule: <br />
                            <input type="text" name="workSchedule" placeholder='full-time, part-time, work-from-home' required />
                        </label>

                        <label>
                            Type of Residence: <br />
                            <select name="residenceType">
                                <option value="HDB">HDB</option>
                                <option value="apartment">Apartment</option>
                                <option value="condominium">Condominium</option>
                                <option value="others">Others</option>
                            </select>
                            <input type="text" name="otherHouses" placeholder='if others, indicate here' />
                        </label>
                        <label>
                            Number of people in your residence:
                            <input type="text" name="noOfPpl" required/>
                        </label>

                        <label>
                            Do you have other pets?:
                            <input type="text" name="otherPets" placeholder='if yes, state breed and how many' required/>
                        </label>

                        <h3>History and Background</h3>
                        <label>
                            Have you owned a pet before?  yes / no <br />
                            <input type="text" name="petExperience" required placeholder='if yes, indicate breed. Eg: Yes, French Bull'/>
                        </label>

                        <label>
                            Where was pet acquired from?
                            <input type="text" name="petAcquired" required />
                        </label>

                        <h3>Pet Care Plans</h3>
                        <label>
                            Will there be pet-sitter if away for vacation?
                            <select name="petSitter">
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </label>

                        <label>
                            Do you plan to take pet to vet regularly?
                            <select name="petSitter">
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </label>

                        <label>
                            Experience with grooming or care?
                            <select name="petGroom">
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </label>

                        <label>
                            Financially prepared for cost to own a pet?
                            <select name="financial">
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </label>
                        
                        <h3>Reason for Adoption</h3>
                        <label>
                            Why are you interested in adopting this pet? <br />
                            <textarea name="adoptReason" className="text-area" required></textarea>
                        </label>
                        
                        <h3>Make an appointment</h3>
                        <label>
                            Preferred Visit Date: 
                            <input type="date" name="dropDate" required />
                        </label>
                        <label>
                            Preferred Adoption Date: <br />
                            <input type="date" name="adoptDate" required />
                        </label>

                        <label className="terms-label">
                            <input type="checkbox" name="terms" required />
                            I agree to the <a href="/adoption-agreement" target="_blank">Adoption Agreement</a>.
                        </label>
                        
                        {/* Submit and Cancel buttons */}
                        <button type="submit" className="submitButton">Submit</button>
                        <button type="button" className="cancelButton">Cancel</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default AdoptPet;
