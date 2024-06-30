import Header from './components/Header';
import Home from './components/Home';
import Create from './components/Create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Switch>
            <Route
              exact
              path="/"
            >
              <Home />
            </Route>
            <Route
              exact
              path="/create"
            >
              <Create />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
