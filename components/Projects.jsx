'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: "SentimentX",
      subtitle: "AI-Powered Market Sentiment Analyzer",
      description: "Collects and analyzes real-time news articles, tweets, Reddit posts, and YouTube video descriptions related to crypto and forex. Then it uses AI to determine the market sentiment — bullish, bearish, or neutral — for a specific asset or overall market."
    },
    {
      title: "TradeRL",
      subtitle: "Smart AI Trading Bot with Reinforcement Learning",
      description: "Uses Reinforcement Learning to automatically learn how to buy/sell/hold crypto or forex assets based on market data — just like a human trader, but smarter and faster."
    },
    {
      title: "CorrMatrix",
      subtitle: "Interactive Multi-Asset Correlation Heatmap",
      description: "Collects historical price data of multiple assets. Calculates the Pearson correlation coefficient between each pairs. Displays it as a color-coded heatmap (red = strong negative, green = strong positive)."
    }
  ];

  return (
    <section id="projects-research" ref={ref} className="min-h-screen py-20 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            className="mb-16 last:mb-0"
          >
            {/* Project Title */}
            <h2 className="text-3xl md:text-4xl font-sans font-semibold text-white mb-2">
              {project.title}
            </h2>
            
            {/* Subtitle with Monospace Font */}
            <p className="text-lg font-mono text-gray-400 mb-4">
              • {project.subtitle}
            </p>
            
            {/* Description */}
            <p className="text-gray-400 max-w-2xl leading-relaxed">
              {project.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
