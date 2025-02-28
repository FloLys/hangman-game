import { API_URL } from '../utils/environment';

export async function startGame(playerName) {
  try {
    const response = await fetch(`${API_URL}/start`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({playerName}),
    });
    return await response.json();
  } catch (error) {
    throw new Error(error);
  }
}

export async function submitGuess(gameId, letter) {
  try {
    const response = await fetch(`${API_URL}/${gameId}/guess`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({letter}),
    });
    return await response.json();
  } catch (error) {
    throw new Error(error);
  }
}

export async function getGameData(gameId) {
  try {
    const response = await fetch(`${API_URL}/${gameId}`, {
      method: "GET",
    });
    return await response.json();
  } catch (error) {
    throw new Error(error);
  }
}

export async function getPlayersRanking() {
  try {
    const response = await fetch(`${API_URL}/ranking`, {
      method: "GET",
    });
    return await response.json();
  } catch (error) {
    throw new Error(error);
  }
}
