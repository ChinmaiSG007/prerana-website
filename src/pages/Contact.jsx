import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Implement form submission logic
        console.log('Form submitted:', formData);
        // Reset form after submission
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        });
        alert('Thank you for your message. We will get back to you soon!');
    };

    return (
        <div>
            {/* Hero Section */}
            <section className="bg-primary-100 py-12 md:py-20">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary-800 mb-4">
                            Contact Us <span className="pending">PENDING</span>
                        </h1>
                        <p className="text-lg text-neutral-600">
                            We're here to listen, support, and create meaningful change together
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Information and Form */}
            <section className="py-16 px-4 md:px-8 bg-white">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
                    {/* Contact Details */}
                    <div>
                        <h2 className="text-2xl font-bold text-primary-800 mb-6">
                            Get in Touch
                        </h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-bold text-primary-700 mb-2">Address</h3>
                                <p className="text-neutral-600">
                                    Prerana Disabled Welfare Trust<br />
                                    Opposite Tiles Factory,
                                    Uparahalli Main Road,
                                    TUMAKURU,
                                    Karnataka -572 102
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-primary-700 mb-2">Contact Information</h3>
                                <p className="text-neutral-600">
                                    Phone: +91-8660178143<br />
                                    Email: preranadisabledwelfaretrust@gmail.com
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-primary-700 mb-2">Working Hours</h3>
                                <p className="text-neutral-600">
                                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                                    Saturday: 10:00 AM - 2:00 PM<br />
                                    Sunday: Closed
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <h2 className="text-2xl font-bold text-primary-800 mb-6">
                            Send Us a Message
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-neutral-700 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-neutral-700 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-neutral-700 mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-neutral-700 mb-2">Subject</label>
                                <select
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                                >
                                    <option value="">Select a Subject</option>
                                    <option value="volunteer">Volunteering</option>
                                    <option value="donation">Donations</option>
                                    <option value="program">Program Inquiry</option>
                                    <option value="support">General Support</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-neutral-700 mb-2">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Location Section */}
            <section className="py-16 px-4 md:px-8 bg-neutral-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-800 mb-8 text-center">
                        Our Location
                    </h2>
                    {/* Placeholder for Google Maps or static map image */}
                    <div className="bg-neutral-200 h-96 flex items-center justify-center rounded-xl">
                        <span className="text-neutral-600">Google Maps Placeholder</span>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 px-4 md:px-8 bg-primary-800 text-white">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                        Let's Make a Difference Together
                    </h2>
                    <p className="text-lg mb-8 max-w-3xl mx-auto">
                        Your support, feedback, and collaboration are crucial in our mission to empower individuals with disabilities.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/get-involved"
                            className="px-6 py-3 bg-white text-primary-800 hover:bg-neutral-100 font-medium rounded-md transition text-center"
                        >
                            Volunteer
                        </Link>
                        <Link
                            to="/donate"
                            className="px-6 py-3 bg-secondary-600 hover:bg-secondary-700 text-white font-medium rounded-md transition text-center"
                        >
                            Donate Now
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;