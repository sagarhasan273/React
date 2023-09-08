import withCounter from '../HOC/withCounter';

/* eslint-disable react/destructuring-assignment */
function ClickCounter(props) {
  const { counter, increment } = props;
  return (
    <div>
      <button type="button" onClick={increment}>{counter}</button>
    </div>
  );
}

export default withCounter(ClickCounter);
