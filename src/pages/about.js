import React from "react"
//import Header from "../components/header"
import Layout from "../components/layout"
import styles from "./about.module.css"

console.log(styles)

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} classname={styles.avatar} alt="" />
    <div classname={styles.description}>
    <h2 classname={styles.username}>{props.username}</h2>
    <p classname={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)

export default function About() {
  return (
    <Layout>
    
      <h1>About css modules</h1>
      <p>Css Modules are cool</p>
    

      <User 
        username="Jane Foster"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
        excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />

      <User
        username="Bob Smith"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
        excerpt="I'm Bob Smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
      
    
    </Layout>
  )
}
