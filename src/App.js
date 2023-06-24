import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";

function logWhenClicked() {
  console.log("Catch the Pokemon)");
}

function App() {
  return (
    <div>
      <Logo appName="Pokedex" handleClick={logWhenClicked} />
      <BestPokemon abilities={["Anticipation", "Adaptability", "Run-Away"]} />
      <CaughtPokemon date={new Date().toLocaleDateString()} />
    </div>
  );
}

export default App;
