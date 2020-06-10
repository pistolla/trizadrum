import React from 'react';
import ReactDOM from 'react-dom';
import DrumPad from './DrumPad';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DrumPad />, div);
  ReactDOM.unmountComponentAtNode(div);
});