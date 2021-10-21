import logo from "./logo.svg";
import "./App.css";
import HomePage from "./containers/HomePage";
import UserPage from "./containers/UserPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/user/:userId" component={UserPage} />
          <Route>404 Not Found</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
