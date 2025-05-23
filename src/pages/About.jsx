import React from "react";
import { Link } from "react-router-dom";
import webData from "./../web-data.json";

const About = () => {
    const { ourTeams } = webData;

    return (
        <div>
            {/* Hero Section */}
            <section className="bg-primary-100 py-12 md:py-20 bg-pattern-white">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary-800 mb-4">
                            About Prerana
                        </h1>
                    </div>
                </div>
            </section>

            {/* Problem and Solution Section */}
            <section className="py-16 px-4 md:px-8 bg-white bg-pattern-purple">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-800 mb-4">
                            Our Challenge and Approach
                        </h2>
                        <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                            Understanding the barriers and creating pathways to empowerment
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Problem Statement */}
                        <div className="bg-neutral-50 p-8 rounded-xl shadow-md">
                            <h3 className="text-2xl font-bold text-primary-700 mb-4 text-center">
                                The Challenge
                            </h3>
                            <p className="text-neutral-700 mb-4">
                                In India, millions of people with disabilities face significant barriers that prevent them from achieving their full potential. These challenges include:
                            </p>
                            <ul className="list-disc pl-5 text-neutral-700 space-y-2">
                                <li>Limited access to education</li>
                                <li>Inadequate healthcare services</li>
                                <li>Lack of job opportunities</li>
                                <li>Social exclusion and stereotyping</li>
                                <li>Reduced opportunities in rural areas</li>
                            </ul>
                            <p className="text-neutral-700 mt-4">
                                People with disabilities are often marginalized and deprived of opportunities that could help them live a life of independence and dignity.
                            </p>
                        </div>

                        {/* Solution Approach */}
                        <div className="bg-primary-50 p-8 rounded-xl shadow-md">
                            <h3 className="text-2xl font-bold text-primary-700 mb-4 text-center">
                                Our Holistic Solution
                            </h3>
                            <p className="text-neutral-700 mb-4">
                                At Prerana Disabled Welfare Trust, we believe in creating an inclusive society by providing comprehensive support:
                            </p>
                            <ul className="list-disc pl-5 text-neutral-700 space-y-2">
                                <li>
                                    <strong>Education Empowerment:</strong> Specialized education including Braille literacy and skill development
                                </li>
                                <li>
                                    <strong>Healthcare Access:</strong> Free health camps and distribution of mobility aids
                                </li>
                                <li>
                                    <strong>Economic Independence:</strong> Job and self-employment opportunities
                                </li>
                                <li>
                                    <strong>Awareness and Advocacy:</strong> Changing public perceptions and promoting policy changes
                                </li>
                                <li>
                                    <strong>Inclusive Environments:</strong> Training and counseling to create supportive spaces
                                </li>
                            </ul>
                            <div className="text-center mt-6">
                                <Link to={'/programs'} className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md transition inline-block">
                                    Learn More About Our Programs
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto bg-pattern-purple">
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
                            <img src="images/about.jpg" alt="About" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-16 px-4 md:px-8 bg-neutral-50 bg-pattern-white">
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
                    {/* <div className="text-center mt-8">
                        <Link
                            to="/mission"
                            className="text-primary-600 hover:text-primary-800 font-medium inline-flex items-center"
                        >
                            Learn more about our mission and values
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </Link>
                    </div> */}
                </div>
            </section>

            {/* Team */}
            <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto bg-pattern-purple">
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
                        <div key={member.id} className="bg-white rounded-xl shadow-md overflow-hidden group">
                            <div className="relative h-64  flex items-center justify-center overflow-hidden">
                                {/* Mandala SVG Background */}
                                <div className="absolute inset-0 w-full h-full transition-transform duration-1000 group-hover:rotate-180">
                                    <img
                                        src="/images/assets/mandala.svg"
                                        alt="Mandala Pattern"
                                        className="w-full h-full filter text-primary-600"
                                    />
                                </div>
                                {/* Team Member Image */}
                                <div className="relative w-full h-full overflow-hidden transition-transform duration-500 group-hover:scale-110">
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-primary-700 mb-1">{member.name}</h3>
                                <p className="text-neutral-500 mb-4">{member.position}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Achievements */}
            {/* <section className="py-16 px-4 md:px-8 bg-neutral-50 bg-pattern-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-800 mb-4">
                            Achievements & Recognition <span className="pending">PENDING</span>
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
            </section> */}

            {/* Partners */}
            {/* <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto bg-pattern-purple">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-800 mb-4">
                        Our Partners <span className="pending">PENDING</span>
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
            </section> */}

            {/* Call to Action */}
            <section className="py-16 px-4 md:px-8 bg-primary-800 text-white bg-pattern-purple">
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