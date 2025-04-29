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
            <section className="bg-primary-100 py-12 md:py-20 bg-pattern-purple">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary-800 mb-4">
                            Contact Us
                        </h1>
                        <p className="text-lg text-neutral-600">
                            We're here to listen, support, and create meaningful change together
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Information and Form */}
            <section className="py-16 px-4 md:px-8 bg-white bg-pattern-purple">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-800 mb-4">
                            We're Here to Help
                        </h2>
                        <p className="text-lg text-neutral-600">
                            Whether you're looking to volunteer, make a donation, or learn more about our programs, we're just a call or email away. Our team is dedicated to supporting individuals with disabilities and creating a more inclusive society.
                        </p>
                    </div>

                    {/* Contact Details */}
                    <div className="max-w-3xl mx-auto">
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-bold text-primary-700 mb-2">Address</h3>
                                <p className="text-neutral-600">
                                    Prerana Disabled Welfare Trust<br />
                                    Railway Station Road, Opposite Government BCM Women's Hostel, Beside Church, Tumkur-572101
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-primary-700 mb-2">Contact Information</h3>
                                <p className="text-neutral-600">
                                    Phone: +91-7483835728<br />
                                    Phone: +91-8660178143<br />
                                    Phone: +91-9743817357<br />
                                    Phone: +91-9035642271<br />
                                    Email: preranadisabledwelfaretrust@gmail.com
                                </p>
                            </div>
                        </div>

                        <div className="mt-12 space-y-6">
                            <div>
                                <h3 className="font-bold text-primary-700 mb-2">How to Reach Us</h3>
                                <p className="text-neutral-600">
                                    Our office is conveniently located near the Tumkur Railway Station. You can reach us by:
                                </p>
                                <ul className="list-disc list-inside text-neutral-600 mt-2 space-y-1">
                                    <li>Train: Get down at Tumkur Railway Station</li>
                                    <li>Bus: Take any bus to Tumkur Bus Stand</li>
                                    <li>Auto: Available from all major points in the city</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-bold text-primary-700 mb-2">What to Expect</h3>
                                <p className="text-neutral-600">
                                    When you contact us, you can expect:
                                </p>
                                <ul className="list-disc list-inside text-neutral-600 mt-2 space-y-1">
                                    <li>Prompt response to your inquiries</li>
                                    <li>Detailed information about our programs</li>
                                    <li>Guidance on how you can contribute</li>
                                    <li>Support for any specific needs or questions</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Location Section */}
            <section className="py-16 px-4 md:px-8 bg-neutral-50 bg-pattern-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-800 mb-8 text-center">
                        Our Location
                    </h2>
                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <h3 className="text-2xl font-bold text-primary-700 mb-4">Our Location</h3>
                        <div className="aspect-w-16 aspect-h-16 rounded-lg overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d970.5693516290289!2d77.10633816951025!3d13.333012304145822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb02c214afd438b%3A0x9a3f5b9b3d8e897e!2s902%2C%205th%20Cross%20Rd%2C%20Ss%20Puram%2C%20Upparahalli%2C%20Tumakuru%2C%20Karnataka%20572102!5e0!3m2!1sen!2sin!4v1745945203104!5m2!1sen!2sin"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 px-4 md:px-8 bg-primary-800 text-white bg-pattern-purple">
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