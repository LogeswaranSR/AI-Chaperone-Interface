import React from 'react';
import { motion } from 'framer-motion';

const InterfaceToggle = ({ isVoiceMode, onToggle }) => {
  return (
    <div className="flex items-center justify-center mb-4">
      <span className={`mr-2 ${!isVoiceMode ? 'text-blue-500' : 'text-gray-400'}`}>Text</span>
      <motion.button
        className="w-14 h-7 bg-gray-700 rounded-full p-1 flex items-center cursor-pointer"
        onClick={onToggle}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className="w-5 h-5 bg-white rounded-full"
          animate={{
            x: isVoiceMode ? 28 : 0
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </motion.button>
      <span className={`ml-2 ${isVoiceMode ? 'text-blue-500' : 'text-gray-400'}`}>Voice</span>
    </div>
  );
};

export default InterfaceToggle;