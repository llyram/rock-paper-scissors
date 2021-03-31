import React from "react";
import rock from "../images/rock.png";
import paper from "../images/paper.png";
import scissors from "../images/scissors.png";

const Choices = ({setUserChoice, setCounter, counter}) => {

    const userClickHandler = (e) =>{
        e.preventDefault();
        setUserChoice(e.target.id);
        setCounter(counter + 1);
    }

    return(
        <div className="choices">
            <div onClick={userClickHandler} className="choice" id="r">
                <img src={rock} alt="" id="r" />
            </div>
            <div onClick={userClickHandler} className="choice" id="p">
                <img src={paper} alt="" id="p" />
            </div>
            <div onClick={userClickHandler} className="choice" id="s">
                <img src={scissors} alt="" id="s" />
            </div>
            <p id="action-message">Make your move.</p>
        </div>
    )
}

export default Choices;