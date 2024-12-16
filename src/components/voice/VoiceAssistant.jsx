import React, { useState, useEffect } from 'react';
import { useSpeechToText } from '../../hooks/useSpeechToText';
import VoiceButton from './VoiceButton';
import TranscriptDisplay from './TranscriptDisplay';
import { getRandomResponse } from '../../utils/botResponses';

const VoiceAssistant = () => {
  const [response, setResponse] = useState('');
  const {
    isListening,
    transcript,
    startListening,
    stopListening,
    browserSupportsSpeechRecognition
  } = useSpeechToText((message) => {
    if (message.trim()) {
      const botResponse = getRandomResponse();
      setResponse(botResponse);
      
      const speech = new SpeechSynthesisUtterance(botResponse);
      window.speechSynthesis.speak(speech);
    }
  });

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  if (!browserSupportsSpeechRecognition) {
    return (
      <div className="text-center text-red-500 mt-4">
        Your browser doesn't support speech recognition.
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-[600px]">
      <VoiceButton
        isListening={isListening}
        onStart={startListening}
        onStop={stopListening}
      />
      <TranscriptDisplay
        isListening={isListening}
        transcript={transcript}
        response={response}
      />
    </div>
  );
};

export default VoiceAssistant;