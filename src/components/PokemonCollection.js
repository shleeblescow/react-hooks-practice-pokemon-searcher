import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemon }) {


  return (
    <Card.Group itemsPerRow={6}>
      {pokemon.map((eachPokemon) => (
        <PokemonCard 
          key={eachPokemon.id}
          sprites={eachPokemon.sprites}
          name={eachPokemon.name}
          hp={eachPokemon.hp}
        />
      ))}
    </Card.Group>
  );
}

export default PokemonCollection;