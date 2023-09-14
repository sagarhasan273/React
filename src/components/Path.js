/* eslint-disable react/destructuring-assignment */
import LinkedLine from './LinkedLine';
import './Path.css';

function Path() {
  const handleChange = () => {
    document.querySelectorAll('.ani').forEach((element) => {
      element.beginElement();
      console.log(element);
    });
  };
  return (
    <div style={{ width: '700px', height: '700px', backgroundColor: 'yellow' }}>

      <svg viewBox="0 0 300 300">
        <LinkedLine x1="20" x2="50" y1="30" y2="50" />
      </svg>
      <button type="button" onClick={handleChange}>on</button>
    </div>
  );
}

export default Path;
