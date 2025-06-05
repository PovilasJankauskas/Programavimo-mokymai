import { use, useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {getData } from './utils/api'
import {Container, Button} from 'react-bootstrap'
import Image from 'react-bootstrap/Image';
import QuestionList from './components/QuestionList'


function App() {
  const [questions, setQuestions] = useState([])
  const [quizStarted, setQuizStarted] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)

    useEffect(() => { 
      getData('/questions')
      .then(response => setQuestions(response))
    }, [])
  
const onStartButtonClick =() => {
  setQuizStarted(true)
}

const handleAnswerQuestion =()=> {

}

const handleNextQuestion = () => {
  if (currentQuestion === questions.length - 1) {
    setQuizStarted(false)
    return (
      setCurrentQuestion(0)
    )
  }
  setCurrentQuestion(currentQuestion + 1 )

}


  return (
    <>
<Container>
  <h1>  <Image src="./public/images.png" roundedCircle /> Vilnius Coding School</h1>
  <h3>Quizz app </h3>
  <p>Start test</p>
 {!quizStarted && <Button variant="outline-success" onClick={onStartButtonClick}>Start</Button>} 
 {quizStarted && <QuestionList
  questions={questions}
  currentQuestion={currentQuestion}
  handleAnswerQuestion={handleAnswerQuestion}
  handleNextQuestion={handleNextQuestion}
  />}
</Container>
    </>
  )

}

export default App
