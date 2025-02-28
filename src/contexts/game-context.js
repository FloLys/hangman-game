import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { createContext, useContext, useState } from 'react';

const GameCxt = createContext();

const theme = createTheme({
  components: {
    MuiInput: {
      styleOverrides: {
        root: {
          fontFamily: "Bungee",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "red",
          fontFamily: "Bungee",
        },
      },
    },
  },
});

export const GameContext = ({ children }) => {
  const [gameState, setGameState] = useState(null);

  return (
    <ThemeProvider theme={theme}>
      <GameCxt.Provider value={{ gameState, setGameState }} theme={theme}>
        {children}
      </GameCxt.Provider>
    </ThemeProvider>
  );
};

export const useGame = () => {
  const context = useContext(GameCxt);
  if (!context) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
};
