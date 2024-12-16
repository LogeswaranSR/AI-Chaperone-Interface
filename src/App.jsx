import { useState } from 'react';
import ChatInterface from './components/chat/ChatInterface';
import VoiceAssistant from './components/voice/VoiceAssistant';
import InterfaceToggle from './components/common/InterfaceToggle';
import Header from './components/common/Header';
import RegistrationForm from './components/registration/RegistrationForm';
import { UserProvider, useUser } from './context/UserContext';
import './App.css';

const MainContent = () => {
  const [isVoiceMode, setIsVoiceMode] = useState(false);
  const { userInfo } = useUser();

  const toggleInterface = () => {
    setIsVoiceMode(!isVoiceMode);
  };

  if (!userInfo) {
    return (
      <div className="min-h-screen bg-gray-900 p-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-800 rounded-lg shadow-xl p-6">
            <Header title="Welcome to AI Chaperone" />
            <RegistrationForm />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-gray-800 rounded-lg shadow-xl p-6">
          <Header title={`Welcome, ${userInfo.name}`} />
          <InterfaceToggle isVoiceMode={isVoiceMode} onToggle={toggleInterface} />
          {isVoiceMode ? (
            <VoiceAssistant />
          ) : (
            <ChatInterface />
          )}
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <UserProvider>
      <MainContent />
    </UserProvider>
  );
}

export default App;