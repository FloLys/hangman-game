import GamePage from './pages/GamePage/game-page';
import StartPage from './pages/StartPage/start-page';

const routes = [
  {
    path: "/",
    element: <StartPage />,
  },
  {
    path: "/game/:id",
    element: <GamePage />,
  },
];

export default routes;
