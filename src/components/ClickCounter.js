export default function ClickCounter({ counter, increament }) {
    return (
      <button type="button" onClick={increament}>Clicked {counter} times.</button>
    );
}
