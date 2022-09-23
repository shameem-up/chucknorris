import React from "react";

const InputBox = ({buttonClick, input}) => {
    return (
        <div>
            <input 
            onChange={input}
            className="pa3 mb2 ba br3 b--black grow bg-red tc weight" 
            />
            <button 
            onClick={buttonClick} 
            className="bg-green br3 pa3 ma2 grow weight">
                Click Here
            </button>
        </div>
    )
}

export default InputBox;