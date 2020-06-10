import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './DrumPad.css';

function DrumPad(props) {
  const audio = useRef(props.audio);
  useEffect((props) => {
    // audio.current.addEventListener('ended', (e) => {
    //   const parent = e.target.parentNode;
    //   parent.classList.remove('active');
    // });
    document.addEventListener('keydown', (e) => {
      const id = e.key.toUpperCase();
      const audio = document.getElementById(id);
      if (audio) {
        audio.currenttime = 0;
        const parent = audio.parentNode;
        parent.classList.add('active');

        const display = parent.parentNode;
        display.querySelector('h1').innerText = `${id} is playing`; audio.play();
      }

    });

  }, [props.audio]);

  const playSound = () => {
    audio.current.play();
    const id = audio.current.id;
    const parent = audio.current.parentNode;
    parent.classList.add('active');
    const display = parent.parentNode;
    display.querySelector('h1').innerText = `${id} is playing`;

  }

  return (
    <div className="drum-pad" onClick={playSound}
      id={`drum-${props.text}`}>
      {props.text}
      <audio className="clip" id={props.text} >
        <source src={props.audio} type="audio/mp3" />
      </audio>
    </div>
  );
}

DrumPad.propTypes = {};

DrumPad.defaultProps = {};

export default DrumPad;
