import React from "react"

function Joke(props) {
    return(
        <div className="Joke">
            <h1>{props.joke.question}</h1>
            <p>{props.joke.answer}</p>
        </div>
    )
}

export default Joke