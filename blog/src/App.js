import Header from './components/Header';
import Home from './components/Home';
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
              path="/hello"
            >
              <Home></Home>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
