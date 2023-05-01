/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import ThemeContext from './themeContext';

function HoverCounter({ counter, increament }) {
  return (
    <div>
      <ThemeContext.Consumer>
        {(value) => <h1 style={value} onMouseOver={increament}>Hovered {counter} times.</h1>}
      </ThemeContext.Consumer>
    </div>
  );
}

export default HoverCounter;
