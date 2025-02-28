import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { GameContext } from './contexts/game-context';
import routes from './routes';

function App() {
  return (
    <GameContext>
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route key={index} path={route.path} element={route.element} />
            );
          })}
        </Routes>
      </BrowserRouter>
    </GameContext>
  );
}

export default App;
