import React from 'react'

function PokemonList({ pokemon }) {
  return (
    <div>
      <h1>Pokemon List</h1>
      {
        pokemon.map(p => (
            <div key={p}>{p}</div>
        ))
      }
    </div>
  )
}

export default PokemonList
