
"use client";

import { useState } from "react";

export default function Home() {

  const [clicked, setClicked] = useState(false)
  const [answer, setAnswer] = useState(false);

  return (
    <>
      <div className="center">

        <h1 className="title">Hi, my love</h1>
        <p className="caption">will you be my valentine?</p>

        { clicked && !answer ?
          <p className="answer-response">Yeah, kiss my ass, love you</p>
          
        : <></>}

        { clicked && answer ? <p className="answer-response">Wow you were nice, that's surprising</p> : <></>}

        <div className="flex">
          <button onClick={ () => { setClicked(true); setAnswer(false) } }>No</button>
          <button onClick={ () => { setClicked(true); setAnswer(true) } } >Yes</button>
        </div>

      </div>
    </>
  );
}
