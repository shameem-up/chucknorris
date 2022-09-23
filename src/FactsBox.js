import React from "react";

const FactsBox = ({fact}) => {
    return (
        <div>
            <h3 className="pa3 mb2 ba br4 b--black grow bg-yellow">{fact}</h3>
        </div>
    )
}

export default FactsBox;