/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';

function Nodes() {
    const [values, setValue] = useState([]);
    const positions = [];
    const mx = [0, 20];
    const num = 5;
    const nodes = {};
    const nodeArray = [];

    function fb(n, d, path) {
        if (n === 1 || n === 0) {
          nodeArray.push(path);
          nodes[path] = [mx[0] + 40, d * 40, n];
          positions.push([mx[0] + 40, d * 40, n]);
          mx[0] += 40;
          mx[1] = Math.max(mx[1], d * 40);
          return mx[0];
        }
        nodeArray.push(path);
        const l = fb(n - 1, d + 1, `${path}L`);
        nodeArray.push(path);
        const r = fb(n - 2, d + 1, `${path}R`);
        positions.push([(l + r) / 2, d * 40, n]);
        nodes[path] = [(l + r) / 2, d * 40, n];
        nodeArray.push(path);
        return (l + r) / 2;
    }

    fb(num, 1, 'R');
    useEffect(() => {
      setValue(positions);
      console.log(values);
    }, []);

    return (
      <div style={{ width: '100%', height: '98vh', backgroundColor: 'yellow' }}>
        <svg viewBox={`0 0 ${mx[0] + 40} ${mx[1] + 30}`} style={{ width: '100%', height: '98vh', backgroundColor: 'yellow' }}>
          {nodeArray.slice(0, 7).map((value, index) => (
            <g key={index}>
              <circle cx={nodes[value][0]} cy={nodes[value][1]} r="10" stroke="black" fill="none" strokeWidth={1} />
              <text
                x={nodes[value][0]}
                y={nodes[value][1]}
                className="sc-dmlrTW guKkvw"
                style={{
                    transform: 'scale(1)',
                    transformOrigin: 'center center',
                    transformBox: 'fill-box',
                    textAnchor: 'middle',
                    alignmentBaseline: 'central',
                }}
              >{nodes[value][2]}
              </text>
            </g>
          ))}

        </svg>

      </div>
    );
}

export default Nodes;
