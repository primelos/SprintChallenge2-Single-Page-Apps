import React, { useEffect, useState } from "react";
import axios from "axios";


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState()
  let url1 = `https://rickandmortyapi.com/api/character/`
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get(url1)
      .then(response => {
        let newData = response.data.results
        console.log(newData)
      })
  }, []);

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}
