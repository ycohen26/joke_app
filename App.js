import React from "react"
import Joke from "./components/Joke"

function App() {
    return (
        <div className="Jokes">
            <Joke 
            joke={{question:'Why was the elephant afraid to use the compuoter?', answer:'Becasue he was afraid of the mouse!'}}
            />
            
            <Joke 
            joke={{question:'What do golfers love to drink?', answer:'A cup of tee.'}}
            />
            
            <Joke 
            joke={{question:'How does a thread get to school', answer:'A spool bus'}}
            />
            
            <Joke 
            joke={{question:'How did the telephone propose to his girlfriend?', answer:'He gave her a ring.'}}
            />
            
            <Joke 
            joke={{question:'What’s the hardest thing about learning to ride a bike?', answer:'The pavement!'}}
            />
        </div>
    )
}

export default App