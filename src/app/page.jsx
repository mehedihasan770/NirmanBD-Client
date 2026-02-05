"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroSection from "@/components/homePage/HeroSection";
import HeroDetailsSection from "@/components/homePage/HeroDetailsSection";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const pillarRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(pillarRef.current, {
        scrollTrigger: {
          trigger: ".section-two",
          scroller: containerRef.current,
          start: "top bottom",
          end: "top top",
          scrub: 1,
        },
        xPercent: 47, 
        rotationY: -0,
        scale: 0.8,
        ease: "none",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={containerRef}
      className="h-screen overflow-y-scroll snap-y snap-mandatory relative overflow-x-hidden"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <div className="fixed inset-0 z-20 pointer-events-none flex justify-center items-center">
        <div
          ref={pillarRef}
          className="relative w-[80%] h-full mt-25 will-change-transform"
        >
          <Image
            src="/MainPillar.png"
            alt="Pillar"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
        <HeroSection/>
        <HeroDetailsSection/>
    </main>
  );
}