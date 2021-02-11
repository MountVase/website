import React from "react"
import styled from "styled-components"

import Navbar from "../components/Navbar"
import Image from "next/image"


const Container = styled.div`
  display: flex;
  height: 100vh;
  width: auto;
  background-color: #fffdf0;
  flex-direction: column;

`
const Title = styled.h1`
  
  
  font-weight: lighter;
  font-family: monospace;
  font-size: 45;

`

const Text = styled.div`
  font-family: monospace;
  font-size: x-large;
  margin-top: 7%;

`

const InnerContainer = styled.div`
  margin-left: 15%;
  margin-right: 15%;

`

const StyledLink = styled.a`
  color: blue;

  :hover {
    color: brown;
  }

`

const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 15%;
`




const Home = () => {

  return (
   
    <>
	 
        <Navbar />
        <Container>
          <InnerContainer>
            <Title>Virtual metamorphosis</Title>
            <Text>Hi, I'm Markus Vasemägi. <br/> 
                  This is a {`{living}`} website that changes, evolves & reacts. <br/>
                  I'll try to be authentic, through my writing & talking. <br/>
                  | <br/>
                  | <br/>
                  I love the intersection between cutting edge blockchain technology, <br/>
                  and ancient peer2peer human networks.
            </Text>
            
            <Text>
              You can checkout some stuff I've done, chat with me, <br/>
              or with people who I connect with, through our mainly voice-chat <StyledLink href="https://t.me/joinchat/I2zlmlQn6sD9kep5">community telegram.</StyledLink>
              
            </Text>
          </InnerContainer>
          <ImageContainer>
            <Image src="/dolphin.svg" height={400} width={400} />
          </ImageContainer>
        </Container>


    </>

  )
}

export default Home;
