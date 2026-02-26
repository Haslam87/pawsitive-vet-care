import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const services = [
    {
        title: "The Consultation",
        desc: "A slow-paced, treat-filled introduction in our dedicated comfort suites, allowing your pet to explore freely.",
        img: "https://images.unsplash.com/photo-1606425271394-c3ca9aa1fc06?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "The Procedure",
        desc: "Heated mats, calming pheromones, and gentle handling ensure a seamless, anxiety-free medical experience.",
        img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2688&auto=format&fit=crop"
    },
    {
        title: "The Aftercare",
        desc: "Recovery in quiet, dimmed enclosures specifically tailored to reduce stress and promote restful healing.",
        img: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=2670&auto=format&fit=crop"
    }
];

export default function Services() {
    const container = useRef(null);

    useGSAP(() => {
        gsap.from('.service-card', {
            scrollTrigger: {
                trigger: container.ref,
                start: 'top 75%',
            },
            y: 50,
            opacity: 0,
            duration: 1.2,
            stagger: 0.2,
            ease: 'power2.out'
        });
    }, { scope: container });

    return (
        <section ref={container} id="treatments" className="py-32 bg-alabaster px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <h2 className="font-heading tracking-widest uppercase text-sm text-[#B3704D] mb-12 text-center md:text-left">
                    Signature Care
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            className="service-card group relative aspect-[3/4] overflow-hidden rounded-[2rem] cursor-pointer shadow-2xl shadow-[#2B221E]/5 border border-[#D4C4B7]/40"
                        >
                            {/* Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] ease-out group-hover:scale-105"
                                style={{ backgroundImage: `url(${service.img})` }}
                            ></div>

                            {/* Velvet Reveal Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#2B221E] via-[#2B221E]/10 to-transparent opacity-80 transition-all duration-700 ease-in-out md:h-[120%] md:top-auto md:bottom-[-20%] group-hover:bottom-0"></div>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 flex flex-col justify-end h-full">
                                <h3 className="font-serif italic text-3xl md:text-4xl text-[#FAF8F5] mb-4 transform md:translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                                    {service.title}
                                </h3>
                                <p className="font-sans text-sm text-[#FAF8F5]/80 leading-relaxed opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 ease-out">
                                    {service.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
