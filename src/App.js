import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from './components/Login';
import Register from './components/Register';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import CaloriesContainer from "./components/CaloriesCalculator/CaloriesContainer";
import ResultsContainer from "./components/CaloriesCalculator/ResultsContainer";
import TableCounter from "./components/CaloriesCounter/TableCounter";
import PrivateRoute from "./hoc/PrivateRoute"

const App = () => {
  const [userData, setUserData] = useState();
  const [redirectValue, setValue] = useState("/");

  const handleClickHome = () => {
    setValue("/calories");
  };

  const handleClick = (userInput) => {
    setUserData(userInput);
  };

  const handleRedirect = ({ target }) => {
    setValue(target.name);
  };

  return (<>
    <Router>
      <NavBar
        onClick={handleRedirect}
        redirectPath={redirectValue}
      />

      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Home {...props} onClick={handleClickHome} />}
        />
        <Route
          path="/calories"
          render={(props) => (
            <CaloriesContainer {...props} onClick={handleClick} />
          )}
        />
        <Route
          path="/results"
          render={(props) => (
            <ResultsContainer {...props} userInput={userData} />
          )}
        />
        <PrivateRoute
          path="/table"
          component={TableCounter}
        />
        <Route
          path="/register"
          render={(props) => (
            <Register {...props} onClick={handleClick} />
          )}
        />
        <Route
          path="/login"
          render={(props) => (
            <Login {...props} onClick={handleClick} />
          )}
        />

      </Switch>

      <About />
      <Contact />
    </Router>
  </>);
}

export default App;
