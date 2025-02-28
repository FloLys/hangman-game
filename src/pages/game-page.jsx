import { getGameData } from '../api-services/game-service';
import { LetterInput } from '../components/letter-input-component';
import { useGameLogic } from '../hooks/use-game-logic';
import useStartGame from '../hooks/use-start-game';

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
    <div>
      <LetterInput
        onGuess={checkGuess}
        guessedLetters={
          gameState.guessedLetters ||
          (gameState.wordLength ? "_".repeat(gameState.wordLength) : "")
        }
      ></LetterInput>

      <section>
        <h4>Incorrect Letters:</h4>
        <p>{gameState.incorrectLetters || ""}</p>
      </section>

      <section>
        <h4>Attempts Left:</h4>
        <p>{gameState.attemptsLeft}</p>
      </section>

      {gameState.isFinished && (
        <button onClick={onPlayAgain}>Play Again</button>
      )}
    </div>
  );
}
