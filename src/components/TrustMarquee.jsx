import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, MapPin, HeartHandshake } from 'lucide-react';

const reviews = [
    {
        quote: "She didn't even notice her vaccination!",
        text: "My incredibly anxious rescue mix usually shakes the entire car ride to the vet. At Pawsitive, she was so busy eating treats off the heated mat that the exam was over before she knew it started.",
        author: "Emma & Luna",
        pet: "Anxious Rescue Mix"
    },
    {
        quote: "A completely different experience.",
        text: "No cold tables, no rushing. The vet sat on the floor with us for 20 minutes before even taking out a stethoscope. It’s exactly the kind of care he deserves.",
        author: "David & Barnaby",
        pet: "Senior Golden Retriever"
    },
    {
        quote: "They truly understand feline stress.",
        text: "The dedicated cat-only consult room with pheromone diffusers made all the difference. Muffin didn't hiss once, which is an absolute first in her 7 years.",
        author: "Sarah & Muffin",
        pet: "Nervous Shorthair"
    },
    {
        quote: "Worth every penny.",
        text: "You can tell the staff are genuinely trained in fear-free methods. They read his body language perfectly and knew exactly when to slow down.",
        author: "James & Buster",
        pet: "Reactive Terrier"
    },
    {
        quote: "The only vet we'll ever use now.",
        text: "The complimentary meet and greet sold us. By the time of his actual appointment, he was pulling on the lead to get inside. Incredible.",
        author: "Chloe & Winston",
        pet: "Over-excitable Frenchie"
    }
];

// Duplicate the array to create a seamless infinite loop
const marqueeItems = [...reviews, ...reviews];

export default function TrustMarquee() {
    return (
        <section className="bg-cashmere/30 py-24 overflow-hidden border-y border-[#D4C4B7]/20">

            {/* Trust Bar */}
            <div className="max-w-6xl mx-auto px-6 mb-20">
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
                    <div className="flex items-center gap-3">
                        <Star className="w-6 h-6 fill-[#B3704D] text-[#B3704D]" />
                        <span className="font-sans text-sm tracking-widest uppercase text-[#2B221E]/80">5.0 Google Rating</span>
                    </div>
                    <div className="hidden md:block w-px h-8 bg-[#D4C4B7]/50"></div>
                    <div className="flex items-center gap-3">
                        <ShieldCheck className="w-6 h-6 text-[#A3B899]" />
                        <span className="font-sans text-sm tracking-widest uppercase text-[#2B221E]/80">Certified Fear Free®</span>
                    </div>
                    <div className="hidden md:block w-px h-8 bg-[#D4C4B7]/50"></div>
                    <div className="flex items-center gap-3">
                        <MapPin className="w-6 h-6 text-[#2B221E]/50" />
                        <span className="font-sans text-sm tracking-widest uppercase text-[#2B221E]/80">Independent Hartlebury Clinic</span>
                    </div>
                </div>
            </div>

            {/* Infinite Scrolling Marquee */}
            <div className="relative w-full overflow-hidden flex items-center group">
                {/* Left/Right Fade Overlays */}
                <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#F5F2EF] to-transparent z-10 pointer-events-none hidden md:block"></div>
                <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#F5F2EF] to-transparent z-10 pointer-events-none hidden md:block"></div>

                <motion.div
                    className="flex gap-8 px-4"
                    animate={{ x: [0, -2000] }} // Arbitrary large negative value to scroll through the duplicated array
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 40,
                            ease: "linear",
                        },
                    }}
                    whileHover={{ animationPlayState: 'paused' }} // CSS equivalent via Framer: pauses the transition
                    style={{ width: "fit-content" }}
                >
                    {marqueeItems.map((review, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-[2rem] p-8 md:p-10 w-[350px] md:w-[450px] shrink-0 shadow-lg shadow-[#2B221E]/5 border border-[#D4C4B7]/30 hover:shadow-xl hover:border-[#D4C4B7] transition-all duration-300"
                        >
                            {/* Stars */}
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-[#B3704D] text-[#B3704D]" />
                                ))}
                            </div>

                            <h3 className="font-serif italic text-2xl text-[#B3704D] mb-4">
                                "{review.quote}"
                            </h3>

                            <p className="font-sans text-sm text-[#2B221E]/70 font-light leading-relaxed mb-8">
                                {review.text}
                            </p>

                            <div className="flex items-center gap-4 mt-auto pt-6 border-t border-[#D4C4B7]/30">
                                <div className="w-10 h-10 rounded-full bg-[#A3B899]/20 flex items-center justify-center">
                                    <HeartHandshake className="w-5 h-5 text-[#A3B899]" />
                                </div>
                                <div>
                                    <p className="font-sans font-bold text-sm text-[#2B221E]">{review.author}</p>
                                    <p className="font-sans text-xs text-[#2B221E]/60 uppercase tracking-wider mt-1">{review.pet}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

        </section>
    );
}
