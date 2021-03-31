import React from "react";

const Scoreboard = ({userScore, compScore}) => {
    return(
        <div className="score-board">
            <div id="user-label" className="badge">user</div>
            <div id="comp-label" className="badge">comp</div>
            <span id="user-score">{userScore}</span>:<span id="comp-score">{compScore}</span>
        </div>
    )
}

export default Scoreboard;