import React from "react"
import styled from "styled-components"

import Navbar from "../components/Navbar"
import Image from "next/image"

import Typist from "react-typist"


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

const Dorg = styled.a`
  color: blue;

  :hover {
    color: brown;
    background-color: white;
  }
`




const Home = () => {

  return (
   
    <>
        <Navbar />
        <Container>
          <InnerContainer>

            
              <Title>
              <Typist >
                <Typist.Delay ms={500}/>
                Virtual metamorphosis
                <Typist.Backspace count={13} delay={1000}/>

                garden
                <Typist.Backspace count={6} delay={700}/>
                jungle
                <Typist.Backspace count={6} delay={700}/>

                lounge
                <Typist.Delay ms={300}/>
                {" "}for hangouts
                <Typist.Backspace count={19} delay={500}/>

                home. 

              </Typist>
              </Title>
            

            <Text>Hi, I'm Markus Vasemägi. <br/> 
                  {" "} <br/>
                  I love the intersection between cutting edge blockchain technology, <br/>
                  and ancient peer2peer human networks.
                  Currently building web3 stuff <Dorg href="https://dorg.tech" target="_blank" rel="noopener noreferrer">@dOrg</Dorg><br/>
                

                  
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
