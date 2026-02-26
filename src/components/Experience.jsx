import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const panels = [
    {
        title: "The Introduction",
        desc: "A calm, gentle greeting in our sensory-safe reception, allowing your companion to acclimate at their own steady pace.",
        img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2669&auto=format&fit=crop"
    },
    {
        title: "The Examination",
        desc: "Comprehensive care delivered with absolute patience, utilizing fear-free techniques to ensure enduring comfort.",
        img: "https://images.unsplash.com/photo-1628009368231-7bb7cb080d00?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "The Departure",
        desc: "Leaving feeling entirely relaxed and reassured, with a personalized wellness plan for the years ahead.",
        img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2688&auto=format&fit=crop"
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
            }

            // As the NEXT card comes in, the CURRENT card scales down and blurs.
            // We don't do this for the very last card.
            if (i < cards.length - 1) {
                tl.to(card, {
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
