import React, { useState } from 'react';

function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Email sent successfully!');
                // Clear form fields after successful submission
                setFormData({
                    name: '',
                    email: '',
                    description: ''
                });
            } else {
                console.error('Failed to send email');
            }
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };

    const handleCancel = () => {
        // Clear form fields on cancel
        setFormData({
            name: '',
            email: '',
            description: ''
        });
    };

    return (
        <>
            <h1 className='Contact'>Contact Us</h1>
            <div className="contact-container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name"><b>Name</b></label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email"><b>Email</b></label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description"><b>Description</b></label>
                        <textarea id="description" name="description" value={formData.description} onChange={handleChange} required />
                    </div>
                    <div className="button-group">
                        <button type="submit" className="submit-btn">Submit</button>
                        <button type="button" className="cancel-btn" onClick={handleCancel}>Cancel</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default ContactPage;
