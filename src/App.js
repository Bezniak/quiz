import React, {useState} from "react";
import './index.scss';
import {questions} from "./question/questions";
import Game from "./components/Game/Game";
import Result from "./components/Result/Result";

function App() {

    const [step, setStep] = useState(0);
    const [correct, setCorrect] = useState(0)


    const onClickVariant = (index) => {
        setStep(step + 1);

        if (index === question.correct) {
            setCorrect(correct + 1)
        }
    }


    const question = questions[step];

    return (
        <div className="App">

            {step !== questions.length
                ? <Game question={question} onClickVariant={onClickVariant} step={step}/>
                : <Result correct={correct} />
            }

        </div>
    );
}

export default App;
