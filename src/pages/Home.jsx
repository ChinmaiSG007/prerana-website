import React from "react";
import { Link } from "react-router-dom";
import webdata from './../web-data.json'

const { ourProgramsArray, galleryImages } = webdata;

const Home = () => {
    const galleryPreview = galleryImages.slice(0, 3);

    return (
        <div className="bg-gradient-to-b from-primary-50 to-white">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto bg-pattern-purple">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-primary-800">
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
            <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto bg-pattern-white">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-800 mb-4">
                        Our Impact
                    </h2>
                    <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                        For over two decades, we've been creating meaningful change in the lives of physically challenged.
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
                        <div className="text-neutral-600"> Food kit distributed</div>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
                        <div className="text-neutral-600">Years of Service</div>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <div className="text-4xl font-bold text-primary-600 mb-2">21</div>
                        <div className="text-neutral-600">Types of disabilities helped</div>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
                        <div className="text-neutral-600">Commitment</div>
                    </div>
                </div>
            </section>

            {/* New Challenge Overview Section */}
            <section className="py-16 px-4 md:px-8 bg-neutral-50 bg-pattern-purple">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-800 mb-4">
                            Breaking Barriers, Creating Opportunities
                        </h2>
                        <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                            Our mission is to transform the lives of individuals with disabilities through comprehensive support and empowerment
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <div className="text-4xl font-bold text-primary-600 mb-4">
                                <svg className="w-12 h-12 mx-auto text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-primary-700 text-center mb-3">
                                Education Access
                            </h3>
                            <p className="text-neutral-600 text-center">
                                Providing specialized education and skill development for individuals with disabilities
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <div className="text-4xl font-bold text-primary-600 mb-4">
                                <svg className="w-12 h-12 mx-auto text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-primary-700 text-center mb-3">
                                Healthcare Support
                            </h3>
                            <p className="text-neutral-600 text-center">
                                Ensuring access to healthcare, mobility aids, and essential medical services
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <div className="text-4xl font-bold text-primary-600 mb-4">
                                <svg className="w-12 h-12 mx-auto text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-primary-700 text-center mb-3">
                                Economic Empowerment
                            </h3>
                            <p className="text-neutral-600 text-center">
                                Creating job opportunities and supporting self-employment initiatives
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <div className="text-4xl font-bold text-primary-600 mb-4">
                                <svg className="w-12 h-12 mx-auto text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-primary-700 text-center mb-3">
                                Sports & Recreation
                            </h3>
                            <p className="text-neutral-600 text-center">
                                Promoting inclusive sports like blind chess and wheelchair cricket to foster physical activity and social inclusion
                            </p>
                        </div>
                    </div>

                    {/* <div className="text-center mt-10">
                        <button className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md transition">
                            Learn More About Our Mission
                        </button>
                    </div> */}
                </div>
            </section>

            {/* Programs Preview */}
            <section className="py-16 px-4 md:px-8 bg-neutral-50 bg-pattern-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-800 mb-4">
                            Our Programs
                        </h2>
                        <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                            Prerana Disabled Welfare Trust offers a variety of programs aimed at empowering persons with
                            disabilities and improving their quality of life
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {ourProgramsArray.map((program) => (
                            <div key={program.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
                                <div className="h-52 bg-neutral-200 flex items-center justify-center">
                                    <img src={program.img} alt={program.title} className="w-[100%] h-[100%] overflow-hidden object-contain" />
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

            {/* Gallery Preview Section */}
            <section className="py-16 px-4 md:px-8 bg-neutral-50 bg-pattern-purple">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-800 mb-4">
                            Our Journey in Images
                        </h2>
                        <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                            Moments of empowerment, inclusion, and hope captured through our work
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {galleryPreview.map((image) => (
                            <div
                                key={image.id}
                                className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105"
                            >
                                <div className="h-64 bg-neutral-200 flex items-center justify-center">
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-10">
                        <Link
                            to="/gallery"
                            className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md transition"
                        >
                            View Full Gallery
                        </Link>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            {/* <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto bg-pattern-white">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-800 mb-4">
                        Success Stories <span className="pending">PENDING</span>
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
            </section> */}

            {/* Call to Action */}
            <section className="py-16 px-4 md:px-8 bg-primary-800 text-white bg-pattern-purple">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                        Join Us in Making a Difference
                    </h2>
                    <p className="text-lg mb-8 max-w-3xl mx-auto">
                        Whether through volunteering, donations, or advocacy, your support can help us uplift and empower individuals with disabilities, providing them with education, opportunities, and a brighter future.
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


// {
//     "id": 7,
//     "title": "Future Development Plans",
//     "body": "Hope for a brighter future starts with action. We aim to build a training and counseling center, a yoga and wellness hub, and a music academy to empower individuals with disabilities.",
//     "img": "images/Future Development Plans.png"
//   }