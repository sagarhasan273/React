/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';

/* eslint-disable react/destructuring-assignment */
function Nodes() {
    const [values, setValue] = useState([]);
    const positions = [];
    const depthPos = { 4: 0 };
    const num = 4;

    function fb(n, d) {
        if (n === 1 || n === 0) {
            depthPos[d] += 55;
            positions.push([depthPos[d], d * 50, n]);
            return [depthPos[d], n, depthPos[d]];
        }
        const l = fb(n - 1, d + 1);
        const r = fb(n - 2, d + 1);
        depthPos[d] = (l[0] + r[0]) / 2;
        positions.push([depthPos[d], d * 50, n]);
        return [depthPos[d], n, Math.max(l[2], r[2], depthPos[d])];
    }

    const results = fb(num, 1);

    useEffect(() => {
        setValue(positions);
    }, []);

    return (
      <div style={{ width: '100%', height: '98vh', backgroundColor: 'yellow' }}>
        <svg viewBox={`0 0 ${results[2] + 55} ${(num + 1) * 60}`}>
          {values.map((value, index) => (
            <g key={index}>
              <circle cx={value[0]} cy={value[1]} r="15" stroke="black" fill="none" strokeWidth={2} />
              <text
                x={value[0]}
                y={value[1]}
                className="sc-dmlrTW guKkvw"
                style={{
                    transform: 'scale(1)',
                    transformOrigin: 'center center',
                    transformBox: 'fill-box',
                    textAnchor: 'middle',
                    alignmentBaseline: 'central',
                }}
              >{value[2]}
              </text>
            </g>
          ))}

        </svg>

      </div>
    );
}

export default Nodes;
