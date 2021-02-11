import React from "react"
import styled from "styled-components"
import Head from "next/head"
import Link from "next/link"

import Navbar from "../../components/Navbar"


import { getConfig, getAllPosts } from "@api" //../../api/index


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

const Writing = (props) => {
    console.log(props.posts)
    return (
        <>
        <Head>
            <title>writing</title>
        </Head>
        <Navbar />

        <Container>
        <Title>Various WritingS!</Title>
            <InnerContainer>
            
            <ul>
            {props.posts.map((post, idx) => {
                return (
                    <li key={idx}>
                    <Link href={`/writing/${post.slug}`} passHref>
                      <StyledLink>{post.title} <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>  {post.date}</StyledLink>
                    </Link>
                  </li>
                )
            })}
            </ul>
            </InnerContainer>
        </Container>

        </>
    )

}

export default Writing


export async function getStaticProps() {
    const config = await getConfig()
    const allPosts = await getAllPosts()
    return {
      props: {
        posts: allPosts,
        title: config.title,
        description: config.description
      }
    }
  }