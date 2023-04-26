import '../css/SplitPane.css';

export default function SplitPane({ left, right }) {
  return (
    <div className="splitPane">
      <div className="splitPane-left">{left}</div>
      <div className="splitPane-right">{right}</div>
    </div>
  );
}
