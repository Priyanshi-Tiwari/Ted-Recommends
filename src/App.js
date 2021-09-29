import "./styles.css";import React, { useState } from "react";

var genreDictionary = {
  Business: [
    {
      name: "How to start a business",
      rating: "4/5"
    },

    {
      name: "How to raise money",
      rating: "5/5"
    },
    {
      name: "Speak like a leader",
      rating: "5/5"
    }
  ],
  Coding: [
    {
      name: "How I taught myself to code ",
      rating: "4/5"
    },

    {
      name: "The poetry of programming",
      rating: "4.5/5"
    },
    {
      name: "The right way to learn code",
      rating: "4/5"
    }
  ],

  Health: [
    {
      name: "Power food for the brain",
      rating: "4/5"
    },

    {
      name: "How to keep diseases away",
      rating: "5/5"
    },
    {
      name: "The role of food in health",
      rating: "4/5"
    }
  ]
};
var genreWeKnow = Object.keys(genreDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("Business");

  function buttonClickHandler(genre) {
    setMeaning(genre);
  }
  return (
    <div className="App">
      <h1>TED Recommends</h1>
      <div className="lineone">The best ted talks recommended by ted.</div>
      <div className="linetwo">Select a genre to get started</div>
      <div className="buttonDiv">
        {genreWeKnow.map(function (genre) {
          return (
            <button key={genre} onClick={() => buttonClickHandler(genre)}>
              {genre}
            </button>
          );
        })}
      </div>
      <div>
        <ul>
          {genreDictionary[meaning].map(function (input) {
            return (
              <li className="list">
                <p>{input.name}</p> {input.rating}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
