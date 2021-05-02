import React from "react"
import * as styles from "./about-css-modules.module.css"
import Container from "../components/container"

console.log(styles)

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)

export default function About() {
  return (
    <Container>
      <h1>About CSS Modules</h1>
      <p>CSS Modules are cool</p>
      <User
        username="Changyoung"
        avatar="https://t1.daumcdn.net/cfile/tistory/2539723458F5DF4614"
        excerpt="I'm Changyoung. Nice to meet you!"
      />
      <User
        username="DuckBae"
        avatar="https://t1.daumcdn.net/cfile/tistory/2539723458F5DF4614"
        excerpt="I'm DuckBae. Nice to meet you too!"
      />
    </Container>
  )
}