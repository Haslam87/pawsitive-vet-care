import React, { useState, useEffect } from 'react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out ${isScrolled
                ? 'bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#D4C4B7]/40 py-4 shadow-sm'
                : 'bg-transparent py-8'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
                {/* Brand */}
                <div className={`font-serif text-2xl tracking-wide ${isScrolled ? 'text-[#2B221E]' : 'text-[#2B221E]'}`}>
                    Pawsitive
                </div>

                {/* Links */}
                <nav className="hidden md:flex items-center space-x-10">
                    {['The Ethos', 'Our Space', 'Treatments', 'Our Team'].map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase().replace(' ', '-')}`}
                            className={`text-sm tracking-widest uppercase transition-colors duration-300 ${isScrolled ? 'text-[#2B221E]/70 hover:text-[#B3704D]' : 'text-[#2B221E]/80 hover:text-[#B3704D]'
                                }`}
                        >
                            {link}
                        </a>
                    ))}
                </nav>

                {/* CTA */}
                <button
                    className={`px-6 py-2.5 rounded-[2rem] text-sm tracking-widest uppercase transition-all duration-300 border ${isScrolled
                        ? 'border-[#2E2A26] text-[#2E2A26] hover:bg-[#2E2A26] hover:text-[#FAF8F5]'
                        : 'border-[#D8C9B6] text-[#FAF8F5] hover:bg-[#D8C9B6] hover:text-[#2E2A26]'
                        }`}
                >
                    Book Appointment
                </button>
            </div>
        </header>
    );
}
