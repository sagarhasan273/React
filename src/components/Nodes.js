/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';

function Nodes() {
    const [values, setValue] = useState([]);
    const positions = [];
    const mx = [0, 20];
    const num = 6;

    function fb(n, d) {
        if (n === 1 || n === 0) {
          positions.push([mx[0] + 40, d * 40, n]);
          mx[0] += 40;
          mx[1] = Math.max(mx[1], d * 40);
          return mx[0];
        }
        const l = fb(n - 1, d + 1);
        const r = fb(n - 2, d + 1);
        positions.push([(l + r) / 2, d * 40, n]);
        return (l + r) / 2;
    }

    fb(num, 1);
    useEffect(() => {
      setValue(positions);
    }, []);

    return (
      <div style={{ width: '100%', height: '98vh', backgroundColor: 'yellow' }}>
        <svg viewBox={`0 0 ${mx[0] + 40} ${mx[1] + 30}`} style={{ width: '100%', height: '98vh', backgroundColor: 'yellow' }}>
          {values.map((value, index) => (
            <g key={index}>
              <circle cx={value[0]} cy={value[1]} r="10" stroke="black" fill="none" strokeWidth={1} />
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
