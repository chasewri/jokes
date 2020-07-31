import React, { useState } from "react";
import getJoke from "./utils/getJoke";
import "./App.scss";

function App() {
  const [jokeText, setJokeText] = useState(
    "Press the button to get a new joke!"
  );

  function jokeGetter() {
    getJoke(setJokeText);
  }

  return (
    <div className="App">
      <h1>Jokes!!!</h1>
      <p className="joke-content">
        {!jokeText.setup && jokeText}
        {jokeText.setup}
      </p>
      <p className="punchline">{jokeText.punchline}</p>
      <button
        onClick={() => {
          jokeGetter();
        }}
        className="button"
      >
        Get Joke!
      </button>
    </div>
  );
}

export default App;
