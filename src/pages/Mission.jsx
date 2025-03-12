import React from "react";
import { Link } from "react-router-dom";

const Mission = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="bg-primary-100 py-12 md:py-20">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary-800 mb-4">
                            Our Mission & Values
                        </h1>
                        <p className="text-lg text-neutral-700">
                            Learn about what drives us, the principles we stand by, and the impact we aim to create.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission Statement */}
            <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-3xl font-bold font-heading text-primary-800 mb-4">
                            Our Mission
                        </h2>
                        <p className="text-neutral-700 mb-4 text-lg">
                            To protect and educate vulnerable children by providing comprehensive support services, advocating for their rights, and empowering communities to create sustainable change.
                        </p>
                        <p className="text-neutral-700 mb-4">
                            At Prerana, we believe that every child deserves a safe environment to grow, learn, and thrive. Our mission guides all our programs and initiatives, keeping us focused on creating meaningful impact in the lives of children who need it most.
                        </p>
                        <p className="text-neutral-700">
                            Through our integrated approach, we address not only the immediate needs of children but also work to create systems and communities that can sustainably support their long-term development and wellbeing.
                        </p>
                    </div>
                    <div className="h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
                        <div className="w-full h-full bg-neutral-200 flex items-center justify-center">
                            <span className="text-neutral-500">Mission Image</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Core Values */}
            <section className="py-16 px-4 md:px-8 bg-neutral-50">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-800 mb-6">
                        Our Core Values
                    </h2>
                    <p className="text-lg text-neutral-700 max-w-3xl mx-auto mb-12">
                        Our work is driven by values that ensure we make a meaningful and lasting impact in the communities we serve.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Integrity", desc: "We uphold transparency, honesty, and accountability in everything we do." },
                            { title: "Compassion", desc: "We work with empathy and dedication to support the needs of vulnerable children." },
                            { title: "Empowerment", desc: "We enable children and communities to take charge of their own future." },
                            { title: "Sustainability", desc: "We focus on long-term impact by building sustainable systems of support." },
                            { title: "Innovation", desc: "We seek new and effective ways to tackle challenges in child welfare." },
                            { title: "Collaboration", desc: "We partner with stakeholders to amplify our reach and impact." },
                        ].map((value, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                                <h3 className="text-xl font-bold text-primary-700 mb-2">{value.title}</h3>
                                <p className="text-neutral-600">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 px-4 md:px-8 bg-primary-800 text-white text-center">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                        Join Our Mission
                    </h2>
                    <p className="text-lg mb-8 max-w-3xl mx-auto">
                        Be a part of our vision for a better future. Support our cause and help make a difference in a child's life.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/get-involved"
                            className="px-6 py-3 bg-white text-primary-800 hover:bg-neutral-100 font-medium rounded-md transition"
                        >
                            Get Involved
                        </Link>
                        <Link
                            to="/donate"
                            className="px-6 py-3 bg-primary-700 hover:bg-primary-600 border border-primary-600 text-white font-medium rounded-md transition"
                        >
                            Donate Now
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Mission;
