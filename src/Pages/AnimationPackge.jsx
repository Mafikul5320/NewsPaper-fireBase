import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const LottieAnimation = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'login_security_animation.json', // Ensure this path is correct and accessible
    });

    return () => anim.destroy(); // Cleanup on unmount
  }, []);

  return <div ref={containerRef} style={{ width: 300, height: 300 }} />;
};

export default LottieAnimation;
