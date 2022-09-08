import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import {v4 as uuid} from "uuid";

function PokemonForm({ onFreshPokemonDrama }) {
  
  const [freshPokemon, setFreshPokemon] = useState({
    id: null,
    name: "",
    hp: null,
    frontUrl: "",
    backUrl: ""
  })

  function handleFreshChange(e) {
    let someFreshData = e.target.value
    if (e.target.name === "hp") {
      someFreshData = parseFloat(someFreshData)
    }
    setFreshPokemon({
      ...freshPokemon,
      [e.target.name]: someFreshData
    })
  }
  

  function handleFreshSubmit(e) {
    e.preventDefault()

    setFreshPokemon({
      id: uuid()
    })

    const freshPokemonNonState = {
      id: freshPokemon.id,
      name: freshPokemon.name,
      hp: freshPokemon.hp,
      sprites: {
        front: freshPokemon.frontUrl,
        back: freshPokemon.backUrl
      }
    }

    fetch('http://localhost:3001/pokemon', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(freshPokemonNonState)
    })
    .then(r => r.json)

    onFreshPokemonDrama(freshPokemonNonState)

    document.getElementById('freshPokemonUserForm').reset()

  }
  
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleFreshSubmit}
        id='freshPokemonUserForm'
      >
        <Form.Group widths="equal">
          <Form.Input 
            onChange={handleFreshChange}
            fluid label="Name" 
            placeholder="Name" 
            name="name" 
          />
          <Form.Input 
            onChange={handleFreshChange}
            fluid label="hp" 
            placeholder="hp" 
            name="hp" 
          />
          <Form.Input 
            onChange={handleFreshChange}
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
            onChange={handleFreshChange}
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;


// if (event.target.name === "price") {
//   value = parseFloat(value)
// }