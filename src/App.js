/* eslint-disable react/jsx-indent */
import ClickCounter from './components/ClickCounter';
import Counter from './components/Counter';
import HoverCounter from './components/HoverCounter';

export default function App() {
  return (
    <div>
        <Counter render={(counter, increament) => (
            <ClickCounter counter={counter} increament={increament} />
        )}
        />
        <Counter render={(counter, increament) => (
            <HoverCounter counter={counter} increament={increament} />
        )}
        />
    </div>
  );
}
