import Image from 'next/image';
import React from 'react';

const HeroDetailsSection = () => {
    return (
      <div>
        <section className="section-two h-screen snap-start relative flex items-center justify-center">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/HeroBackgroundImage.png"
              alt="Background Pillar"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="w-full max-w-11/12 md:max-w-10/12 mx-auto border flex justify-between">
                <h1 className=" text-3xl opacity-20">SECTION 1 (left)</h1>
                <h1 className=" text-3xl opacity-20"></h1>
          </div>
        </section>
      </div>
    );
};

export default HeroDetailsSection;