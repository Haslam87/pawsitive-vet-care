import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import heroImage from '../assets/pawsitive-hero.png';

gsap.registerPlugin(useGSAP);

export default function Hero() {
    const container = useRef(null);

    useGSAP(() => {
        gsap.from('.hero-text', {
            y: 40,
            opacity: 0,
            duration: 1.5,
            stagger: 0.2,
            ease: 'power2.out',
            delay: 0.2
        });
    }, { scope: container });

    return (
        <section ref={container} className="relative w-full h-[100dvh] flex items-center justify-center overflow-hidden">
            {/* Background Image - Warm, inviting salon/vet space */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat origin-center"
                style={{ backgroundImage: `url(${heroImage})` }}
            ></div>

            {/* Warm Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#2B221E]/90 via-[#2B221E]/40 to-transparent"></div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mt-32">
                <h2 className="hero-text font-heading text-lg md:text-xl tracking-[0.2em] text-[#D4C4B7] uppercase mb-4">
                    Elevate your
                </h2>
                <h1 className="hero-text font-serif italic text-6xl md:text-8xl lg:text-9xl text-[#FAF8F5] leading-none mb-8">
                    Veterinary Care
                </h1>
                <p className="hero-text font-sans text-lg md:text-xl text-[#FAF8F5]/80 max-w-2xl mx-auto font-light leading-relaxed">
                    Welcome to Hartlebury's first certified Fear Free® clinic.
                    A space designed completely around keeping your anxious companions calm, happy, and inherently safe.
                </p>
            </div>
        </section>
    );
}
