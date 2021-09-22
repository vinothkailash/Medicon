import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './About';
import Banner from './Banner';
import Login from './Login';
import NavBar from './NavBar';
import Products from './Products';
function App() {
  return (
    <div className="" id = "home">
      <NavBar />
      <Banner />
      <Products />
      <About />
    </div>
  );
}

function Routing() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/">
          <Login />
        </Route>

        <Route exact path = "/home">
          <App />
        </Route>

      </Switch>
    </Router>
  )
}

export default Routing;
