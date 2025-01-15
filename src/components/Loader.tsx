import React, { useState, useEffect } from 'react';

interface LoaderProps {
  imageUrl: string;
  audioUrl: string;
  onLoadComplete: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ imageUrl, audioUrl, onLoadComplete }) => {
  const [isFlipping, setIsFlipping] = useState(true);
  const [displayText, setDisplayText] = useState<string>('');

  useEffect(() => {
    // Automatically play audio when the component is mounted
    const audio = new Audio(audioUrl);
    audio.play().catch((err) => {
      console.error('Audio playback failed:', err);
    });

    // Flip animation logic
    const flipInterval = setInterval(() => {
      setIsFlipping(false);
      onLoadComplete();
      clearInterval(flipInterval);
    }, 6000); // Assuming the loader completes in 6 seconds

    // Text animation logic
    const textToDisplay = 'OIAAOIIOAA';
    let textIndex = 0;

    const textInterval = setInterval(() => {
      if (textIndex < textToDisplay.length) {
        setDisplayText((prevText) => prevText + textToDisplay[textIndex]);
        textIndex += 1;
      } else {
        clearInterval(textInterval);
      }
    }, 600); // 1 second delay between characters

    return () => {
      clearInterval(flipInterval);
      clearInterval(textInterval);
    };
  }, [audioUrl, onLoadComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
      <div className="relative text-center">
        <img
          src={imageUrl}
          alt="Loading..."
          className={`w-32 h-32 object-none ${isFlipping ? 'animate-flip' : ''}`}
        />
        <div className="absolute inset-0" />
        {/* Displaying animated text */}
        <div className="mt-4 text-white text-xl">{displayText}</div>
      </div>
    </div>
  );
};
