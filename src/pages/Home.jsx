import React from "react";
import { Link } from "react-router-dom";
import webdata from './../web-data.json'

const { ourProgramsArray } = webdata;

const Home = () => {
    return (
        <div className="bg-gradient-to-b from-primary-50 to-white">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-primary-800">
                            Prerana Disabled Welfare trust®
                        </h1>
                        <p className="text-lg text-neutral-700">
                            Where will empower visually impaired, disabled and underprivileged people through developmental initiatives focusing on educational, social, economic, cultural and technological aspects.                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/get-involved"
                                className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md transition text-center"
                            >
                                Get Involved
                            </Link>
                            <Link
                                to="/donate"
                                className="px-6 py-3 bg-secondary-600 hover:bg-secondary-700 text-white font-medium rounded-md transition text-center"
                            >
                                Donate Now
                            </Link>
                        </div>
                    </div>
                    <div className="relative h-64 md:h-full min-h-[320px] rounded-xl overflow-hidden shadow-lg">
                        <div className="absolute inset-0 bg-neutral-200 flex items-center justify-center">
                            <img src="images/hero.jpg" alt="Prerana Disabled Welfare trust" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Stats */}
            <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-800 mb-4">
                        Our Impact
                    </h2>
                    <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                        For over two decades, we've been creating meaningful change in the lives of children.
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <div className="text-4xl font-bold text-primary-600 mb-2">5,000+</div>
                        <div className="text-neutral-600">Children Supported</div>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <div className="text-4xl font-bold text-primary-600 mb-2">25+</div>
                        <div className="text-neutral-600">Years of Service</div>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
                        <div className="text-neutral-600">Community Centers</div>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
                        <div className="text-neutral-600">Commitment</div>
                    </div>
                </div>
            </section>

            {/* Programs Preview */}
            <section className="py-16 px-4 md:px-8 bg-neutral-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-800 mb-4">
                            Our Programs
                        </h2>
                        <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                            We run various programs focused on education, health, and child protection.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {ourProgramsArray.map((program) => (
                            <div key={program.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
                            <div className="h-48 bg-neutral-200 flex items-center justify-center">
                                    <span className="text-neutral-500">{program.img}</span>
                            </div>
                            <div className="p-6">
                                    <h3 className="text-xl font-bold text-primary-700 mb-2">{program.title}</h3>
                                    <p className="text-neutral-600 mb-4">{program.body}</p>
                                <Link
                                    to="/programs"
                                    className="text-primary-600 hover:text-primary-800 font-medium inline-flex items-center"
                                >
                                    Learn more
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-800 mb-4">
                        Success Stories
                    </h2>
                    <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                        The voices of those we've supported speak louder than statistics.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <div className="flex items-center mb-4">
                            <div className="w-16 h-16 rounded-full bg-neutral-200 flex items-center justify-center mr-4">
                                <span className="text-neutral-500">Photo</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-primary-700">Sarita P.</h3>
                                <p className="text-neutral-500">Former Student</p>
                            </div>
                        </div>
                        <blockquote className="text-neutral-600 italic">
                            "Prerana changed my life by giving me access to education. Today, I am a college graduate working as a teacher, giving back to my community."
                        </blockquote>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <div className="flex items-center mb-4">
                            <div className="w-16 h-16 rounded-full bg-neutral-200 flex items-center justify-center mr-4">
                                <span className="text-neutral-500">Photo</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-primary-700">Rahul M.</h3>
                                <p className="text-neutral-500">Community Member</p>
                            </div>
                        </div>
                        <blockquote className="text-neutral-600 italic">
                            "The transformation I've seen in our community since Prerana began working here is remarkable. Children have hope and opportunities they never had before."
                        </blockquote>
                    </div>
                </div>
                <div className="text-center mt-8">
                    <Link
                        to="/stories"
                        className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md transition inline-block"
                    >
                        Read More Stories
                    </Link>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 px-4 md:px-8 bg-primary-800 text-white">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                        Join Us in Making a Difference
                    </h2>
                    <p className="text-lg mb-8 max-w-3xl mx-auto">
                        Whether through volunteering, donations, or advocacy, your support can help us continue our mission to protect and educate vulnerable children.
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
                            Make a Donation
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;