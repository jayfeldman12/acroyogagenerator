'use client';

import { createContext, useContext, useEffect, useState } from 'react';

interface WindowSize {
  windowWidth: number;
  windowHeight: number;
}

const defaultWindowHeight = 700;
const defaultWindowWidth = 375;

const WindowSizeContextCreator = createContext<WindowSize>({
  windowHeight: defaultWindowHeight,
  windowWidth: defaultWindowWidth,
});

export const useWindowSizeContext = () => useContext(WindowSizeContextCreator);

export const WindowSizeContext = ({ children }: { children: React.ReactNode }) => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    windowWidth: defaultWindowWidth,
    windowHeight: defaultWindowHeight,
  });
  const [hasSetSize, setHasSetSize] = useState(false);

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
      });
      setHasSetSize(true);
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <WindowSizeContextCreator.Provider value={windowSize}>
      {hasSetSize ? children : null}
    </WindowSizeContextCreator.Provider>
  );
};
