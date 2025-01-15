import React, { useState, useEffect, useCallback } from 'react';
import { ArrowUpCircle } from 'lucide-react';
import { Loader } from './Loader';

interface EntryPageProps {
  onComplete: (githubUrl: string) => void;
}

export const EntryPage: React.FC<EntryPageProps> = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [githubUrl, setGithubUrl] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  const handleScroll = useCallback((direction: 'up' | 'down') => {
    if (isScrolling) return;

    setIsScrolling(true);
    setTimeout(() => setIsScrolling(false), 1000);

    if (direction === 'up' && step > 0) {
      setStep(prev => prev - 1);
      if (step === 2) setShowInput(false);
    } else if (direction === 'down' && step < 2) {
      setStep(prev => prev + 1);
      if (step === 1) setShowInput(true);
    }
  }, [step, isScrolling]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      handleScroll(e.deltaY > 0 ? 'down' : 'up');
    };

    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      const touchStartY = touch.clientY;

      const handleTouchMove = (e: TouchEvent) => {
        e.preventDefault();
        const touch = e.touches[0];
        const deltaY = touchStartY - touch.clientY;
        
        if (Math.abs(deltaY) > 50) {
          handleScroll(deltaY > 0 ? 'down' : 'up');
          document.removeEventListener('touchmove', handleTouchMove);
        }
      };

      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', () => {
        document.removeEventListener('touchmove', handleTouchMove);
      }, { once: true });
    };

    document.addEventListener('wheel', handleWheel, { passive: false });
    document.addEventListener('touchstart', handleTouchStart, { passive: true });

    return () => {
      document.removeEventListener('wheel', handleWheel);
      document.removeEventListener('touchstart', handleTouchStart);
    };
  }, [handleScroll]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowLoader(true);
  };

  const handleLoaderComplete = () => {
    onComplete(githubUrl);
  };

  if (showLoader) {
    return (
      <Loader
        imageUrl="img/cat.png"
        audioUrl='audio/cat.mp3'
        onLoadComplete={handleLoaderComplete}
      />
    );
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 to-black transition-all duration-1000 overflow-hidden">
      <div className="h-full flex flex-col items-center justify-center px-4">
        <div className="space-y-screen relative w-full max-w-2xl mx-auto">
          <div
            className={`text-center transition-all duration-1000 absolute w-full ${
              step === 0 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform -translate-y-full pointer-events-none'
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
              Wanna see something cool?
            </h1>
            <ArrowUpCircle className="w-12 h-12 text-white/50 mx-auto animate-bounce" />
          </div>

          <div
            className={`text-center transition-all duration-1000 absolute w-full ${
              step === 1 
                ? 'opacity-100 transform translate-y-0' 
                : step < 1 
                  ? 'opacity-0 transform translate-y-full pointer-events-none'
                  : 'opacity-0 transform -translate-y-full pointer-events-none'
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
              Wanna see something unique?
            </h1>
            <ArrowUpCircle className="w-12 h-12 text-white/50 mx-auto animate-bounce" />
          </div>

          <div
            className={`text-center transition-all duration-1000 absolute w-full ${
              step === 2 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-full pointer-events-none'
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-12">
              Let's make some magic!
            </h1>
            
            <form 
              onSubmit={handleSubmit}
              className={`transition-all duration-1000 transform ${
                showInput ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="relative max-w-xl mx-auto">
                <input
                  type="text"
                  value={githubUrl}
                  onChange={(e) => setGithubUrl(e.target.value)}
                  placeholder="Paste your GitHub profile URL"
                  className="w-full px-6 py-4 rounded-full bg-white/10 text-white border border-white/20 focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-white/20 backdrop-blur-sm"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 px-6 py-2 bg-white text-black rounded-full hover:bg-white/90 transition-colors font-medium"
                >
                  See the magic
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};