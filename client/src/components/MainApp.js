import React, { Component } from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "./AppNavbar";
import ItemModal from "./ItemModal";
import ShoppingList from "../ShoppingList";

class MainApp extends Component {
  render() {
    return (
      <div>
        <AppNavbar />
        <Container>
          <ItemModal />
          <ShoppingList />
        </Container>
      </div>
    );
  }
}

export default MainApp;
