'use client';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const Navigation = () => {
  const navItems = ['Home', 'Projects & Research', 'About Me', 'Contact'];
  
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left - Home */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.05 }}
          className="text-sm font-sans uppercase tracking-wide text-white font-medium"
        >
          Home
        </motion.a>

        {/* Center Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.slice(1).map((item, index) => (
            <div key={item} className="flex items-center">
              <motion.a
                href={`#${item.toLowerCase().replace(' & ', '-').replace(' ', '-')}`}
                whileHover={{ scale: 1.05 }}
                className="text-sm font-sans uppercase tracking-wide text-gray-400 hover:text-white transition-colors"
              >
                {item}
              </motion.a>
              {index < navItems.slice(1).length - 2 && (
                <span className="mx-4 text-gray-600">|</span>
              )}
            </div>
          ))}
        </div>

        {/* Right - Resume Button */}
        <motion.a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-2 px-4 py-2 border border-gray-600 rounded-lg text-sm font-sans uppercase tracking-wide text-white hover:border-white transition-colors"
        >
          <FileText size={16} />
          <span>Resume</span>
        </motion.a>
      </div>
    </motion.nav>
  );
};

export default Navigation;
