import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TranscriptDisplay = ({ isListening, transcript, response }) => {
  return (
    <AnimatePresence mode="wait">
      {isListening && transcript && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="text-center mt-8 text-gray-300"
        >
          <p className="text-lg mb-2">I heard:</p>
          <p className="text-xl font-medium">{transcript}</p>
        </motion.div>
      )}
      
      {!isListening && response && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="text-center mt-8 text-blue-400"
        >
          <p className="text-lg mb-2">Response:</p>
          <p className="text-xl font-medium">{response}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TranscriptDisplay;