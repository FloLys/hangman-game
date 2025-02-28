import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { GameProvider } from './contexts/game-context';
import routes from './routes';

function App() {
  return (
    <GameProvider>
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route key={index} path={route.path} element={route.element} />
            );
          })}
        </Routes>
      </BrowserRouter>
    </GameProvider>
  );
}

export default App;
