import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from "styled-components"

const PageNavigation = ({title}) => {
  return (
    <Wrapper>
      <NavLink to="/" className="a">Home</NavLink>/ {title}
    </Wrapper>
  )
};
const Wrapper = styled.section`
    height:10rem;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    font-size:3.2rem;
    padding-left:1.5rem;

    .a{
        font-size:2rem;
        
    }
`

export default PageNavigation