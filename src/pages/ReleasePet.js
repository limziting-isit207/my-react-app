import React, { useState } from 'react';

const ReleasePet = () => {
    const [showForm] = useState(true);

    return (
        <div>
            {showForm && (
                <div className="form-container">
                    <h2>Release Pet Form</h2>
                    
                    <form>
                    {/* Release specific fields */}
                    <h3>Pet Information</h3>
                    <label>
                        Pet Name: <br />
                        <input type="text" name="petName" required />
                    </label>

                    <label>
                        Pet Breed: <br />
                        <input type="text" name="petBreed" required />
                    </label>

                    <label>
                        Pet Date Of Birth: <br />
                        <input type="text" name="petBirthday" required />
                    </label>

                    <label>
                        Pet Gender: <br />
                        <input type="text" name="petGender" required />
                    </label>

                    <label>
                        Drop Off Date: <br />
                        <input type="date" name="releaseDate" required />
                    </label>

                    <label>
                        Reason for Release: <br />
                        <textarea name="releaseReason" required />
                    </label>

                    <label>
                        Pet Behaviour: <br />
                        <input type="text" name="behaviour" required />
                    </label>

                    <label>
                        Pet Health/Medical History: <br />
                        <input type="text" name="petHealthHistory" required />
                    </label>

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

                    {/* History and Background */}
                    <h3>History and Background</h3>
                    <label>
                        How long have you owned the pet? <br />
                        <input type="text" name="ownDuration" required />
                    </label>

                    <label>
                        Where was the pet acquired from? <br />
                        <input type="text" name="petAcquired" required />
                    </label>

                    <label>
                        Share some stories about your pet! <br/>
                        <textarea name="releaseStory" required />
                    </label>

                    {/* Appointment */}
                    <h3>Make an appointment</h3>
                    <label>
                        Preferred Drop-off Date: <br />
                        <input type="date" name="dropDate" required />
                    </label>

                    <label>
                        Preferred Drop-off Time: <br />
                        <input type="time" name="dropTime" required />
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

export default ReleasePet;



