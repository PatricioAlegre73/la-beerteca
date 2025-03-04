import React from "react";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="Proximanente vas a ver todas nuestras variedades de cerveza" />
    </div>
  );
};

export default App;
