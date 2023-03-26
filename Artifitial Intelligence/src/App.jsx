import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [response, setResponse] = useState("")
  const [question, setQuestion] = useState("")
  const [total, setTotal] = useState(0)

  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': 'bf100dc511msh7554f6d39962df0p1051f5jsn3bb8e25e6f39',
      'X-RapidAPI-Host': 'you-chat-gpt.p.rapidapi.com'
    },
    body: `{"question": "${question}","max_response_time":30}`
  };

  useEffect(() => {

    fetch('https://you-chat-gpt.p.rapidapi.com/', options)
      .then(response => response.json())
      .then(response => setResponse(response.answer))
      .catch(err => console.error(err));

  }, [question])
  

  console.log(response)

  function handleEnter(event){
    if(event.key === 'Enter'){
      setQuestion(event.target.value)
      setTotal(preveState => preveState + 1)
    }
  }

  console.log(question)

  const answer = <p className='response'>{response}</p>
  const dotsElement = <div className='dot-flashing'></div>
  const answerWithDots = <div className='response'>{dotsElement}</div>

function answerElement() {
  
  if(question === ""){
    return null
  }else if(response == ""){
    return answerWithDots
  }else if(response){ 
    return answer
  }
}


  return (
    <div className='container'>
      <div className="App">
        <h1>Get any Answer.</h1>
        <label>
          {total > 2 ? <p>Sorry, we can not allow you to keep going, this is a free trial</p> : <input type="text" name="message" onKeyDown={handleEnter} placeholder='Ask whatever you want'></input>}
        </label>
        {answerElement()}
        {/* {total ? <p className='response'><div className='dot-flashing'></div></p> : total && response && <p className='response'>{response}</p>} */}
        
        
      </div>
    </div>
  )
}

export default App
