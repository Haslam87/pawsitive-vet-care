import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const navLinks = ['The Ethos', 'Our Space', 'Treatments', 'Our Team'];

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out ${isScrolled || isMenuOpen
                    ? 'bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#D4C4B7]/40 py-4 shadow-sm'
                    : 'bg-transparent py-8'
                    }`}
            >
                <div className="relative z-50 max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
                    {/* Brand */}
                    <div className={`font-serif text-2xl tracking-wide ${isScrolled || isMenuOpen ? 'text-[#2B221E]' : 'text-[#2B221E]'}`}>
                        Pawsitive
                    </div>

                    {/* Desktop Links */}
                    <nav className="hidden md:flex items-center space-x-10">
                        {navLinks.map((link) => (
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

                    {/* Desktop CTA */}
                    <button
                        className={`hidden md:block px-6 py-2.5 rounded-[2rem] text-sm tracking-widest uppercase transition-all duration-300 border ${isScrolled
                            ? 'border-[#2E2A26] text-[#2E2A26] hover:bg-[#2E2A26] hover:text-[#FAF8F5]'
                            : 'border-[#D8C9B6] text-[#FAF8F5] hover:bg-[#D8C9B6] hover:text-[#2E2A26]'
                            }`}
                    >
                        Book Appointment
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        className={`md:hidden z-50 p-2 -mr-2 transition-colors ${isScrolled || isMenuOpen ? 'text-[#2E2A26]' : 'text-[#D8C9B6]'}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Full-Screen Overlay Menu */}
                <div
                    className={`fixed inset-0 bg-[#FAF8F5] pt-24 z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out md:hidden ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
                        }`}
                >
                    <nav className="flex flex-col items-center space-y-8 mb-12">
                        {navLinks.map((link) => (
                            <a
                                key={link}
                                href={`#${link.toLowerCase().replace(' ', '-')}`}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-3xl font-serif text-[#2B221E] hover:text-[#B3704D] transition-colors"
                            >
                                {link}
                            </a>
                        ))}
                    </nav>
                    <button className="px-8 py-4 bg-[#B3704D] text-[#FAF8F5] rounded-[2rem] text-sm tracking-widest uppercase transition-all duration-300 hover:bg-[#2B221E]">
                        Book Appointment
                    </button>
                </div>
            </header>

            {/* Mobile Sticky Bottom CTA */}
            <div
                className={`fixed bottom-0 left-0 w-full z-40 md:hidden transition-transform duration-500 ease-in-out ${isScrolled && !isMenuOpen ? 'translate-y-0' : 'translate-y-full'
                    }`}
            >
                <div className="bg-[#B3704D] shadow-[0_-4px_20px_rgba(0,0,0,0.1)] pb-[env(safe-area-inset-bottom)]">
                    <button className="w-full h-16 flex items-center justify-center text-[#FAF8F5] text-sm tracking-widest uppercase font-medium hover:bg-[#2B221E] transition-colors">
                        Book Appointment
                    </button>
                </div>
            </div>
        </>
    );
}
