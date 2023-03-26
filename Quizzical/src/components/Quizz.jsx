
export default function Quizz(props){
    

    let answers = props.data.answers
    console.log(answers)

    
    


    const answerElements = answers.map((answer) => {

        let style
        if(answer == props.selected){
            style = "selected"

            if(props.checked && answer != props.correct){
                style = "incorrect"
            }
        }

        let style2
        if(props.checked && answer == props.correct){
            style = "correct"
        }

        return(
            <button  onClick={() => props.selectedAnswer(props.id, answer)}  className={`button ${style} ${style2}  `}  >{answer}</button>
        )
    })

    

    return(
        <div className="question">
            {props.data.question}
            <div className="answers">
               {answerElements}
            </div>
        </div>
    )

    
    
}