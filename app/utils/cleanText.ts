// Util that takes text in, lowercases, and takes out all non-alphanumeric characters
export const cleanText = (text: string): string => {
  return text.toLowerCase().replace(/[^a-z0-9]/g, '');
};
