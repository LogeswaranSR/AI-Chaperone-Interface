import { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import ChatInput from './components/ChatInput';
import ChatHeader from './components/ChatHeader';
import VoiceInterface from './components/VoiceInterface';
import InterfaceToggle from './components/InterfaceToggle';
import { getRandomResponse, getInitialMessage } from './utils/botResponses';
import { addNewMessage } from './utils/messageHandlers';
import './App.css';

function App() {
  const [messages, setMessages] = useState([
    { text: getInitialMessage(), isBot: true }
  ]);
  const [isVoiceMode, setIsVoiceMode] = useState(false);

  const handleSendMessage = (message) => {
    if (!message.trim()) return;

    setMessages(prev => addNewMessage(prev, message, false));

    setTimeout(() => {
      const botResponse = getRandomResponse();
      setMessages(prev => addNewMessage(prev, botResponse, true));
    }, 1000);
  };

  const toggleInterface = () => {
    setIsVoiceMode(!isVoiceMode);
  };

  return (
    <div className="min-h-screen bg-gray-900 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-gray-800 rounded-lg shadow-xl p-6">
          <ChatHeader />
          <InterfaceToggle isVoiceMode={isVoiceMode} onToggle={toggleInterface} />
          <ChatWindow messages={messages} />
          {isVoiceMode ? (
            <VoiceInterface onSendMessage={handleSendMessage} />
          ) : (
            <ChatInput onSendMessage={handleSendMessage} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;