import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="bg-gradient-to-b from-primary-50 to-white min-h-screen flex items-center justify-center">
            <section className="max-w-7xl mx-auto px-4 md:px-8 py-20 text-center">
                <div className="bg-white rounded-xl shadow-lg p-10 max-w-2xl mx-auto">
                    <div className="mb-8">
                        <h1 className="text-6xl font-bold text-primary-800 mb-4">
                            404
                        </h1>
                        <h2 className="text-3xl font-bold text-primary-700 mb-4">
                            Page Not Found
                        </h2>
                        <p className="text-lg text-neutral-600 mb-8">
                            Oops! The page you're looking for seems to have taken an unexpected detour.
                            Don't worry, we'll help you find your way back.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/"
                            className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md transition text-center"
                        >
                            Return to Home
                        </Link>
                        <Link
                            to="/contact"
                            className="px-6 py-3 bg-secondary-600 hover:bg-secondary-700 text-white font-medium rounded-md transition text-center"
                        >
                            Contact Support
                        </Link>
                    </div>
                </div>

                {/* Optional: Decorative image or illustration */}
                <div className="mt-12 opacity-50">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 400 200"
                        className="mx-auto max-w-md"
                    >
                        <path
                            d="M50 100 Q200 50 350 100"
                            fill="none"
                            stroke="#6B7280"
                            strokeWidth="3"
                            strokeDasharray="10,10"
                        />
                        <circle cx="200" cy="100" r="20" fill="#94A3B8" />
                        <text
                            x="200"
                            y="180"
                            textAnchor="middle"
                            fill="#6B7280"
                            fontSize="16"
                        >
                            Lost in Navigation
                        </text>
                    </svg>
                </div>
            </section>
        </div>
    );
};

export default NotFound;