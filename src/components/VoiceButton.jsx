import React from 'react';
import { motion } from 'framer-motion';

export const VoiceButton = ({ isListening, onStart, onStop }) => {
  return (
    <motion.div
      className="relative w-20 h-20 mb-4"
      animate={{
        scale: isListening ? [1, 1.2, 1] : 1
      }}
      transition={{
        duration: 1.5,
        repeat: isListening ? Infinity : 0,
        ease: "easeInOut"
      }}
    >
      <motion.div
        className={`absolute inset-0 rounded-full ${
          isListening ? 'bg-red-500' : 'bg-blue-600'
        }`}
        animate={{
          boxShadow: isListening
            ? ['0 0 0 0px rgba(239, 68, 68, 0.2)', '0 0 0 20px rgba(239, 68, 68, 0)']
            : '0 0 0 0px rgba(37, 99, 235, 0)'
        }}
        transition={{
          duration: 1.5,
          repeat: isListening ? Infinity : 0,
          ease: "easeInOut"
        }}
      />
      <button
        className="absolute inset-0 flex items-center justify-center text-white"
        onClick={isListening ? onStop : onStart}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
          />
        </svg>
      </button>
    </motion.div>
  );
};