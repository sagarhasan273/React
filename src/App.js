/* eslint-disable react/jsx-no-constructed-context-values */
import ClickCounter from './components/ClickCounter';
import Counter from './components/Counter';
import HoverCounter from './components/HoverCounter';
import ThemeContext from './components/themeContext';

export default function App() {
  return (
    <div>

      <Counter>
        {(counter, increament) => (
          <ThemeContext.Provider value={{ color: 'red' }}>
            <ClickCounter counter={counter} increament={increament} />
          </ThemeContext.Provider>
            )}
      </Counter>

      <Counter>
        {(counter, increament) => (
          <ThemeContext.Provider value={{ color: 'blue' }}>
            <HoverCounter counter={counter} increament={increament} />
          </ThemeContext.Provider>
            )}
      </Counter>
    </div>
  );
}
