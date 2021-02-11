import React from "react"
import styled from "styled-components"

import { useRouter } from "next/router"
import Link from "next/link"

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 2em;
  background-color: #fffdf0;
`

const NavLink = styled.a`
  font-size: x-large;
  font-family: monospace;
  text-decoration: ${({active}) => active ? 'underline' : 'none'};
  margin-right: 1em;
  color: black;
  
`

const Bracket = styled.div`
  font-size: xxx-large;
  font-family: monospace;
  text-decoration: none;
  margin-right: 1em;
  margin-top: -10px;
  color: black;

`



const Navbar = () => {
  let route = useRouter()


  return (       
    <>
      <NavContainer>
        <Bracket>[</Bracket> 
        <Link href="/" passHref><NavLink active={route.pathname === "/"}>home</NavLink></Link>
        <Link href="/writing" passHref><NavLink active={route.pathname === "/writing"}>writing</NavLink></Link>
        <Link href="/podcast" passHref><NavLink active={route.pathname === "/podcast"}>podcast</NavLink></Link>
        <Link href="/about" passHref><NavLink active={route.pathname === "/about"}>about</NavLink></Link>
        <Bracket>]</Bracket>
      </NavContainer>
    </>
    )
}

export default Navbar