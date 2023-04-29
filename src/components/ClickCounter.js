import React from 'react';
import withCounter from './HOC/withCounter';

function ClickCounter(props) {
  const { change, counter } = props;
  return (
    <div>
      <button type="button" onClick={change}>Clicked {counter} times.</button>
    </div>
  );
}

export default withCounter(ClickCounter);
