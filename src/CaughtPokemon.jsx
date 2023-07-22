import React, { useState } from "react";



const CaughtPokemon = (props) => {
    const [caught] = useState(0);
  return <p>Caught {caught} Pokemon on {props.date}</p>;
};

export default CaughtPokemon;