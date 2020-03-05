import React from "react";
import { Route, NavLink } from "react-router-dom";
import CharacterList from "./CharacterList";
import WelcomePage from "./WelcomePage";
import styled from 'styled-components'

const Title = styled.h1`
font-family: 'Indie Flower', cursive;
padding-top: 50px
color: #e6e6ff;
font-size: 4.5rem
`
const Img1 = styled.div`
height: 30vh;
background-image: url('https://cdn.mos.cms.futurecdn.net/Ytokbc8Jrd92ycSUrtXEjJ-1024-80.jpg')
`


export default function Header() {
  return (

    <header className="ui centered">
      <NavLink className='navs' to="/">Home</NavLink>
      <NavLink to="/characterlist">Characters</NavLink>
      <Img1>
      <Title className="ui center">Rick & Morty Fan Page</Title>
      </Img1>
      
      <Route exact path="/" render={props => <WelcomePage {...props} />} />
      <Route
        path="/characterlist"
        render={props => <CharacterList {...props} />}
      />
      
    </header>
  );
}
