import React from "react";
const Logo = (props) => {
  return (
    <header>
      <h1>Welcome to the {props.appName}'s Pokedex</h1>
      <img
        onClick={props.handleClick}
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        alt="Bird"
      ></img>
    </header>
  );
};

export default Logo;
