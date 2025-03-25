import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import webData from './../web-data.json'

const Gallery = () => {
    const { galleryImages } = webData;
    const [selectedImage, setSelectedImage] = useState(null);

    const openImagePreview = (image) => {
        setSelectedImage(image);
    };

    const closeImagePreview = () => {
        setSelectedImage(null);
    };

    return (
        <div>
            {/* Hero Section */}
            <section className="bg-primary-100 py-12 md:py-20">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary-800 mb-4">
                            Our Gallery
                        </h1>
                        <p className="text-lg text-neutral-600">
                            Capturing moments of empowerment, inclusion, and hope
                        </p>
                    </div>
                </div>
            </section>

            {/* Image Gallery Section */}
            <section className="py-16 px-4 md:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8">
                        {galleryImages.map((image) => (
                            <div
                                key={image.id}
                                className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer"
                                onClick={() => openImagePreview(image)}
                            >
                                <div className="h-64 bg-neutral-200 flex items-center justify-center">
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-full object-cover hover:opacity-90 transition"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Image Preview Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
                    onClick={closeImagePreview}
                >
                    <div
                        className="max-w-6xl max-h-[90vh] relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={closeImagePreview}
                            className="absolute top-[-40px] right-0 text-white text-3xl hover:text-neutral-300 transition"
                        >
                            &times;
                        </button>
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="w-full h-full object-contain rounded-lg"
                        />
                    </div>
                </div>
            )}

            {/* Call to Action */}
            <section className="py-16 px-4 md:px-8 bg-primary-800 text-white">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                        Share Our Story
                    </h2>
                    <p className="text-lg mb-8 max-w-3xl mx-auto">
                        Each image represents a moment of transformation, hope, and human potential. Help us spread awareness and create more opportunities for individuals with disabilities.
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
    )
}

export default Gallery