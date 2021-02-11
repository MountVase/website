import React from "react"
import Link from "next/link"
import styled from "styled-components"
import Head from "next/head"
import Navbar from "../../components/Navbar"

import ReactMarkdown from "react-markdown"

import { getPostBySlug, getAllPosts } from "@api"


export async function getStaticProps(context) {
    return {
      props: await getPostBySlug(context.params.slug)
    }
}
  
export async function getStaticPaths() {
  let paths = await getAllPosts()
  paths = paths.map(post => ({
    params: { slug: post.slug }
  }));
  console.log(paths)
  return {
    paths: paths,
    fallback: false
  }
}

const StyledLink = styled.a`
    font-size: xx-large;
    font-family: monospace;
    color: black;
    margin-left: 15%;
    margin-top: -3%;
`

const Container = styled.div`
  display: flex;
  height: 100%;
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

const InnerContainer = styled.div`
    display: flex;
    flex-wrap: wrap-reverse;
    margin-left: 15%;
    margin-right: 15%;
    margin-top: 2%;
`

const Text = styled.div`
  font-family: monospace;
  font-size: 20px;
  color: black;
  overflow-wrap: normal;
  display: inline-block;
  width: 75vw;
  
  
`


const Blog = (props) => {
    

    return (
        <>
         <Head>
            <title>{props.title}</title>
        </Head>
        <Navbar />

        <Container>
        <Title>{props.title} </Title>

        <InnerContainer>    
        <Text><ReactMarkdown source ={props.content} />
        </Text>
        </InnerContainer>

        </Container>
        </>
    )
}

export default Blog

