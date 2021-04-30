import {
    AnswerContainer,
    AnswerLabel,
    AnswerRadio,
    AnswersContainer,
    QuestionContainer, QuestionHeader
} from "./question.styles";

export const Question = ({question:{question, answers, chosen}, answerQuestion}) => {
    let answerId = 0;
    return (
        <QuestionContainer>
            <QuestionHeader>{question}</QuestionHeader>
            <AnswersContainer>
                { answers.map((answer)=> (
                    <AnswerContainer key={answer}>
                        <AnswerRadio
                            type='radio'
                            id={'radio-' + ++answerId}
                            value={answer}
                            checked={answer === chosen}
                            onChange={event => answerQuestion(event.target.value)}
                        />
                        <AnswerLabel
                            htmlFor={'radio-' + answerId}
                        >{answer}</AnswerLabel>
                    </AnswerContainer>
                ))}
            </AnswersContainer>
        </QuestionContainer>
    );
}