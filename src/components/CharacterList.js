import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from './CharacterCard'
import SearchForm from "./SearchForm";
import styled from 'styled-components'

const MainBox = styled.h2`
display:flex;
flex-wrap: wrap;
max-width:100%
`

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([])
  const [query, setQuery] = useState('')
  
  let url1 = `https://rickandmortyapi.com/api/character/`

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get(url1)
      .then(response => {
        let newData = response.data.results
        
        const newResult = newData.filter(cartoon =>
          cartoon.name.toLowerCase().includes(query.toLowerCase())
          )

        setCharacter(newResult)
      })
      .catch(error => {
        console.log(`check with Morty`, error)
      
      })
  }, [query]);

  const watchChange = e => {
    setQuery(e.target.value)
  }

  return (
    <section className="character-list">
      <SearchForm change={watchChange} val={query} set={setQuery}  />
      <h1 className='search-header'>These are your Amazing Characters</h1>

      <MainBox>{character.map(item => {
        return <CharacterCard key={item.id} item={item} />
        
      })}
      </MainBox>
    </section>
  );
}
