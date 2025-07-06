import React, { useState } from "react";
import logoHei from "../assets/cropped-Logo-e1662790239183.png";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="bg-[#001F5B] text-white px-8 py-8 flex justify-between items-center sticky top-0 z-50 shadow-md">
            <a href="/" className="brand">
                <img src={logoHei} alt="HEI Logo" className="h-16 w-auto" />
            </a>
            
            <nav className="hidden md:flex space-x-8 font-medium uppercase text-[0.95rem] items-center">
                <a href="/" className="hover:text-yellow-400 transition-colors duration-200">Accueil</a>
                <a href="/actualites" className="hover:text-yellow-400 transition-colors duration-200">Actualités</a>
                <a href="/bourse-detudes" className="hover:text-yellow-400 transition-colors duration-200">Bourse d'études</a>
                <a href="/inscription" className="hover:text-yellow-400 transition-colors duration-200">Inscription</a>
                <a 
                    href="https://admin.hei.school/" 
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded ml-6 font-semibold transition-colors duration-200"
                >
                    INTRANET
                </a>
            </nav>
            
            {/* Menu mobile */}
            <div className="md:hidden flex items-center space-x-4">
                <a 
                    href="https://admin.hei.school/" 
                    className="bg-yellow-500 hover:bg-yellow-600 text-black px-3 py-1.5 rounded text-sm font-medium"
                >
                    INTRANET
                </a>
                <button 
                    className="text-white focus:outline-none p-1" 
                    onClick={toggleMobileMenu}
                    aria-label="Menu de navigation"
                >
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>

            {/* Menu mobile overlay */}
            {isMobileMenuOpen && (
                <>
                    <div 
                        className="fixed inset-0 bg-black bg-opacity-50 z-40" 
                        onClick={toggleMobileMenu}
                    ></div>
                    <div className="fixed inset-y-0 left-0 w-72 bg-[#001F5B] z-50 p-6">
                        <div className="flex justify-between items-center mb-8">
                            <img src={logoHei} alt="HEI Logo" className="h-10 w-auto" />
                            <button 
                                className="text-white focus:outline-none p-1" 
                                onClick={toggleMobileMenu}
                            >
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                        <nav className="flex flex-col space-y-5 font-medium uppercase text-[0.95rem]">
                            <a href="/" className="hover:text-yellow-400 py-2 transition-colors duration-200" onClick={toggleMobileMenu}>Accueil</a>
                            <a href="/actualites" className="hover:text-yellow-400 py-2 transition-colors duration-200" onClick={toggleMobileMenu}>Actualités</a>
                            <a href="/bourse-detudes" className="hover:text-yellow-400 py-2 transition-colors duration-200" onClick={toggleMobileMenu}>Bourse d'études</a>
                            <a href="/inscription" className="hover:text-yellow-400 py-2 transition-colors duration-200" onClick={toggleMobileMenu}>Inscription</a>
                        </nav>
                    </div>
                </>
            )}
        </header>
    );
};

export default Header;