import { useContext } from 'react';
import { PALETTE } from './constants';
import { StyleContext } from './StyleContext';

export const useStyle = () => {
  const { isDark, setIsDark } = useContext(StyleContext);
  const palette = PALETTE[isDark ? 'dark' : 'light'];

  return {
    isDark,
    setIsDark,
    palette
  };
};
