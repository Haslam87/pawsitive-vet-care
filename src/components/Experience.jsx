import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const panels = [
    {
        title: "The Introduction",
        desc: "A calm, gentle greeting in our sensory-safe reception, allowing your companion to acclimate at their own steady pace.",
        img: "https://images.unsplash.com/photo-1596272875729-ed2ff7d6d9c6?q=80&w=2670&auto=format&fit=crop" // Dog at vet looking calm
    },
    {
        title: "The Examination",
        desc: "Comprehensive care delivered with absolute patience, utilizing fear-free techniques to ensure enduring comfort.",
        img: "https://images.unsplash.com/photo-1588696113881-2c9e7eb2479e?q=80&w=2670&auto=format&fit=crop" // Vet examining dog
    },
    {
        title: "The Homeward Bound",
        desc: "Heading home completely relaxed, carrying positive experiences and a tailored wellness plan to keep them thriving.",
        img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2688&auto=format&fit=crop" // Happy dog
    }
];

export default function Experience() {
    const container = useRef(null);
    const triggerRef = useRef(null);

    useGSAP(() => {
        const cards = gsap.utils.toArray('.experience-card');

        // Set initial state
        gsap.set(cards, { position: "absolute", top: 0, left: 0, width: "100%", height: "100%" });

        // Create a timeline that pins the trigger
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: triggerRef.current,
                start: "top top",
                end: "+=300%", // 3 panels worth of scrolling
                pin: true,
                scrub: 1,
            }
        });

        cards.forEach((card, i) => {
            // First card stays visible at the start.
            if (i > 0) {
                // Next card comes in from the bottom
                gsap.set(card, { yPercent: 100 });
                tl.to(card, { yPercent: 0, ease: "none" });

                // As the NEXT card comes in, the PREVIOUS card scales down and blurs.
                tl.to(cards[i - 1], {
                    scale: 0.95,
                    opacity: 0.6,
                    filter: 'blur(4px)',
                    ease: "none"
                }, "<"); // animate concurrently with the next card coming in
            }
        });

    }, { scope: container });

    return (
        <section ref={container} id="our-space" className="bg-[#2B221E]">
            <div ref={triggerRef} className="relative w-full h-[100dvh] overflow-hidden">
                {panels.map((panel, idx) => (
                    <div key={idx} className="experience-card z-[1]">
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${panel.img})` }}
                        ></div>

                        {/* Heavy Dark Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#2B221E] via-[#2B221E]/60 to-[#2B221E]/10"></div>

                        {/* Centered Content */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                            <h2 className="font-serif italic text-6xl md:text-8xl lg:text-9xl text-[#FAF8F5] mb-6">
                                {panel.title}
                            </h2>
                            <p className="font-sans text-lg md:text-xl text-[#FAF8F5]/80 max-w-2xl font-light">
                                {panel.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
