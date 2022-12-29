import React, { useState } from 'react';

interface StyleState {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

export const StyleContext = React.createContext<StyleState>({
  isDark: false,
  setIsDark: () => null
});

const isBrowserDefaultDark = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches;

export const StyleProvider = ({ children }: React.PropsWithChildren) => {
  const [isDark, setIsDark] = useState(isBrowserDefaultDark());

  return (
    <StyleContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </StyleContext.Provider>
  );
};
