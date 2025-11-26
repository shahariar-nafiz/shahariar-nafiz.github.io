'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Linkedin } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" ref={ref} className="min-h-screen py-20 px-6 max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-sans font-semibold text-white mb-12 text-center">
          Contact Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Name Input */}
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full bg-transparent border-b border-gray-600 py-3 px-2 text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address"
              className="w-full bg-transparent border-b border-gray-600 py-3 px-2 text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors"
              required
            />
          </div>

          {/* Message Textarea */}
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell something..."
              rows={6}
              className="w-full bg-transparent border-b border-gray-600 py-3 px-2 text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors resize-none"
              required
            />
          </div>

          {/* Send Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 text-white font-sans uppercase tracking-wide hover:text-gray-300 transition-colors"
          >
            <span>Send</span>
            <Send size={16} />
          </motion.button>
        </form>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 pt-8 border-t border-gray-800"
        >
          {/* Social Icon */}
          <div className="flex items-center space-x-4 mb-4">
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </motion.a>
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-gray-600 mb-4">
            Your name won't be shared. Never submit passwords.
          </p>

          {/* Signature */}
          <p className="text-right text-sm text-gray-400 font-sans">
            Muhd. Shahariar Nafiz Irfan
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
