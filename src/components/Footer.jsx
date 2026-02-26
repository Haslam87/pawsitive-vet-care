import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-espresso text-cashmere py-24 px-6 md:px-12 border-t border-[#D4C4B7]/10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 font-sans font-light text-sm">

                {/* Brand */}
                <div className="col-span-1 md:col-span-2">
                    <div className="font-serif text-3xl mb-6 text-[#FAF8F5]">
                        Pawsitive
                    </div>
                    <p className="text-[#D4C4B7]/60 max-w-sm">
                        Elevating veterinary care to an art form. A sanctuary where fear is replaced with absolute comfort and trust.
                    </p>
                </div>

                {/* Hours */}
                <div>
                    <h4 className="uppercase tracking-widest mb-6 text-[#FAF8F5] text-xs">Opening Hours</h4>
                    <ul className="space-y-3 text-[#D4C4B7]/70">
                        <li>Monday - Friday: 8am - 7pm</li>
                        <li>Saturday: 9am - 4pm</li>
                        <li>Sunday: Rested</li>
                    </ul>
                </div>

                {/* Address & Social */}
                <div>
                    <h4 className="uppercase tracking-widest mb-6 text-[#FAF8F5] text-xs">The Address</h4>
                    <address className="not-italic text-[#D4C4B7]/70 space-y-1 mb-8">
                        Unit 142 Hartlebury Trading Estate<br />
                        Hartlebury<br />
                        Kidderminster<br />
                        DY10 4JB
                    </address>

                    <a href="#" className="uppercase tracking-widest text-xs hover:text-[#FAF8F5] transition-colors duration-300">
                        Instagram
                    </a>
                </div>

            </div>

            <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-[#D4C4B7]/10 text-xs text-[#D4C4B7]/40 flex flex-col md:flex-row justify-between items-center">
                <p>&copy; {new Date().getFullYear()} Pawsitive. All rights reserved.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-[#D4C4B7]">Privacy</a>
                    <a href="#" className="hover:text-[#D4C4B7]">Terms</a>
                </div>
            </div>
        </footer>
    );
}
