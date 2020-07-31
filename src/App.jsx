import React, { useState } from "react";
import "./App.scss";

function App() {
  const [jokeText, setJokeText] = useState(
    "Press the button to get a new joke!"
  );

  async function getJoke() {
    const url =
      "https://cors-anywhere.herokuapp.com/https://official-joke-api.appspot.com/random_joke/";
    const options = {
      headers: { "content-type": "application/json" },
    };

    try {
      let res = await fetch(url, options);
      let data = await res.json();
      return setJokeText(data);
    } catch (err) {
      console.log(err);
    }
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
          getJoke();
        }}
        className="button"
      >
        Get Joke!
      </button>
    </div>
  );
}

export default App;
