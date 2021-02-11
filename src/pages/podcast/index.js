import React from "react"
import styled from "styled-components"
import Head from "next/head"

import Navbar from "../../components/Navbar"

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: auto;
  background-color: #fffdf0;
  flex-direction: column;

`
const Title = styled.h1`
  
    margin-left: 15%;
    font-weight: lighter;
    font-family: monospace;
    font-size: 45;

`

const InnerContainer = styled.div`
    display: flex;
    flex-wrap: wrap-reverse;
    margin-left: 15%;
    margin-right: 15%;

`
const StyledLink = styled.a`
    font-family: monospace;
    font-size: large;
    color: black;
    background-color: #f5e9c4;
`

const Text = styled.div`
  font-family: monospace;
  font-size: x-large;

  margin-left: 15%;

`

const Podcast = () => {

    return (
        <>
        <Head>
            <title>the Podcast!</title>
        </Head>
            <Navbar />
            <Container>
                <Title>the Podcast</Title>
                <Text>
                    Coming very soon. <br/>
                    Meanwhile, check out these cool ones: <br/>
                    </Text>
                <InnerContainer>
             

                    <ul>
                        <li><StyledLink href="https://chrisryanphd.com/category/tangentially-speaking/">Tangentially Speaking</StyledLink></li>
                        <li><StyledLink href="https://lexfridman.com/podcast/">Lex Fridman Podcast</StyledLink></li>
                        <li><StyledLink href="https://shaffir1.libsyn.com/arithegreat/2020">Ari Shaffir's Skeptic Tank</StyledLink></li>
                    </ul>
                    
                    
                </InnerContainer    >
            </Container>
        </>
    )

}

export default Podcast