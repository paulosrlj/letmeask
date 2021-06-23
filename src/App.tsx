// import { useState, createContext, useEffect } from 'react';

import { Route, BrowserRouter, Switch } from 'react-router-dom';

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import { Room } from './pages/Room';

// import { auth, firebase } from './services/firebase';

import { AuthContextProvider } from './contexts/AuthContext';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
