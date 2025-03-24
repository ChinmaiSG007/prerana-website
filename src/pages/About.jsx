import React from "react";
import { Link } from "react-router-dom";
import webData from "./../web-data.json";

const About = () => {
    const { ourTeams } = webData;

    return (
        <div>
            {/* Hero Section */}
            <section className="bg-primary-100 py-12 md:py-20">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary-800 mb-4">
                            About Prerana
                        </h1>
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 md:order-1">
                        <h2 className="text-3xl font-bold font-heading text-primary-800 mb-4">
                            Our Story
                        </h2>
                        <p className="text-neutral-700 mb-4">
                            <strong>Prerana Disabled Welfare Trust (PWDT)</strong>, established in 2009, is a non-profit organization
                            based in Tumkur, Karnataka, India. We are committed to the empowerment and mainstreaming
                            of persons with disabilities through various developmental initiatives. Our focus is to create an
                            inclusive society where all individuals, regardless of their disabilities, have the chance to live
                            with dignity, independence, and respect.
                        </p>
                        <p className="text-neutral-700 mb-4">
                            Led by trustees who themselves are physically challenged, Prerana understands the everyday
                            struggles faced by disabled individuals. We know that, with the right opportunities, persons with
                            disabilities can lead vibrant, fulfilling lives. Therefore, we offer services ranging from educational
                            support and job training to healthcare, sports activities, and self-empowerment initiatives. Our
                            goal is to promote the inclusion of persons with disabilities in every aspect of life.
                        </p>
                    </div>
                    <div className="order-1 md:order-2 h-64 md:h-96 rounded-xl overflow-hidden shadow-lg">
                        <div className="w-full h-full bg-neutral-200 flex items-center justify-center">
                            <img src="images/IMG-20250223-WA0030.jpg" alt="About" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-16 px-4 md:px-8 bg-neutral-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-800 mb-4">
                            Vision & Mission
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-md">
                            <div className="text-center mb-4">
                                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-primary-700 mb-2">Our Vision</h3>
                            </div>
                            <p className="text-neutral-600 text-center">
                                To create a world where persons with disabilities are celebrated for their strengths and abilities,
                                with equal opportunities and access to a barrier-free society.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-md">
                            <div className="text-center mb-4">
                                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-primary-700 mb-2">Our Mission</h3>
                            </div>
                            <p className="text-neutral-600 text-center">
                                To empower persons with disabilities by providing education, healthcare, skill development, and
                                opportunities for independence, while promoting inclusion and advocacy for a more equitable
                                society.
                            </p>
                        </div>
                    </div>
                    <div className="text-center mt-8">
                        <Link
                            to="/mission"
                            className="text-primary-600 hover:text-primary-800 font-medium inline-flex items-center"
                        >
                            Learn more about our mission and values
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-800 mb-4">
                        Our Team
                    </h2>
                    <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                        Meet the dedicated individuals working to make our mission a reality.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Leadership Team Members */}
                    {ourTeams.map((member) => (
                        <div key={member.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                            <div className="h-64 bg-neutral-200 flex items-center justify-center">
                                <img src={member.img} alt={member.name} className="w-[100%] h-[100%] overflow-hidden object-contain" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-primary-700 mb-1">{member.name}</h3>
                                <p className="text-neutral-500 mb-4">{member.position}</p>
                                <p className="text-neutral-600 mb-4">
                                    With over 15 years of experience in child welfare, {member.name} leads our organization with passion and dedication.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Achievements */}
            <section className="py-16 px-4 md:px-8 bg-neutral-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-800 mb-4">
                            Achievements & Recognition
                        </h2>
                        <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                            Our work has been recognized by various organizations and institutions.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <div className="h-20 flex items-center justify-center mb-4">
                                <span className="text-neutral-500">Award Logo</span>
                            </div>
                            <h3 className="text-lg font-bold text-primary-700 mb-2 text-center">
                                Child Welfare Excellence Award 2023
                            </h3>
                            <p className="text-neutral-600 text-center">
                                Recognized for outstanding contribution to child protection and education.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <div className="h-20 flex items-center justify-center mb-4">
                                <span className="text-neutral-500">Award Logo</span>
                            </div>
                            <h3 className="text-lg font-bold text-primary-700 mb-2 text-center">
                                Community Impact Recognition 2022
                            </h3>
                            <p className="text-neutral-600 text-center">
                                Honored for creating sustainable change in underserved communities.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <div className="h-20 flex items-center justify-center mb-4">
                                <span className="text-neutral-500">Award Logo</span>
                            </div>
                            <h3 className="text-lg font-bold text-primary-700 mb-2 text-center">
                                Education Innovation Award 2021
                            </h3>
                            <p className="text-neutral-600 text-center">
                                Awarded for innovative approaches to education in challenging environments.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partners */}
            <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-800 mb-4">
                        Our Partners
                    </h2>
                    <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                        We collaborate with organizations that share our commitment to children's welfare.
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                        <div key={index} className="h-24 bg-white rounded-lg shadow-md flex items-center justify-center">
                            <span className="text-neutral-500">Partner Logo</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 px-4 md:px-8 bg-primary-800 text-white">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                        Join Our Journey
                    </h2>
                    <p className="text-lg mb-8 max-w-3xl mx-auto">
                        Whether through volunteering, donations, or advocacy, your support can help us uplift and empower individuals with disabilities, providing them with education, opportunities, and a brighter future.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/get-involved"
                            className="px-6 py-3 bg-white text-primary-800 hover:bg-neutral-100 font-medium rounded-md transition text-center"
                        >
                            Get Involved
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

export default About;