import { useState } from "react";
import Header from "./components/Header";
import Meme from "./components/Meme";
import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Meme />
    </div>
  );
}

export default App;
