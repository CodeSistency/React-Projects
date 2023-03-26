import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import Quizz from './components/Quizz'
import Start from './components/Start'


import './App.css'

function App() {
  const [start, setStart] = useState(true)
  const [quizzData, setQuizzData] = useState([])
  const [score, setScore] = useState(0)
  const [checked, setChecked] = useState(false)


  const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);

  useEffect(() => {
    async function getQuestion() {
      const res = await fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      const data = await res.json()
      let q = []
      data.results.forEach(question =>{
        q.push({id: nanoid(), answers:shuffleArray([...question.incorrect_answers, question.correct_answer]), question:question.question, correct:question.correct_answer, selected: null, checked:false})
      })
      setQuizzData(q)
  }
    getQuestion()
  }, [start])

  console.log(quizzData)

  function checkedAnswers(){
    setChecked(prevState => !prevState)
    
    quizzData.map(element => {
      if(element.correct === element.selected){
        setScore(prev => prev + 1)
      }
    })
    console.log(quizzData)
    console.log(score)
  }

  function startGame(){
    setStart(prevState => !prevState)
    setChecked(false)

  }




  function selectedAnswer(id, answer){

    setQuizzData(oldQuizzData => oldQuizzData.map(element => {
      return element.id == id ? {...element, selected: answer}: 
      element
    }))

    console.log(id)
    console.log(answer)
  }
  
  console.log(score)

  const quizzElements = quizzData.map((element) => {

    return(
      <Quizz
        id={element.id}
        data={element}
        key={element.id}
        selected={element.selected}
        correct={element.correct}
        checked={checked}
        selectedAnswer={selectedAnswer}
      />
    )
  })



  return (
    <div className="App">
      <img src="./blob2.png" alt="" className='blob2'/>

      {start ? <Start start={startGame} /> :

      <div>
        <div className='questions'>
          {quizzElements}
        </div>
        {checked ? 
        <div className='checked-buttons'>
          <div className='checked-buttons'>
            <p className='score'>You scored {score}/5 correct answers</p>
            <button onClick={startGame}  className='checked-answer'>Restart Game</button>
          </div>
        </div>
        : <div className='checked-buttons'>
            <button className='checked-answer' onClick={checkedAnswers}>Check Answers</button>
          </div>}

        
      </div>
      
      }

      
      <img src="./blob1.png" alt="" className='blob1'/> 
      
    </div>
  )
}

export default App
