import React from "react";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeNumber } from "../../redux/slices/numberSlice";
import { getFacts, clearFacts } from "../../redux/slices/factsSlice";

const InputNumber = () => {
    const data = useSelector((state) => state.facts);
    const numberValid  = useSelector((state) => state.number.numberValid);
    const dispatch = useDispatch();
    const inputRef = useRef();

    const clearInput = () => {
        inputRef.current.value  = '';
    };

    return (
        <React.Fragment>
            <div className="input-app-wrap">
                <div className="input-wrap">
                <input ref={inputRef} type="nubmer" placeholder="введите число от 1 до 5" 
                    onChange={() => 
                        dispatch(changeNumber(inputRef.current.value), 
                        dispatch(getFacts(inputRef.current.value)),
                    )}
                    onClick={() => dispatch(clearFacts(), clearInput())}
                />
                </div>
                <div className="input-number-result">
                    <ul className="input-number-result-list">
                    {numberValid ? data.currentFacts.map((item, i) => {
                        return (
                            <li key={Math.random() + i}>{item}</li>
                        )
                    }): null}
                    </ul>
                </div>
            </div>
        </React.Fragment>
    );
};

export default InputNumber;