export const addNewMessage = (messages, text, isBot) => {
  const timestamp = new Date().toISOString();
  return [...messages, { text, isBot, timestamp }];
};

export const formatTimestamp = (timestamp) => {
  return new Date(timestamp).toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit' 
  });
};