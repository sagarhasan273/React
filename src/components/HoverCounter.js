/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from 'react';
import withCounter from './HOC/withCounter';

function HoverCounter(props) {
  const { change, counter } = props;
  return (
    <div>
      <h1 onMouseOver={change}>Hovered {counter} times.</h1>
    </div>
  );
}

export default withCounter(HoverCounter);
