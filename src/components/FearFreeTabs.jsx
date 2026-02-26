import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XCircle, CheckCircle, Heart, Info } from 'lucide-react';

export default function FearFreeTabs() {
    const [activeTab, setActiveTab] = useState('pawsitive');

    return (
        <section className="bg-[#FAF8F5] py-24 px-6 md:px-12 w-full flex justify-center">
            <div className="max-w-5xl w-full">
                <h2 className="font-serif italic text-4xl md:text-5xl text-[#2B221E] text-center mb-16">
                    Experience the Fear Free Difference.
                </h2>

                {/* Tab Buttons */}
                <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
                    <button
                        onClick={() => setActiveTab('traditional')}
                        className={`px-8 py-4 rounded-[2rem] font-sans text-sm tracking-widest uppercase transition-all duration-300 ${activeTab === 'traditional'
                                ? 'bg-white text-[#2B221E] shadow-xl shadow-[#2B221E]/5 border border-[#D4C4B7]'
                                : 'bg-transparent text-[#2B221E]/60 hover:bg-white/50'
                            }`}
                    >
                        Traditional Vet Visit
                    </button>

                    <button
                        onClick={() => setActiveTab('pawsitive')}
                        className={`px-8 py-4 rounded-[2rem] font-sans text-sm tracking-widest uppercase transition-all duration-300 ${activeTab === 'pawsitive'
                                ? 'bg-[#F9F8F6] text-[#B3704D] shadow-xl shadow-[#A3B899]/10 border border-[#A3B899]/40'
                                : 'bg-transparent text-[#2B221E]/60 hover:bg-[#F9F8F6]/50'
                            }`}
                    >
                        The Pawsitive Way
                    </button>
                </div>

                {/* Tab Content Area */}
                <div className="min-h-[300px] relative">
                    <AnimatePresence mode="wait">

                        {activeTab === 'traditional' && (
                            <motion.div
                                key="traditional"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="bg-white p-10 md:p-12 rounded-[2rem] border border-[#D4C4B7]/40 shadow-lg shadow-[#2B221E]/5"
                            >
                                <h3 className="font-serif text-2xl mb-8 text-[#2B221E]/80 border-b border-[#D4C4B7]/30 pb-4">
                                    The standard clinical approach:
                                </h3>
                                <ul className="space-y-6">
                                    {[
                                        "Cold, slippery stainless steel tables",
                                        "Rushed 10-minute appointments",
                                        "Crowded waiting rooms with mixed species",
                                        "Handling that forces compliance"
                                    ].map((point, i) => (
                                        <li key={i} className="flex items-start gap-4">
                                            <XCircle className="w-6 h-6 text-[#2B221E]/30 shrink-0 mt-0.5" />
                                            <span className="font-sans text-[#2B221E]/80 text-lg font-light leading-relaxed">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}

                        {activeTab === 'pawsitive' && (
                            <motion.div
                                key="pawsitive"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="bg-[#F9F8F6] p-10 md:p-12 rounded-[2rem] border border-[#A3B899]/40 shadow-xl shadow-[#A3B899]/5"
                            >
                                <h3 className="font-serif text-2xl mb-8 text-[#B3704D] border-b border-[#A3B899]/30 pb-4">
                                    Our certified fear-free protocol:
                                </h3>
                                <ul className="space-y-6">
                                    {[
                                        "Heated, non-slip examination mats",
                                        "Slow-paced 30-minute consults to let them settle",
                                        "Calming pheromone diffusers in every room",
                                        "Treat-heavy, gentle handling and positive reinforcement"
                                    ].map((point, i) => (
                                        <li key={i} className="flex items-start gap-4">
                                            <Heart className="w-6 h-6 text-[#A3B899] shrink-0 fill-[#A3B899]/20 mt-0.5" />
                                            <span className="font-sans text-[#2B221E] text-lg font-light leading-relaxed">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}

                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
