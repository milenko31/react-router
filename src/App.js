import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import About from '/pages/About.js'
function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <link to="/"> Accueil</link>
            </li>
            <li>
              <link to="/A_propos"> A propos</link>
            </li>
          </ul>
        </nav>
      </Router>
      <Switch>
        {/*<Route path="/" exact component={Home} />*/}
        {/*<Route path="/A_propos" exact component={About} />*/}
        <Route path="*"> Not Found </Route>
      </Switch>
    </div>
  );
}

export default App;
