import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function LeadCapture() {
    const container = useRef(null);

    useGSAP(() => {
        gsap.from('.form-element', {
            scrollTrigger: {
                trigger: container.current,
                start: 'top 80%',
            },
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: 'power2.out',
        });
    }, { scope: container });

    return (
        <section ref={container} className="bg-[#A3B899]/10 pt-32 pb-40 px-6 md:px-12 w-full border-t border-[#A3B899]/20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                {/* Left Column: Text */}
                <div className="form-element max-w-xl">
                    <h2 className="font-serif italic text-4xl md:text-5xl lg:text-6xl text-[#2B221E] mb-6 leading-tight">
                        Let them sniff us out first.
                    </h2>
                    <p className="font-sans text-lg text-[#2B221E]/80 leading-relaxed font-light">
                        We know that for anxious pets, walking through the doors of a new clinic is the hardest part.
                        That’s why we offer a complimentary "Meet & Greet" at our new Hartlebury practice.
                        No exams, no white coats, no needles—just treats, calming pheromones, and a chance for
                        your pet to build positive associations with our space.
                    </p>
                </div>

                {/* Right Column: The Form */}
                <div className="form-element bg-[#FAF8F5] p-8 md:p-12 rounded-[2rem] shadow-2xl shadow-[#A3B899]/10 border border-[#A3B899]/30">
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-[#2B221E]/70 ml-2">Your Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-transparent border-b border-[#D4C4B7] py-3 px-2 text-[#2B221E] font-sans text-sm focus:outline-none focus:border-[#B3704D] transition-colors"
                                    placeholder="Jane Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-[#2B221E]/70 ml-2">Your Pet's Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-transparent border-b border-[#D4C4B7] py-3 px-2 text-[#2B221E] font-sans text-sm focus:outline-none focus:border-[#B3704D] transition-colors"
                                    placeholder="Barnaby"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-[#2B221E]/70 ml-2">Email Address</label>
                                <input
                                    type="email"
                                    className="w-full bg-transparent border-b border-[#D4C4B7] py-3 px-2 text-[#2B221E] font-sans text-sm focus:outline-none focus:border-[#B3704D] transition-colors"
                                    placeholder="jane@example.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-[#2B221E]/70 ml-2">Phone Number</label>
                                <input
                                    type="tel"
                                    className="w-full bg-transparent border-b border-[#D4C4B7] py-3 px-2 text-[#2B221E] font-sans text-sm focus:outline-none focus:border-[#B3704D] transition-colors"
                                    placeholder="07700 900000"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2 flex flex-col">
                                <label className="text-xs uppercase tracking-widest text-[#2B221E]/70 ml-2">Species</label>
                                <select className="w-full bg-transparent border-b border-[#D4C4B7] py-3 px-2 text-[#2B221E] font-sans text-sm appearance-none focus:outline-none focus:border-[#B3704D] transition-colors cursor-pointer">
                                    <option value="" disabled selected>Select species</option>
                                    <option value="dog">Dog</option>
                                    <option value="cat">Cat</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="space-y-2 flex flex-col">
                                <label className="text-xs uppercase tracking-widest text-[#2B221E]/70 ml-2">Anxiety Level</label>
                                <select className="w-full bg-transparent border-b border-[#D4C4B7] py-3 px-2 text-[#2B221E] font-sans text-sm appearance-none focus:outline-none focus:border-[#B3704D] transition-colors cursor-pointer">
                                    <option value="" disabled selected>Is your pet usually anxious?</option>
                                    <option value="high">Yes, very</option>
                                    <option value="medium">A little nervous</option>
                                    <option value="low">Not at all</option>
                                </select>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full mt-8 bg-[#2B221E] text-[#FAF8F5] py-5 rounded-[2rem] font-sans tracking-widest uppercase text-sm hover:bg-[#B3704D] hover:scale-[1.01] transition-all duration-300 shadow-xl shadow-[#2B221E]/10"
                        >
                            Claim Your Free Meet & Greet
                        </button>

                    </form>
                </div>

            </div>
        </section>
    );
}
