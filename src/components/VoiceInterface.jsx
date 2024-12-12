import React from 'react';
import { motion } from 'framer-motion';
import { useSpeechToText } from '../hooks/useSpeechToText';
import { VoiceButton } from './VoiceButton';
import { TranscriptDisplay } from './TranscriptDisplay';

const VoiceInterface = ({ onSendMessage }) => {
  const {
    isListening,
    transcript,
    startListening,
    stopListening,
    browserSupportsSpeechRecognition
  } = useSpeechToText(onSendMessage);

  if (!browserSupportsSpeechRecognition) {
    return (
      <div className="text-center text-red-500 mt-4">
        Your browser doesn't support speech recognition.
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center mt-4">
      <VoiceButton
        isListening={isListening}
        onStart={startListening}
        onStop={stopListening}
      />
      <TranscriptDisplay
        isListening={isListening}
        transcript={transcript}
      />
    </div>
  );
};

export default VoiceInterface;