/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from 'react';

function HoverCounter({ counter, increament }) {
  return (
    <div>
      <h1 onMouseOver={increament}>Hovered {counter} times.</h1>
    </div>
  );
}

export default HoverCounter;
