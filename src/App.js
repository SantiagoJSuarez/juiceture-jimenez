import React from "react";
import "./App.css";
import ItemCount from "./components/ItemCount";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";

let puntaje = 10;

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer />
      <br/>
      <br/>
      <ItemCount/>


    </>
  );
}

export default App;
