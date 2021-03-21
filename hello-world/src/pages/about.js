import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

export default function About({ data }) {
  return (
    <Layout>
      <Header headerText="About Gatsby" arbitraryPhrase="is arbitrary" />
      <Header headerText="It's pretty cool" />
      <p>Such wow. Very React.</p>
      <h1>About me</h1>
      <p>I'm good enough, I'm smart enough, and gosh darn it, people like me!</p>
      <h1>About Pandas Eating Lots</h1>
      <h2>{data.site.siteMetadata.title}</h2>
      <p>
        We're the only site running on your computer dedicated to showing the
        best photos and videos of pandas eating lots of food.
      </p>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`