import React from "react";
const BestPokemon = (props) => {
  return (
    <div>
      <p>My favourite Pokemon is Pikachu</p>
      <ul>
        {props.abilities.map((element) => (
          <li key={element}>{element}</li>
        ))}
      </ul>
    </div>
  );
};

export default BestPokemon;
