import React from 'react';
import { formatTimestamp } from '../../utils/messageHandlers';

const ChatMessage = ({ message, isBot }) => {
  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4`}>
      <div className={`max-w-[70%] p-3 rounded-lg ${
        isBot ? 'bg-gray-700 text-gray-100' : 'bg-blue-600 text-white'
      }`}>
        <div className="flex flex-col">
          <p className="text-sm">{message.text}</p>
          {message.timestamp && (
            <span className={`text-[9px] text-gray-300 mt-1 ${isBot ? 'self-start' : 'self-end'}`}>
              {formatTimestamp(message.timestamp)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;