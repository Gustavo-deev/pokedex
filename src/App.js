import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [data, setData] = useState();
  const [name, setName] = useState();
  const [weight, setWeight] = useState();
  const [number, setNumber] = useState(0);
  const [URL, setURL] = useState('https://pokeapi.co/api/v2/pokemon/1');

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        setName(response.data.name);
        setWeight(response.data.weight);
      })
      .catch((err) => {
        window.alert(err);
      })
  }, [URL]);

  const show = () => {
    setURL(`https://pokeapi.co/api/v2/pokemon/${number}`);
  }

  return (
    <div className="App">
      <h1>Pokemon</h1>
      <input type={"number"} onChange={(e) => { setNumber(e.target.value) }} />
      <button onClick={show}> Mostrar</button>
      <h2>Nome : {name}</h2>
      <h3>Peso : {weight}</h3>
      <img src={data ? data.sprites.other.dream_world.front_default : "<p>Loading</p>"} />
      <p>Minhas habilidades são: </p>
      {data ? data.abilities.map((value, key) => {
        return (
          <div key={key}>
            {value.ability.name}
          </div>
        )
      }) : ""}
    </div>
  );
}

export default App;
