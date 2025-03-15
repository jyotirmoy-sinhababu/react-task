'use client';

import './App.css';
import { useState, useContext, useEffect } from 'react';
import LandingPage from './pages/home/LandingPage';
import { animationContext } from './context/LoadingContext';
import { motion } from 'framer-motion';

function App() {
  const [currentWord, setCurrentWord] = useState(-1);
  const { isAnimation, setIsAnimation } = useContext(animationContext);
  const letterArr = ['Unite', 'Innovate', 'Connect', 'Inspires', 'Together'];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentWord <= letterArr.length) {
        setCurrentWord((prev) => prev + 1);
        setIsAnimation(true);
      } else {
        setIsAnimation(false);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [currentWord]);

  console.log('isAnimation:', isAnimation);
  console.log('Current Word Index:', currentWord);

  return (
    <>
      {isAnimation ? (
        <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white'>
          <div className='relative h-20 sm:h-24 md:h-32 w-full flex items-center justify-center  from-slate-900 to-slate-800'>
            {letterArr.map((word, index) => {
              console.log(
                `Rendering: ${word}, Index: ${index}, Current: ${currentWord}`
              );
              return (
                <motion.div
                  key={word}
                  className='absolute text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold '
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: index === currentWord ? 1 : 0,
                    y: index === currentWord ? 0 : 20,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <p>{word}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      ) : (
        <LandingPage />
      )}
    </>
  );
}

export default App;
