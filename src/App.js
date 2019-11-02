import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import Home from "./scenes/home";
import Products from "./scenes/auctioner";
import Buyer from "./scenes/buyer";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <header>
        <h1 className="navbar-title">Subastas Frogteck</h1>
        <Nav>
          <Nav.Item>
            <Link to="/">Inicio</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/buyer/products">Subastas</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/seller/products">Crear subasta</Link>
          </Nav.Item>
        </Nav>
      </header>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/seller/products" component={Products}></Route>
        <Route exact path="/buyer/products" component={Buyer}></Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
