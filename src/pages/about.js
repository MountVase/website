import React from "react"
import styled from "styled-components"
import Head from "next/head"

import Image from "next/image"
import Navbar from "../components/Navbar"

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
  margin-left: 15%;

`
const Text = styled.div`
  font-family: monospace;
  font-size: x-large;
  margin-top: 3%;
  margin-left: 15%;

`

const SocialContainer = styled.div`
    display: flex ;
    flex-direction: row-reverse;

    margin-top: 5%;
    justify-content: flex-end;
    padding: 1%;

    margin-left: 15%;
    
`

const SocialImage = styled(Image)`
    display: flex;
    margin-right: 2%;

`

const About = () => {

    return (
        <>
        <Head>
            <title>about</title>
        </Head>
        <Navbar />
        <Container>
        <Title>Markus Vasemägi</Title>
        <Text>
        Hi there. This is literally the first draft of the website so bear with me. <br/>
        I'm a crypto fanatic, and also enjoy reading about anthropology regarding  <br/>
        timeless human social interaction.
        </Text>

        <Text>
        Currently living in Finland, soon somewhere else. <br/>
        Hit me up if you're interesting (trust me, you probably are)!    
        </Text>
        <SocialContainer>
            <a href="https://t.me/marakuas" target="_blank" rel="noopener noreferrer"><SocialImage src="/telegram.svg" width={25} height={25} /></a>
            <a href="https://twitter.com/marakuas" target="_blank" rel="noopener noreferrer"><SocialImage src="/twitter.svg" width={25} height={25}/></a>
            <a href="https://github.com/MountVase" target="_blank" rel="noopener noreferrer"><SocialImage src="/github.svg" width={25} height={25}/></a>
        </SocialContainer>
        </Container>
        </>
    )

}

export default About