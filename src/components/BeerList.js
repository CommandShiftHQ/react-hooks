import React, {useContext}  from 'react';
import { BeerContext } from "../helpers/BeerContext";

const BeerList = () => {
  const beers = useContext(BeerContext);
  return (
    <div>
      <h2>Our beers!</h2>
      <ul>
        {
          beers.map((beer) => <li>
            <h3>{beer.name}</h3>
            <img src={beer.image_url} alt={beer.name}/>
            </li>)
        }
      </ul>
    </div>
  );
}

export default BeerList;
