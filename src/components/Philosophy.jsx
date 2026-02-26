import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Philosophy() {
    const container = useRef(null);

    const text = "We focus on keeping your anxious companions calm, happy, and inherently safe.";
    const words = text.split(" ");

    useGSAP(() => {
        gsap.from('.word', {
            scrollTrigger: {
                trigger: container.current,
                start: 'top 80%',
            },
            opacity: 0.1,
            y: 20,
            duration: 1.5,
            stagger: 0.1,
            ease: 'power3.out',
        });
    }, { scope: container });

    return (
        <section ref={container} id="the-ethos" className="py-40 bg-cashmere px-6 md:px-12 w-full flex items-center justify-center">
            <div className="max-w-5xl mx-auto text-center">
                <p className="font-sans text-lg tracking-widest uppercase text-[#2B221E]/60 mb-12">
                    Most clinics focus on routine.
                </p>

                <h2 className="font-serif italic text-4xl md:text-6xl lg:text-8xl text-[#2B221E] leading-tight flex flex-wrap justify-center gap-x-4 gap-y-2">
                    {words.map((word, i) => (
                        <span key={i} className="word inline-block">
                            {word}
                        </span>
                    ))}
                </h2>
            </div>
        </section>
    );
}
