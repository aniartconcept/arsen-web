import { useState, useEffect, useCallback } from 'react';

// Hook
const useWindowSize = () => {
  const isClient = typeof window === 'object';

  const getSize = useCallback(() => {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
      isMobile: isClient ? window.innerWidth < 768 : undefined
    };
  }, [isClient]);

  const [windowSize, setWindowSize] = useState(getSize());

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [getSize, isClient]); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
};

export { useWindowSize };
