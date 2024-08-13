import React, { useEffect, useState } from "react";
import PokemonList from "./component/PokemonList";
import axios from 'axios'
import Pagination from "./component/Pagination";

function App() {

  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    axios.get(currentPageUrl)
      .then(res => {
        setLoading(false)
        setNextPageUrl(res.data.next)
        setPrevPageUrl(res.data.previous)
        setPokemon(res.data.results.map(p => p.name))
      })
      .catch(err => {
        console.log(err)
      })
  }, [currentPageUrl])

  if (loading) {
    return "Loading..."
  }

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl)
  }

  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl)
  }

  return (
    <>
      <PokemonList pokemon={pokemon} />
      <Pagination 
        gotoNextPage={ nextPageUrl ? gotoNextPage : null} 
        gotoPrevPage={ prevPageUrl ? gotoPrevPage: null}
      />
    </>
  );
}

export default App;
