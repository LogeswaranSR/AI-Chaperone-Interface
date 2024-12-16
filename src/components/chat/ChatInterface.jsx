import React, { useState } from 'react';
import ChatWindow from './ChatWindow';
import ChatInput from './ChatInput';
import { getRandomResponse, getInitialMessage } from '../../utils/botResponses';
import { addNewMessage } from '../../utils/messageHandlers';

const ChatInterface = () => {
  const [messages, setMessages] = useState([
    { text: getInitialMessage(), isBot: true }
  ]);

  const handleSendMessage = (message) => {
    if (!message.trim()) return;

    setMessages(prev => addNewMessage(prev, message, false));

    setTimeout(() => {
      const botResponse = getRandomResponse();
      setMessages(prev => addNewMessage(prev, botResponse, true));
    }, 1000);
  };

  return (
    <>
      <ChatWindow messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} />
    </>
  );
};

export default ChatInterface;