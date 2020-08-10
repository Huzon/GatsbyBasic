import React from "react"
import Header from "../components/header"
import { Link } from "gatsby" 

export default function Home() {
  return <div style={{color: 'purple'}}>
    <Link to="/contact/">Contacts</Link>
    <Header headerText="Home page" />

    <h1>Hello huzefa</h1>
    <p>The first gatsby para</p> 
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </div>
}
