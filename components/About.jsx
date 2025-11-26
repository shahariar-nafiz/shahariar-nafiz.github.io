'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about-me" ref={ref} className="min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Large Background Title */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        className="absolute top-20 left-0 right-0 text-center text-8xl md:text-9xl font-black uppercase text-gray-900 tracking-tighter z-0 pointer-events-none"
      >
        ABOUT ME
      </motion.h1>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Images */}
          <div className="relative h-96 lg:h-[500px]">
            {/* Silver Surfer Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="absolute left-0 bottom-0 w-64 h-64 bg-gradient-to-br from-gray-300 to-gray-500 rounded-lg filter grayscale contrast-125"
              style={{
                backgroundImage: 'url(/images/photo1.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            
            {/* Abstract Chrome Blob */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute top-10 right-10 w-48 h-48 bg-gradient-to-tr from-gray-400 to-gray-600 rounded-full filter grayscale contrast-125 blur-sm opacity-60"
              style={{
                backgroundImage: 'url(/images/photo2.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            
            {/* Wireframe Eyes */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="absolute bottom-20 right-0 w-32 h-16 border-2 border-gray-400 rounded-full filter grayscale"
              style={{
                backgroundImage: 'url(/images/photo3.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </div>

          {/* Right Column - Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="bg-black p-8 rounded-lg"
          >
            <p className="text-white text-lg leading-relaxed">
              Myself, Md. Shahariar Nafiz Irfan is a 19-year-old quantitative strategist and entrepreneur with a proven track record of generating alpha in emerging markets. Starting with self-taught coding during Dhaka's power outages, I developed a proprietary AI trading bot, which has maintained a verified, non-losing live MT5 account for three years. My experience includes successfully scaling a fashion startup's finances threefold and consistently achieving top ranks in global trading championships. My vision is to build Bangladeshi's first AI-native hedge fund and private equity engine, setting the stage for his long-term goal of becoming a multi-billion dollar serial entrepreneur focused on high-impact technology firms.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
