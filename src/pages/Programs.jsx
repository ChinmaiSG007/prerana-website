import React from "react";
import { Link } from "react-router-dom";
import webData from "./../web-data.json";

const Programs = () => {
    const { ourProgramsArray } = webData;

    return (
        <div>
            {/* Hero Section */}
            <section className="bg-primary-100 py-12 md:py-20 bg-pattern-white">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary-800 mb-4">
                            Our Programs
                        </h1>
                    </div>
                </div>
            </section>

            {/* Program Categories */}
            <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto bg-pattern-purple">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-800 mb-4">
                        Empowering Lives Through Comprehensive Support
                    </h2>
                    <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                        Prerana Disabled Welfare Trust offers a variety of programs aimed at empowering persons with disabilities and improving their quality of life.
                    </p>
                </div>


                {ourProgramsArray.map((program, index) => (
                    <section
                        key={program.title}
                        className={`py-16 px-4 md:px-8 max-w-7xl mx-auto ${index % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}`}
                    >
                        <div className="text-center mb-10">
                            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-800 mb-4">
                                {program.title}
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            {program.programs.map((program) => (
                                <div
                                    key={program.title}
                                    className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all"
                                >
                                    <h3 className="text-xl font-bold text-primary-700 mb-3">
                                        {program.title}
                                    </h3>
                                    <p className="text-neutral-600">
                                        {program.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </section>

            {/* Detailed Program Information */}
            {/* <section className="py-16 px-4 md:px-8 bg-neutral-50 bg-pattern-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-800 mb-4">
                            Our Comprehensive Approach
                        </h2>
                        <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                            We focus on holistic development through targeted initiatives that address multiple aspects of life.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-md">
                            <div className="text-center mb-4">
                                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-primary-700 mb-2">Education & Skill Development</h3>
                            </div>
                            <p className="text-neutral-600 text-center">
                                Providing inclusive learning opportunities, Braille education, and vocational training in computers, arts, and crafts to promote self-reliance.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-md">
                            <div className="text-center mb-4">
                                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-primary-700 mb-2">Health & Wellness</h3>
                            </div>
                            <p className="text-neutral-600 text-center">
                                Organizing free medical camps, health checkups, and distributing prosthetics and mobility aids to improve quality of life.
                            </p>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* Future Development */}
            <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto bg-gradient-to-b from-primary-50 to-white bg-pattern-purple">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-800 mb-4">
                        Future Development Plans
                    </h2>
                    <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                        We are committed to continuous innovation and expansion of our support services.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <div className="h-20 flex items-center justify-center mb-4">
                            <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-bold text-primary-700 mb-2 text-center">
                            Training & Counseling Institute
                        </h3>
                        <p className="text-neutral-600 text-center">
                            Developing a dedicated space for vocational and psychological training to enhance the employability and well-being of disabled individuals.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <div className="h-20 flex items-center justify-center mb-4">
                            <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-bold text-primary-700 mb-2 text-center">
                            Wellness Center
                        </h3>
                        <p className="text-neutral-600 text-center">
                            Establishing a yoga center to promote physical health and mental wellness for persons with disabilities.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <div className="h-20 flex items-center justify-center mb-4">
                            <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-bold text-primary-700 mb-2 text-center">
                            Music Academy
                        </h3>
                        <p className="text-neutral-600 text-center">
                            Providing music and singing training to help disabled persons discover and hone their musical talents.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <div className="h-20 flex items-center justify-center mb-4">
                            <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-bold text-primary-700 mb-2 text-center">
                            Arts Training Center
                        </h3>
                        <p className="text-neutral-600 text-center">
                            Creating a space for visual arts, crafts, and creative expression to nurture artistic abilities in persons with disabilities.
                        </p>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 px-4 md:px-8 bg-primary-800 text-white bg-pattern-white">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                        Join Our Mission
                    </h2>
                    <p className="text-lg mb-8 max-w-3xl mx-auto">
                        Your support can help us expand our services, create more opportunities for persons with disabilities, and build a more inclusive society.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/get-involved"
                            className="px-6 py-3 bg-white text-primary-800 hover:bg-neutral-100 font-medium rounded-md transition text-center"
                        >
                            Get Involved
                        </Link>
                        <Link
                            to="/donate"
                            className="px-6 py-3 bg-primary-700 hover:bg-primary-600 border border-primary-600 text-white font-medium rounded-md transition text-center"
                        >
                            Donate Now
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Programs;