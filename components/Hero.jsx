'use client';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Visual */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="w-96 h-96 rounded-full bg-gradient-to-br from-gray-300 via-gray-400 to-gray-600 filter grayscale contrast-125 transform rotate-12"
          style={{
            backgroundImage: 'url(/images/silver-surfer.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>

      {/* Name */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute bottom-20 right-20 text-right"
      >
        <h1 className="text-2xl md:text-3xl font-sans font-light tracking-wider text-white">
          Muhd. Shahariar Nafiz Irfan
        </h1>
      </motion.div>
    </section>
  );
};

export default Hero;
