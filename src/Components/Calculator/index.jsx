import React from "react";
import Number from "../Number/index";
import Operator from "../Operator/index";
import Total from "../Total/index";
import {
    Container,
    TotalContainer,
    NumbersContainer,
    SignsContainer,
} from "./style";

const Calculator = () => {
    const signs = ["+", "-", "&#215", "&#247;", "="];
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, "C", 0];
    let initialFontSize = 32;
    const INITIAL_STATE = {
        totalFontSize: initialFontSize,
        total: 0,
        currentNumber: 0,
        buffer: [],
        currentSign: [],
    };
    const [state, setState] = React.useState(INITIAL_STATE);

    const handleNumber = (e) => {
        let newNumber = e.target.innerHTML;
        if (newNumber === "C") {
            setState((prevState) => {
                return { ...prevState, ...INITIAL_STATE };
            });
        } else {
            let newValue = parseInt(
                state.currentNumber.toString().concat(newNumber)
            );
            adjustTotalSize(state.total);
            setState((prevState) => {
                return {
                    ...prevState,
                    currentNumber: newValue,
                    total: newValue,
                };
            });
        }
    };

    const handleSign = (e) => {
        let newSign = e.target.innerHTML;
        if (newSign === "=") {
            setState((prevState) => {
                let result = doMath(
                    state.currentSign,
                    state.buffer.concat([state.currentNumber])
                );
                return {
                    ...prevState,
                    buffer: [],
                    currentSign: [],
                    currentNumber: 0,
                    total: result,
                };
            });
        } else {
            setState((prevState) => {
                let newCurrentSign = state.currentSign.concat([newSign]);
                let newBuffer = state.buffer.concat([state.currentNumber]);
                adjustTotalSize(state.total);
                return {
                    ...prevState,
                    currentSign: newCurrentSign,
                    buffer: newBuffer,
                    currentNumber: 0,
                    total: 0,
                };
            });
        }
    };

    const doMath = (signs, buffers) => {
        console.log("signs", signs);
        console.log("buffers", buffers);
        if (buffers.length === 1) {
            return buffers[0];
        } else if (buffers === []) {
            return state.total;
        } else {
            let result = buffers[0];
            for (let i = 1; i < buffers.length; i++) {
                if (signs[i - 1] === "+") {
                    result += buffers[i];
                } else if (signs[i - 1] === "-") {
                    result -= buffers[i];
                } else if (signs[i - 1] === "×") {
                    result *= buffers[i];
                } else {
                    result /= buffers[i];
                }
            }
            return result;
        }
    };

    const adjustTotalSize = (total) => {
        let newFontSize =
            total.toString().length > 9
                ? (initialFontSize / total.toString().length) * 9
                : initialFontSize;
        setState((prevState) => {
            return { ...prevState, totalFontSize: newFontSize };
        });
    };

    return (
        <Container>
            <TotalContainer>
                <Total total={state.total} fontSize={state.totalFontSize} />
            </TotalContainer>
            <NumbersContainer onClick={(e) => handleNumber(e)}>
                {numbers.map((number, index) => {
                    return <Number key={index} number={number} />;
                })}
            </NumbersContainer>
            <SignsContainer onClick={(e) => handleSign(e)}>
                {signs.map((sign, index) => {
                    return <Operator key={index} sign={sign} />;
                })}
            </SignsContainer>
        </Container>
    );
};

export default Calculator;
