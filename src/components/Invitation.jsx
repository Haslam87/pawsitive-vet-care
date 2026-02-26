import React from 'react';

export default function Invitation() {
    return (
        <section className="bg-alabaster py-40 px-6 md:px-12 flex justify-center w-full">
            <div className="max-w-4xl w-full bg-cashmere/10 border border-[#D4C4B7]/40 rounded-[2rem] p-16 md:p-32 text-center shadow-2xl shadow-[#2B221E]/5">
                <h2 className="font-serif italic text-4xl md:text-6xl text-[#2B221E] mb-6">
                    Begin your journey with us.
                </h2>
                <p className="font-sans text-[#2B221E]/70 max-w-xl mx-auto mb-12">
                    Experience veterinary care redefined. A truly stress-free, luxurious environment for your companions.
                </p>
                <button className="bg-[#B3704D] text-[#FAF8F5] px-10 py-4 rounded-[2rem] text-sm tracking-widest uppercase hover:scale-[1.02] hover:bg-[#2B221E] transition-all duration-500 ease-out shadow-lg shadow-[#B3704D]/20">
                    Book a Free 'Meet & Greet'
                </button>
            </div>
        </section>
    );
}
