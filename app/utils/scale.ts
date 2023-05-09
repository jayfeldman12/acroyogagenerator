import { WindowSize } from '../context/WindowSizeContext';

export const getScaledDimensions = (
  defaultWidth: number,
  defaultHeight: number,
  windowWidth: number
) => {
  const width = Math.min(defaultWidth, windowWidth - 30);
  const height = (width / defaultWidth) * defaultHeight;
  return { width, height };
};

const standardDimensions = (1200 + 800) / 2;
// Takes in a scale that is appropriate for an average window size and scales it up or down as appropriate for the current window size
export const getScale = (relativeScale: number, dimensions: WindowSize) => {
  const { windowWidth, windowHeight } = dimensions;
  const userDimensions = (windowWidth + windowHeight) / 2;
  console.log('dim', userDimensions, standardDimensions);
  return Math.min(Math.max(0.2, (userDimensions / standardDimensions) * relativeScale), 1.3);
};
