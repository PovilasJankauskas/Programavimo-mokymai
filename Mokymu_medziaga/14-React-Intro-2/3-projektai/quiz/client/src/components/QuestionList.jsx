import { useState } from "react"
import { Button, Container, Row, Col } from "react-bootstrap"

const QuestionList = ({questions, currentQuestion, handleAnswerQuestion, handleNextQuestion}) => {
   
   const [selectedOptions, setSelectedOptions] = useState (null)
   const optionsIds = ['a', 'b', 'c', 'd']
   
const handleOptionClick = (option) => {

}

    return (
        <Container >
            <p> time remaining</p>
            <h3>{questions[currentQuestion].question}</h3>
            <div className="list-group">
            {questions[currentQuestion].options.map((option, index) =>(
                <Button className="option-button" key={index}>
                    {option.value}
                </Button>
            ))}
             </div>
                  <Row>
                    <Col>
                    Question {currentQuestion + 1} of {questions.length}
                    </Col>
                    <Col>
                    <Button variant="outline-success" onClick={handleNextQuestion}> Next Question </Button>
                    </Col>
                  </Row>
    </Container >
    )
}
export default QuestionList