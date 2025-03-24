import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // Close mobile menu when route changes
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Programs', path: '/programs' },
        { name: 'Success Stories', path: '/stories' },
        { name: 'Get Involved', path: '/get-involved' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'glass-nav shadow-md' : 'bg-transparent'}`}>
            <div className="container-custom">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <img src={'images/logo.jpg'} alt="Prerana Disabled Welfare trust Logo" className="h-10 w-auto" />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`font-medium hover:text-primary-600 ${location.pathname === link.path ? 'text-primary-600' : 'text-neutral-700'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/donate" className="btn-primary">
                            Donate Now
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-neutral-700 focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                    >
                        {isOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 py-4' : 'max-h-0'}`}>
                    <div className="flex flex-col space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`font-medium hover:text-primary-600 ${location.pathname === link.path ? 'text-primary-600' : 'text-neutral-700'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/donate" className="btn-primary text-center">
                            Donate Now
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;