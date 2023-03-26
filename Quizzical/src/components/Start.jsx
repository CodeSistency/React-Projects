import React from 'react'


export default function Start(props) {
  return (
    <div className='start-container'>
      <h1>Quizzical</h1>
      <p>The best Quizz online</p>
      <button className='start-quizz' onClick={props.start}>Start Quizz</button>
    </div>
  )
}
