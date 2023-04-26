import { useEffect } from 'react';
import SplitPane from './components/SplitPane';

export default function App() {
  useEffect(() => {
    const element = document.querySelector('.FancyBorder');
    console.log(element);
  });
  return (
    <SplitPane />
  );
}
