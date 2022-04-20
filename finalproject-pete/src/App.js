import logo from "./logo.svg";
import "./App.css";

import Header from "./Header";
import Home from "./Home";
import Spies from "./Spies";
import Investigators from "./Investigators";
import About from "./About";
import Weather from "./Weather";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Investigators">
            <Investigators />
          </Route>
          <Route path="/Spies">
            <Spies />
          </Route>
          <Route path="/About">
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
