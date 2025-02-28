import { useState } from 'react';

import useStartGame from '../hooks/use-start-game';

export default function StartPage() {
  const [playerName, setPlayerName] = useState("");
  const startGame = useStartGame();

  const onStartGame = () => {
    startGame(playerName);
  };

  return (
    <>
      <input
        type="text"
        value={playerName}
        placeholder="Choose a nickname"
        onChange={(element) => setPlayerName(element.target.value)}
      ></input>
      <button onClick={onStartGame}>Start Game</button>
    </>
  );
}
