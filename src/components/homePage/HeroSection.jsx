import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
    return (
        <section className="h-screen mx-auto snap-start relative flex items-center justify-center">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/HeroBackgroundImage.png"
            alt="Background Pillar"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="w-full max-w-11/12 md:max-w-10/12 mx-auto text-white flex justify-between">
          <div>
            <h1 className="md:text-[110px] lg:text-[150px] xl:text-[200px] 2xl:text-[250px] font-bold">
              FORT
            </h1>
            <p className="lg:text-[23px] xl:text-[30.5px] 2xl:text-[38px] font-bold text-white/75 md:-mt-10 md:ml-2 lg:-mt-12 lg:ml-2 xl:-mt-17 xl:ml-4 2xl:-mt-20 2xl:ml-5">
              OTOL VORSA SOTHIK NIRMAN
            </p>
          </div>
          <div>
            <h1 className="md:text-[110px] lg:text-[150px] xl:text-[200px] 2xl:text-[250px] font-bold">
              TUDE
            </h1>
            <p className="text-right lg:text-[23px] xl:text-[30.5px] 2xl:text-[38px] font-bold text-white/75 md:-mt-10 lg:-mt-12 lg:mr-1 xl:-mt-17 xl:mr-1.5 2xl:-mt-20 2xl:mr-2">
              DERO VITTI UNNOTO KATHAMO
            </p>
          </div>
        </div>
        <div className="bg-white/50 hover:bg-amber-50 animate-bounce hover:text-amber-500 duration-500 text-black/75 cursor-pointer rounded-3xl absolute bottom-5">
          <button className="py-3 pl-3 cursor-pointer font-bold">EXPLORE PRODUCTS</button>
          <svg
            className="w-6 h-6 mr-3 cursor-pointer inline-block -rotate-45 ml-2"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>
    );
};

export default HeroSection;