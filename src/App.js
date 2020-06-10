import React from "react";
import "./App.css";
import  DrumPad from "./components/DrumPad/DrumPad"



function App() {
  const sounds = [
    {
      key: "Q",
      mp3: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },
    {
      key: "W",
      mp3: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
    {
      key: "E",
      mp3: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    },
    {
      key: "A",
      mp3: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },
    {
      key: "S",
      mp3: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },
  
    {
      key: "D",
      mp3: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    },
    {
      key: "Z",
      mp3: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    },
    {
      key: "X",
      mp3: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    },
    {
      key: "C",
      mp3: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
    }]
  
  const keys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
  return (
    <div className="App">
      <div id="drum-machine" className="container">
        <div id="display" className="display">
          <h1>play a sound</h1>
          {sounds.map((sound, idx) => (<DrumPad text={sound.key} key={idx} audio={sound.mp3} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
