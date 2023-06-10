import React from "react";
const Logo = () => {
  const appName = "Elena";
  return (
    <header>
      <h1>Welcome to the {appName}'s Pokedex</h1>
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        alt="Bird"
      ></img>
    </header>
  );
};

export default Logo;
