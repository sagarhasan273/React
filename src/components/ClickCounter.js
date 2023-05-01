import ThemeContext from './themeContext';

export default function ClickCounter({ counter, increament }) {
    return (
      <ThemeContext.Consumer>
        {(value) => <button style={value} type="button" onClick={increament}>Clicked {counter} times.</button>}
      </ThemeContext.Consumer>
    );
}
