import React from 'react';
import { motion } from 'framer-motion';

const Header = ({ title }) => {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="text-center mb-6"
    >
      <h1 className="text-3xl font-bold text-gray-100">
        {title}
      </h1>
      <div className="mt-2 text-blue-400 text-sm">
        Your AI Communication Assistant
      </div>
    </motion.div>
  );
};

export default Header;