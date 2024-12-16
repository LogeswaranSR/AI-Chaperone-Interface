import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useUser } from '../../context/UserContext';

const RegistrationForm = () => {
  const { setUserInfo } = useUser();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    guardian: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.age) newErrors.age = 'Age is required';
    if (formData.age < 13) newErrors.age = 'Must be 13 or older';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.guardian.trim()) newErrors.guardian = 'Guardian name is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      setUserInfo({
        ...formData,
        age: parseInt(formData.age, 10)
      });
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const inputClasses = "mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white py-3 px-4 h-12 focus:border-blue-500 focus:ring-blue-500 transition-colors duration-200";
  const labelClasses = "block text-sm font-medium text-gray-300 mb-1";
  const errorClasses = "mt-1 text-sm text-red-500";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-md mx-auto"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className={labelClasses}>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={inputClasses}
          />
          {errors.name && <p className={errorClasses}>{errors.name}</p>}
        </div>

        <div>
          <label className={labelClasses}>Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className={inputClasses}
          />
          {errors.age && <p className={errorClasses}>{errors.age}</p>}
        </div>

        <div>
          <label className={labelClasses}>Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className={inputClasses}
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <p className={errorClasses}>{errors.gender}</p>}
        </div>

        <div>
          <label className={labelClasses}>Guardian's Name</label>
          <input
            type="text"
            name="guardian"
            value={formData.guardian}
            onChange={handleChange}
            className={inputClasses}
          />
          {errors.guardian && <p className={errorClasses}>{errors.guardian}</p>}
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md 
                   transition-colors duration-200 h-12 font-medium"
        >
          Start Chatting
        </motion.button>
      </form>
    </motion.div>
  );
};

export default RegistrationForm;