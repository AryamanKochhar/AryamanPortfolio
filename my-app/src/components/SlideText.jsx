import React from 'react';
import { motion } from 'framer-motion';

function SlideText() {
  const words = ['PASSION', 'PERSEVERANCE', 'PERSISTENCE'];

  return (
    <div className="slide-container">
      <motion.div
        className="slide-text"
        animate={{ y: [0, -50, -100, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      >
        {words.map((word, index) => (
          <div key={index}>{word}</div>
        ))}
      </motion.div>
    </div>
  );
}

export default SlideText;