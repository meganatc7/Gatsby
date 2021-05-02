import React from "react"
import Header from "../components/header"

export default function About() {
  return (
    <div style={{ color: `teal` }}>
      <h1>About Page</h1>
      <hr></hr>
      <Header headerText="About Gatsby" />
      <Header headerText="It's pretty cool" />
      <Header arbitraryPhrase="hi" />
      <p>Very React!!</p>
    </div>
  )
}