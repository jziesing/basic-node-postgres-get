import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import About from './about';
import Login from './login';

const App = () => (
  <Router>
    <div>
      <header>
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
      </main>
    </div>
  </Router>
);

export default App;
