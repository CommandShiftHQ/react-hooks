import { useState, useEffect} from "react";
import axios from 'axios';
import { BeerContext } from '../helpers/BeerContext';
import BeerList from './BeerList';
import '../styles/App.css';
import RandomBeer from "./RandomBeer";

function App() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios.get('https://api.punkapi.com/v2/beers')
    .then((response) => {
      const result = response.data;
      setBeers(result);
    })
  }, []);

  return (
    <div className="App">
      {
        beers.length > 0
          ? (
            <BeerContext.Provider value={beers}>
              <RandomBeer />
              <BeerList />
            </BeerContext.Provider>
          )
          : 'Loading beer...'
      }


    </div>
  );
}

export default App;
