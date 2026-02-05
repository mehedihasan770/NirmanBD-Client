import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

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
          <div className="w-full max-w-11/12 md:max-w-10/12 mx-auto flex justify-between">
            <div className="flex-3">
              <motion.h1 
                initial={{y: 90, opacity: 0,rotateX: -15 }}
                whileInView={{ y: 0, opacity: 1,rotateX: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{duration: 1.4,type: "spring",bounce: 0.4,damping: 12,mass: 1}} 
                className="text-7xl md:text-8xl font-bold text-white tracking-tight leading-tight">
                CRAFTING TOMORROW'S <br />
                <span className="bg-linear-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  LEGACY
                </span>
              </motion.h1>

              <motion.div 
                initial={{y: 90, opacity: 0,rotateX: -15 }}
                whileInView={{ y: 0, opacity: 1,rotateX: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{duration: 1.4,type: "spring",bounce: 0.4,damping: 12,mass: 1, delay: 0.2}}
                className="my-8 relative">
                <div className="h-1 w-30 bg-linear-to-r from-amber-500 to-amber-300 rounded-full"></div>
                <div className="h-1 w-20 bg-amber-400 rounded-full mt-2"></div>
              </motion.div>

              <motion.p 
                initial={{y: 90, opacity: 0,rotateX: -15 }}
                whileInView={{ y: 0, opacity: 1,rotateX: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{duration: 1.4,type: "spring",bounce: 0.4,damping: 12,mass: 1, delay: 0.3}}
                className="text-2xl md:text-2xl text-white/70 leading-relaxed text-justify max-w-4xl">
                At NirmanBD, we merge timeless engineering with cutting-edge
                innovation. Our dedication to quality and sustainable practices
                ensures every structure we build is a testament to durability,
                integrity, and future-ready design.
              </motion.p>

              <motion.div
                initial={{y: 90, opacity: 0,rotateX: -15 }}
                whileInView={{ y: 0, opacity: 1,rotateX: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{duration: 1.4,type: "spring",bounce: 0.4,damping: 12,mass: 1, delay: 0.4}}
                className="mt-10 flex items-center gap-4">
                <button className="px-8 py-3 bg-linear-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-amber-500/25">
                  Explore Projects
                </button>
                <button className="px-8 py-3 border-2 border-amber-500 text-amber-400 font-semibold rounded-lg hover:bg-amber-500/10 transition-all duration-300">
                  Contact Us
                </button>
              </motion.div>
            </div>
            <div className="flex-1"></div>
          </div>
        </section>
      </div>
    );
};

export default HeroDetailsSection;