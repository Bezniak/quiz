import React from 'react';
import {questions} from "../../question/questions";

const Result = ({correct}) => {

    return (
        <div className={'result'}>
            <img src='https://cdn-icons-png.flaticon.com/512/2278/2278992.png' alt="result"/>
            <h1>You guessed {correct} answer out of {questions.length}</h1>
            <a href="/">
                <button>Try again</button>
            </a>
        </div>
    );
};

export default Result;