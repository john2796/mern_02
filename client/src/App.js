import React, { Component } from "react";
import AppNavbar from "./components/AppNavbar";
import ShoppingList from "./ShoppingList";
import ItemModal from "./components/ItemModal";
import { Container } from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import LoginContainer from "./components/LoginContainer/LoginContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <Container>
          <ItemModal />
          <ShoppingList />
        </Container>
        <LoginContainer />
      </div>
    );
  }
}

export default App;
