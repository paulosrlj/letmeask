import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import { Room } from './pages/Room';
import { AdminRoom } from './pages/AdminRoom';
import { NotFound } from './components/NotFound';

import { AuthContextProvider } from './contexts/AuthContext';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />

          <Route path="/admin/rooms/:id" component={AdminRoom} />
          <Route path="*" component={NotFound} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
