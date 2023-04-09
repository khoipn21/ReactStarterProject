import React from "react";
import trollFace from "../../public/images/TrollFace.png";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <img className="logo-image" src={trollFace} alt="" />
        <p className="logo-text">Meme Generator</p>
      </div>
    </header>
  );
}
