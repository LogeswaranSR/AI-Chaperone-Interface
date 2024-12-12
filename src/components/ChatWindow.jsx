import React from 'react';
import ChatMessage from './ChatMessage';

const ChatWindow = ({ messages }) => {
  return (
    <div className="h-[500px] overflow-y-auto mb-4 p-4 border border-gray-700 
                    rounded-lg bg-gray-800">
      {messages.map((message, index) => (
        <ChatMessage
          key={index}
          message={message}
          isBot={message.isBot}
        />
      ))}
    </div>
  );
};

export default ChatWindow;