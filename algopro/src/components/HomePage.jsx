import React from 'react'

export default function HomePage() {
  return (
    <>
    
    <div className="home-container">
    <h1>HomePage</h1>
      <div className="explain-container">
        <img src='#' alt='logo'></img>
        <p>
          AlgoPro is an interactive online platform to visually showcase
          algorithms in action. Currently, some of the most popular sorting algorithms are available to be viewed but more to be added soon!
          Additionally, expect to see pathfinding algorithms soon.
        </p>
      </div>
      <div className="link-tiles">
        <a href='sortpage'>
        <div className="sort-tile">
          Sort
        </div>
        </a>
       
       <a href='traversepage'>
        <div className="traverse-tile">
          Traverse
        </div>
       </a>
        
      </div>
      <div className="about-container">
        <h2>About the Creator</h2>
        <p>
          AlgoPro was a project started by Arbab Husain, a computer science student at The City College of New York. Like many of his peers, he preferred a more visual approach to learning
          as opposed to reading over thousands of slides. He sought to create AlgoPro in order to help himself implement algorithms from scratch and help many others learn popular algorithms.
        </p>
      </div>
    </div>
      
     
    
    </>
    
  )
}
