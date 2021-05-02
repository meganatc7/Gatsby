import React, { Component } from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Contact() {
  return (
    <div style={{ color: `purple`}}>
      <Link to="/">Home</Link>
      <Header headerText="Contact Page" />
      <p>Send us a message!</p>
    </div>
  )
}

