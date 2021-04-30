import defaultQuestions from './questions.json'
import {useState} from "react";
import {Questions} from "./components/questions/questions"
import {AppContainer, AppHeader, CloseButton} from "./app.styles";
import {DownloadApp} from "./components/download-app/download-app.component";

const AppComponent = () => {

    const [questions, setQuestions] = useState(defaultQuestions);
    const [finished, setFinished] = useState(false);

    function handleClose(e) {
        e.preventDefault();
        console.log("SportsBet Modal Closed Manually");
        close();
    }

    function close() {
        document.getElementById('sportsbet_quiz_modal_container').remove();
    }

    function finish() {
        setFinished(true);
    }

    function updateQuestion(newQuestion) {
        setQuestions(questions.map(question =>
            question.id === newQuestion.id ? newQuestion : question
        ));
    }

    return (
        <AppContainer>
            <CloseButton onClick={handleClose}>x</CloseButton>
            <AppHeader>FoxBet Sportsbook Quiz</AppHeader>
            { !finished ?
                <Questions
                    questions={questions}
                    updateQuestion={updateQuestion}
                    finish={finish}
                />
                :
                <DownloadApp
                    close={close}
                />
            }
        </AppContainer>
    );
};

export default AppComponent;
