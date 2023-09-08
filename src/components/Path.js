/* eslint-disable react/destructuring-assignment */
function Path() {
  return (
    <div style={{ width: '700px', height: '700px', backgroundColor: 'yellow' }}>
      <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="arrowhead-220,200368.75,50" markerWidth="10" markerHeight="10" refX="5" refY="2" orient="auto" markerUnits="strokeWidth"><path d="M 2,0 L 2,4 L 6,2 Z" /></marker>
        </defs>

        <line x1="20" y1="30" x2="50" y2="60" markerEnd="url(#arrowhead-220,200368.75,50)" stroke="black">
          <animate attributeName="x2" from="20" to="50" dur="0.2s" repeatCount="1" restart="whenNotActive" />
          <animate attributeName="y2" from="30" to="60" dur="0.2s" repeatCount="1" restart="whenNotActive" />
        </line>

      </svg>

    </div>
  );
}

export default Path;
