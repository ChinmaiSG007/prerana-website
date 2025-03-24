import React from 'react';
import { Link } from 'react-router-dom';
import webdata from './../../web-data.json'

const { ourProgramsArray } = webdata;


const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-neutral-800 text-white pt-16 pb-8">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Logo and Mission */}
                    <div className="lg:col-span-1">
                        <Link to="/" className="flex items-center space-x-2 mb-4">
                            <img src={'images/logo.jpg'} alt="Prerana Disabled Welfare trust Logo" className="h-10 w-auto" />
                            <span className="text-xl font-heading font-bold text-white">Prerana Disabled Welfare trust</span>
                        </Link>
                        <p className="text-neutral-300 mb-4">
                            Empowering individuals with disabilities to achieve their full potential through advocacy, education, and support.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" aria-label="Facebook" className="text-neutral-300 hover:text-primary-400" target="_blank" rel="noopener noreferrer">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                                </svg>
                            </a>
                            <a href="https://twitter.com" aria-label="Twitter" className="text-neutral-300 hover:text-primary-400" target="_blank" rel="noopener noreferrer">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                            </a>
                            <a href="https://instagram.com" aria-label="Instagram" className="text-neutral-300 hover:text-primary-400" target="_blank" rel="noopener noreferrer">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <a href="https://linkedin.com" aria-label="LinkedIn" className="text-neutral-300 hover:text-primary-400" target="_blank" rel="noopener noreferrer">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                            <a href="https://youtube.com" aria-label="YouTube" className="text-neutral-300 hover:text-primary-400" target="_blank" rel="noopener noreferrer">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-medium mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link to="/" className="text-neutral-300 hover:text-white">Home</Link></li>
                            <li><Link to="/about" className="text-neutral-300 hover:text-white">About Us</Link></li>
                            <li><Link to="/programs" className="text-neutral-300 hover:text-white">Programs</Link></li>
                            <li><Link to="/stories" className="text-neutral-300 hover:text-white">Success Stories</Link></li>
                            <li><Link to="/donate" className="text-neutral-300 hover:text-white">Donate</Link></li>
                        </ul>
                    </div>

                    {/* Programs */}
                    <div>
                        <h4 className="text-lg font-medium mb-4">Our Programs</h4>
                        <ul className="space-y-2">
                            {ourProgramsArray.map((program) => (
                                <li key={program.id}><Link to="/programs" className="text-neutral-300 hover:text-white">{program.title}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-medium mb-4">Contact Us</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-primary-400 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="text-neutral-300">Opposite Tiles Factory, <br /> Uparahalli Main Road, <br /> TUMAKURU, <br />Karnataka -572 102 </span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-primary-400 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span className="text-neutral-300">+91-8660178143</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 5H8a4 4 0 00-4 4v6a4 4 0 004 4h8a4 4 0 004-4V9a4 4 0 00-4-4zM3 9l9 6 9-6" />
                                </svg>
                                <p className="text-neutral-300 break-all">preranadisabledwelfaretrust@gmail.com</p>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-neutral-700 text-neutral-400 text-sm text-center">
                    <p>© {currentYear} Prerana Disabled Welfare trust. All rights reserved.</p>
                    <div className="mt-2 space-x-4">
                        <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
                        <Link to="/terms-of-service" className="hover:text-white">Terms of Service</Link>
                        <Link to="/accessibility" className="hover:text-white">Accessibility Statement</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;