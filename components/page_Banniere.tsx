'use client'
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

interface PageBanniere {
    title: string;
    logo : string, 
    image: string;
    description: string;
}

export default function PageBanniere({ title, image, description, logo }: PageBanniere) {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".banniere",
                start: "top 80%",
                toggleActions: "play none none none",
            },
        });
        tl.from(".banniere", {
            opacity: 0,
            y: 100,
            duration: 0.5,
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="banniere bg-no-repeat bg-cover relative py-[150px] lg:py-[200px] h-[650px]">
            <Image src={image} alt={title} fill className="object-cover" />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-end text-white z-10 pb-12">
                <div className="w-[100px] aspect-square">
                    <img src={logo} alt={title} />
                </div>
                <h1 className="font-display italic text-[40px] lg:text-[64px] text-center">
                    {title}
                </h1>
                <p className="font-medium text-center text-base lg:text-xl max-w-[300px] lg:max-w-[700px]">
                    {description}
                </p>
            </div>
        </section>
    );
}
