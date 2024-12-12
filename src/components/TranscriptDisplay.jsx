import React from 'react';
import { motion } from 'framer-motion';

export const TranscriptDisplay = ({ isListening, transcript }) => {
  if (!isListening) return null;

  return (
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-sm text-gray-300"
    >
      {transcript || "Listening..."}
    </motion.p>
  );
};