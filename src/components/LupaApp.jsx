import React from 'react';
import { Check } from 'lucide-react';
import lupaAppImage from '../assets/Lupa-app.jpg';

export default function LupaApp() {
    const benefits = [
        "Book and manage appointments",
        "Message our team (non-urgent)",
        "Reminders for vaccines and parasite control",
        "Keep everything in one place"
    ];

    return (
        <section className="bg-alabaster pt-24 md:pt-32 pb-24 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white rounded-[2rem] p-8 md:p-16 pb-12 shadow-sm border border-cashmere/30 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                    {/* Left Copy Column */}
                    <div className="flex-1 space-y-8">
                        <div>
                            <h2 className="font-serif italic text-4xl md:text-5xl lg:text-6xl text-espresso mb-4">
                                Booking, without the stress.
                            </h2>
                            <p className="font-sans text-lg text-espresso/80 leading-relaxed max-w-xl">
                                Use the Lupa app to book appointments, message our team and stay on top of reminders — especially helpful for anxious pets.
                            </p>
                        </div>

                        <ul className="space-y-4">
                            {benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-start gap-4">
                                    <div className="mt-1 bg-amber/10 rounded-full p-1 text-amber shrink-0">
                                        <Check size={16} strokeWidth={3} />
                                    </div>
                                    <span className="font-sans text-espresso/90 text-lg leading-tight pt-[2px]">{benefit}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="pt-4 space-y-5">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="#" className="inline-flex justify-center items-center px-8 py-4 rounded-[2rem] bg-amber text-alabaster font-sans text-sm tracking-widest uppercase transition-colors hover:bg-espresso w-full sm:w-auto text-center font-medium">
                                    Book appointment
                                </a>
                                <a href="#" className="inline-flex justify-center items-center px-8 py-4 rounded-[2rem] border border-cashmere text-espresso font-sans text-sm tracking-widest uppercase transition-colors hover:bg-cashmere/20 w-full sm:w-auto text-center font-medium">
                                    Get the app
                                </a>
                            </div>
                            <p className="text-sm text-espresso/60 font-sans pl-1">
                                Prefer the phone? Call us on <a href="tel:01299333335" className="underline hover:text-amber transition-colors">01299 333 335</a>.
                            </p>
                        </div>
                    </div>

                    {/* Right Image Column */}
                    <div className="flex-1 w-full flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-[280px] md:max-w-[340px] lg:max-w-[380px]">
                            <img
                                src={lupaAppImage}
                                alt="Lupa app on a phone"
                                className="w-full h-auto rounded-[2.5rem] shadow-xl border-4 border-white/50 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
