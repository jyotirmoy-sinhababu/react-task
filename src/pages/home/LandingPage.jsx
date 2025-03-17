import React, { useContext } from 'react';
import HeroSection from '../../components/hero/HeroSection';
import Navbar from '../../components/nav/Navbar';
import IntroSection from '../../components/intro/IntroSection';
import { animationContext } from '../../context/LoadingContext';
import LoadingPage from '../loadingPage/LoadingPage';

const LandingPage = () => {
  const { isAnimation } = useContext(animationContext);
  return (
    <>
      {isAnimation ? (
        <LoadingPage />
      ) : (
        <div>
          <Navbar />
          <HeroSection />
          <IntroSection />
        </div>
      )}
    </>
  );
};

export default LandingPage;
