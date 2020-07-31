export default async function getJoke(setJokeText) {
    const url =
      "https://cors-anywhere.herokuapp.com/https://official-joke-api.appspot.com/random_joke/";
    const options = {};

    try {
      let res = await fetch(url, options);
      let data = await res.json();
      return setJokeText(data);
    } catch (err) {
      console.log(err);
    }
  }