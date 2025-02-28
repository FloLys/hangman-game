import { useNavigate } from 'react-router-dom';

import { startGame } from '../api-services/game-service';
import { useGame } from '../contexts/game-context';

const useStartGame = () => {
  const navigate = useNavigate();
  const { setGameState } = useGame();

  const handleStartGame = async (playerName) => {
    try {
      const response = await startGame(playerName);
      if (response) {
        setGameState(response);
        navigate(`/game/${response.id}`);
      }
    } catch (error) {
      console.error("Error starting game:", error);
    }
  };

  return handleStartGame;
};

export default useStartGame;
