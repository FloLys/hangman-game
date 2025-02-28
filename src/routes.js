import GamePage from './pages/game-page';
import StartPage from './pages/start-page';

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
