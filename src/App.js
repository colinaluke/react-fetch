import './App.css';
import { useState, useEffect} from "react";
import Header from './components/Header.js';
import Cards from './components/Cards.js';

function App() {
  const [assets, setAssets] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    fetch('https://api.x.immutable.com/v1/assets?page_size=40&sell_orders=true&collection=0x343fd244ab5a1d1129a6edf21ba37c64aa725ff0')
    .then(response => response.json())
    .then(response => {
      setFiltered(response.result);
      setAssets(response.result)
    })
    .catch(err => console.error(err));
  }, []);

  return (
    <div className="App">
      <div id='header'>
        <Header setFiltered = {setFiltered} filtered = {filtered} assets = {assets} />
      </div>
      
      <Cards filtered = {filtered} />
    </div>
  );
}

export default App;
