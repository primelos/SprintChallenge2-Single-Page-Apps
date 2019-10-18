import React from "react";
import { Route, NavLink } from "react-router-dom";
import CharacterList from "./CharacterList";
import WelcomePage from "./WelcomePage";
import styled from 'styled-components'

const Title = styled.h1`
font-family: 'Indie Flower', cursive;
`
const Img1 = styled.div`
background-image: url('https://cdn.mos.cms.futurecdn.net/Ytokbc8Jrd92ycSUrtXEjJ-1024-80.jpg')
`


export default function Header() {
  return (

    <header className="ui centered">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/characterlist">Characters</NavLink>
      <Img1>
      <Title className="ui center">Rick &amp; Morty Fan Page</Title>
      </Img1>
      
      <Route exact path="/" render={props => <WelcomePage {...props} />} />
      <Route
        path="/characterlist"
        render={props => <CharacterList {...props} />}
      />
      
    </header>
  );
}
