import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  // initializing some good ol states
  const [searchTerm, setSearchTerm] = useState("")
  const [pokemon, setPokemon] = useState([])

  // fetch some good ol pokemon
  useEffect(() => {
      fetch("http://localhost:3001/pokemon")
      .then((r) => r.json())
      .then((data) => { 
        setPokemon(data)
      })
  }, [])

  // get the search term from the search component
  function someSearchFunction(userSearchInput) {  
    setSearchTerm(userSearchInput)
  }

  const popularPokemonIGuess = pokemon.filter((eachPokemon) => eachPokemon.name.toLowerCase().includes(searchTerm.toLowerCase()))


  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm 
        onFreshPokemonDrama={(freshPokemon)=>setPokemon([...pokemon, freshPokemon])} 
      />
      <br />
      <Search
        onSearchDrama={someSearchFunction}
      />
      <br />
      <PokemonCollection 
        pokemon={popularPokemonIGuess}
      />
    </Container>
  );
}

export default PokemonPage;
