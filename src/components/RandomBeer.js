import React, {useContext}  from 'react';
import { BeerContext } from "../helpers/BeerContext";

const RandomBeer = () => {
  const beers = useContext(BeerContext);

  const randomIndex = Math.floor(Math.random() * beers.length);
  const randomBeer = beers[randomIndex];
  
  return (
    <div>
      <h2>Random beer</h2>
      <h3>{randomBeer.name}</h3>
      <img src={randomBeer.image_url} alt={randomBeer.name} />
    </div>
  );
}

export default RandomBeer;
