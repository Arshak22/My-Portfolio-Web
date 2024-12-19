import React, { useEffect } from 'react';
import './style.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function LoadingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className='loading'>
      <DotLottieReact
        src='https://lottie.host/64303272-e34b-4998-af65-b2f842870fba/Qattu9Ncpp.lottie'
        loop
        autoplay
      />
    </div>
  );
}
