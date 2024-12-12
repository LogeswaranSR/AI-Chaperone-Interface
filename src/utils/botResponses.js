// Collection of bot responses and response generation logic
const responses = [
  "That's interesting! Tell me more.",
  "I understand. How does that make you feel?",
  "I'm here to help! What would you like to know?",
  "That's a great question! Let me think about it.",
  "I appreciate you sharing that with me."
];

export const getRandomResponse = () => {
  return responses[Math.floor(Math.random() * responses.length)];
};

export const getInitialMessage = () => {
  return "Hello! I'm your friendly chatbot. How can I help you today?";
};