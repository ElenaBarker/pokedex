import Logo from "./Logo";
function App() {
  return (
    <div>
      <Logo />
      <BestPokemon />
      <CaughtPokemon />
    </div>
  );
}

const BestPokemon = () => {
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  return (
    <div>
      <p>My favourite Pokemon is Pikachu</p>
      <ul>
        {abilities.map((element) => (
          <li>{element}</li>
        ))}
      </ul>
    </div>
  );
};

const CaughtPokemon = () => {
  let date = new Date().toLocaleDateString();
  return <p>Caught 0 Pokemon on {date}</p>;
};

export default App;
