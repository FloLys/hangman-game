import './start-page.css';

import { Button, Input } from '@mui/material';
import { useState } from 'react';

import useStartGame from '../../hooks/use-start-game';

export default function StartPage() {
  const [playerName, setPlayerName] = useState("");
  const startGame = useStartGame();

  const onStartGame = async () => {
    await startGame(playerName);
  };

  return (
    <>
      <Input
        className="player-input"
        type="text"
        value={playerName}
        placeholder="Choose a nickname"
        onChange={(element) => setPlayerName(element.target.value)}
        required
        disableUnderline
      ></Input>
      <Button onClick={onStartGame} variant="contained" className="button">
        Start Game
      </Button>
    </>
  );
}
