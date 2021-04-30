import {ButtonContainer, QuestionsButton, QuestionsContainer} from "./questions.styles";
import {useState} from "react";
import {Question} from "../question/question.component";

export const Questions = ({questions, updateQuestion, finish}) => {

    const [currentQuestion, setCurrentQuestion] = useState(0);

    function prev() {
        if(canPrev()) setCurrentQuestion(currentQuestion - 1);
    }

    function next() {
        if(!canNext()) return;
        if(isFinish()) {
            console.log("Questions Complete", questions.map(({id, chosen}) => {return {id, answer: chosen}}));
            finish();
        }
        else setCurrentQuestion(currentQuestion + 1);
    }

    function isFinish() {
        return currentQuestion === questions.length-1;
    }

    function canPrev() {
        return currentQuestion > 0
    }

    function canNext() {
        return questions[currentQuestion].chosen !== null;
    }

    function answerQuestion(answer) {
        updateQuestion({...questions[currentQuestion], chosen: answer});
    }

    return (
        <QuestionsContainer>

            <Question
                question={questions[currentQuestion]}
                answerQuestion={answerQuestion} />

            <ButtonContainer>

                <QuestionsButton
                    disabled={!canPrev()}
                    onClick={prev}
                >Previous</QuestionsButton>

                <QuestionsButton
                    disabled={!canNext()}
                    onClick={next}
                >{ isFinish() ? "Finish" : "Next" } </QuestionsButton>

            </ButtonContainer>
        </QuestionsContainer>
    );
};