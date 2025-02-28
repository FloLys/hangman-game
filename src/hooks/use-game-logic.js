import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { submitGuess } from '../api-services/game-service';
import { useGame } from '../contexts/game-context';

export const useGameLogic = () => {
  const navigate = useNavigate();
  const { gameState, setGameState } = useGame();

  useEffect(() => {
    if (!gameState || gameState.id === undefined) {
      navigate("/");
    }
  }, [gameState, navigate]);

  const checkGuess = useCallback(
    async (letter) => {
      if (!gameState) return;
      try {
        const updatedData = await submitGuess(gameState.id, letter);
        setGameState((prev) => ({
          ...prev,
          ...updatedData,
        }));
      } catch (error) {
        console.error("Error submitting guess:", error);
      }
    },
    [gameState, setGameState]
  );
  return { gameState, checkGuess };
};
