import { useEffect, useState } from "react";

export default function Joker() {
  let [joke, setJoke] = useState({});
  const URL = "https://official-joke-api.appspot.com/random_joke";
  const getNewJokes = async () => {
    let respose = await fetch(URL);
    let jsonResponse = await respose.json();
    // console.log(jsonResponse);
    // return jsonResponse;
    setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
  };

  useEffect(()=>{
    async function getFristJoke() {
    let respose = await fetch(URL);
    let jsonResponse = await respose.json();
    console.log(jsonResponse);
  
    setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
  }
  getFristJoke();
  },
  []
  );

  return (
    <div>
      <h3>Joker!</h3>
      <h2>{joke.setup}</h2>
      <h2>{joke.punchline}</h2>
      <button onClick={getNewJokes}>New Jock</button>
    </div>
  );
}