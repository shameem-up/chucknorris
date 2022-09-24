import React from "react";

const JokesBox = ({joke, clicked}) => {
    return (
        <div>
            <button onClick={clicked} className='bg-red dib br3 pa3 ma2 bw2 grow shadow-5 tc weight' > Kick It !!!</button>
            <h3 className="pa3 mb2 ba br4 b--black grow bg-yellow b">{joke}</h3>
        </div>
    )
}

export default JokesBox;