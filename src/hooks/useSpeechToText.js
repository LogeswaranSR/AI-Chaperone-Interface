import { useState, useEffect, useCallback } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

export const useSpeechToText = (onTranscriptComplete) => {
  const [isListening, setIsListening] = useState(false);
  const {
    transcript,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  useEffect(() => {
    if (!browserSupportsSpeechRecognition) {
      console.warn('Browser doesn\'t support speech recognition.');
    }
  }, [browserSupportsSpeechRecognition]);

  const startListening = useCallback(() => {
    setIsListening(true);
    resetTranscript();
    SpeechRecognition.startListening({ continuous: true });
  }, [resetTranscript]);

  const stopListening = useCallback(() => {
    setIsListening(false);
    SpeechRecognition.stopListening();
    if (transcript && onTranscriptComplete) {
      onTranscriptComplete(transcript);
      resetTranscript();
    }
  }, [transcript, onTranscriptComplete, resetTranscript]);

  return {
    isListening,
    transcript,
    startListening,
    stopListening,
    browserSupportsSpeechRecognition
  };
};