import React from "react"
import { Link } from "gatsby"
import Layout from "./components/layout"

export default function About() {
  return (
    <Layout>
      <Link to="/">[back]</Link>
      <h1>About PAGE</h1>
      <p>
        I'm good enough, I'm smart enough.
      </p>
    </Layout>
  )
}