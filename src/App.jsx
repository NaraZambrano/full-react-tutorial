import React from 'react'
import './App.css'

function App() {
  const title = 'Welcome to the new blog'
  const likes = 50;
  // const person = {name: 'yoshi', age: 30};

  const link = "http://www.google.com";

  return (
    <>
    <div className='App'>
      <div className='container'>
        <h1>{title}</h1>
        <p> liked {likes} times</p>

        {/* <p>{person}</p>*/}

        <p>{ 10 }</p>
        <p>{"Hola Mundo Nara"}</p>
        <p>{[1,2,3,4,5,6]}</p>
        <p>{ Math.random() * 10 }</p>


        <a href={link}>Google Site</a>

      </div>
    </div>
      
    </>
  )
}

export default App
