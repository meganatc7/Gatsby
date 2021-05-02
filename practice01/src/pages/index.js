import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return (
  <div style={{ color:`purple` }}>
    <Link to="/contact/">Contact</Link>
    <h1>Hello Gatsby!</h1>
    <p>What a world</p>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEzEy7VVs_hwdry72DgcPSOKL_ntxSp1I3OA&usqp=CAU"></img>
  </div>
  );
}
