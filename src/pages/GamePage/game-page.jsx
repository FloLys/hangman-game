import './game-page.css';

import { Box, Button, Modal, Typography } from '@mui/material';

import { getGameData } from '../../api-services/game-service';
import { LetterInput } from '../../components/letter-input-component';
import gameMessages from '../../constants/modal-configs.json';
import { useGameLogic } from '../../hooks/use-game-logic';
import useStartGame from '../../hooks/use-start-game';

export default function GamePage() {
  const { gameState, checkGuess } = useGameLogic();
  const startGame = useStartGame();

  if (!gameState) {
    return <div>Loading...</div>;
  }

  const onPlayAgain = async () => {
    const response = await getGameData(gameState.id);
    if (response) {
      startGame(response.playerName);
    }
  };

  console.log("Game Settings", gameState);

  return (
    <div className="game-page">
      <section className="game-section">
        <LetterInput
          onGuess={checkGuess}
          guessedLetters={
            gameState.guessedLetters ||
            (gameState.wordLength ? "_".repeat(gameState.wordLength) : "")
          }
        ></LetterInput>

        <section>
          <div className="game-stats">
            <h4>Incorrect Letters:</h4>
            <p className="stat">{gameState.incorrectLetters || "0"}</p>
          </div>
          <div className="game-stats">
            <h4>Attempts Left:</h4>
            <p className="stat">{gameState.attemptsLeft}</p>
          </div>
        </section>
      </section>

      <Modal
        open={gameState.isFinished}
      >
        <Box className="modal-box">
          <Typography id="modal-title" variant="h6" component="h2">
            {gameState.isWon
              ? gameMessages.gameWin.title
              : gameMessages.gameFail.title}
          </Typography>
          <Typography id="modal-description">
            {gameState.isWon
              ? gameMessages.gameWin.content
              : gameMessages.gameFail.content}
          </Typography>
          <Button variant="contained" onClick={onPlayAgain} className="button">
            Play Again
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
