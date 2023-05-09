export const getScaledDimensions = (
  defaultWidth: number,
  defaultHeight: number,
  windowWidth: number
) => {
  const width = Math.min(defaultWidth, windowWidth - 30);
  const height = (width / defaultWidth) * defaultHeight;
  return { width, height };
};
