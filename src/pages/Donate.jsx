import React from "react";
import { Link } from "react-router-dom";

const Donate = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="bg-primary-100 py-12 md:py-20 bg-pattern-white">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary-800 mb-4">
                            Support Our Mission
                        </h1>
                        <p className="text-lg text-neutral-600">
                            Your generous contribution helps us empower individuals with disabilities and create a more inclusive society.
                        </p>
                    </div>
                </div>
            </section>

            {/* Donation Options */}
            <section className="py-16 px-4 md:px-8 bg-white bg-pattern-purple">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-800 mb-4">
                            Make a Difference Today
                        </h2>
                        <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                            Scan the QR code below to make a direct contribution to our cause. Every donation, big or small, makes a significant impact.
                        </p>
                        <p className="text-lg text-primary-800 font-bold font-heading mx-auto mb-4">
                            Your donations are eligible for tax exemption
                        </p>
                        <div className="text-lg text-white bg-primary-800 rounded-xl font-bold font-heading mx-auto p-4">
                            CSR Number: 00060894
                            <br />
                            80G Number: AADTP3347GE20221
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="bg-white p-8 rounded-xl shadow-md">
                                <h3 className="text-2xl font-bold text-primary-700 mb-4">
                                    Why Donate?
                                </h3>
                                <ul className="space-y-4 text-neutral-600">
                                    <li className="flex items-start">
                                        <svg className="w-6 h-6 text-primary-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        Support education and skill development programs
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-6 h-6 text-primary-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        Help provide healthcare and mobility aids
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-6 h-6 text-primary-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        Enable sports and recreational activities
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-6 h-6 text-primary-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        Support our future development projects
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white p-8 rounded-xl shadow-md">
                                <h3 className="text-2xl font-bold text-primary-700 mb-4">
                                    Other Ways to Support
                                </h3>
                                <div className="space-y-4">
                                    <Link
                                        to="/get-involved"
                                        className="flex items-center text-primary-600 hover:text-primary-800"
                                    >
                                        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                        </svg>
                                        Volunteer with Us
                                    </Link>
                                    <Link
                                        to="/contact"
                                        className="flex items-center text-primary-600 hover:text-primary-800"
                                    >
                                        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                        </svg>
                                        Contact Us for Corporate Partnerships
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-md flex flex-col items-center">
                            <h3 className="text-2xl font-bold text-primary-700 mb-6 text-center">
                                Scan to Donate
                            </h3>
                            <div className="w-64 h-64 bg-neutral-100 rounded-lg flex items-center justify-center mb-6">
                                <img
                                    src="/images/qr.jpg"
                                    alt="Donation QR Code"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <p className="text-neutral-600 text-center mb-4">
                                Scan this QR code with your UPI app to make a direct contribution
                            </p>
                            <div className="text-sm text-neutral-500">
                                <p>Account Name: Prerana Disabled Welfare Trust</p>
                                <p>SBI Account Number: 42019048316</p>
                                <p>IFSC Code: SBINO040850</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Section */}
            <section className="py-16 px-4 md:px-8 bg-neutral-50 bg-pattern-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-800 mb-4">
                            Your Impact
                        </h2>
                        <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                            See how your contribution makes a difference in the lives of individuals with disabilities
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-md text-center">
                            <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
                            <div className="text-neutral-600">Individuals Supported</div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-md text-center">
                            <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
                            <div className="text-neutral-600">Programs Running</div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-md text-center">
                            <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
                            <div className="text-neutral-600">Transparency</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 px-4 md:px-8 bg-primary-800 text-white bg-pattern-purple">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                        Join Us in Making a Difference
                    </h2>
                    <p className="text-lg mb-8 max-w-3xl mx-auto">
                        Your support helps us create opportunities and transform lives. Together, we can build a more inclusive society.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/get-involved"
                            className="px-6 py-3 bg-white text-primary-800 hover:bg-neutral-100 font-medium rounded-md transition text-center"
                        >
                            Learn More About Our Work
                        </Link>
                        <Link
                            to="/contact"
                            className="px-6 py-3 bg-primary-700 hover:bg-primary-600 border border-primary-600 text-white font-medium rounded-md transition text-center"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Donate; 