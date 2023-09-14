/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import LinkedLine from './LinkedLine';
import Node from './Node';

export default function Recursive() {
    // const [values, setValue] = useState([]);
    const [range, setRange] = useState(1);
    const positions = [];
    const mx = [0, 20];
    const num = 7;
    const nodes = {};
    const nodeArray = [];

    function fb(n, d, path) {
        if (n === 1 || n === 0) {
          nodeArray.push(path);
          nodes[path] = [mx[0] + 20, d * 30, n];
          positions.push([mx[0] + 20, d * 30, n]);
          mx[0] += 20;
          mx[1] = Math.max(mx[1], d * 30);
          return mx[0];
        }
        nodeArray.push(path);
        const l = fb(n - 1, d + 1, `${path}L`);
        nodeArray.push(path);
        const r = fb(n - 2, d + 1, `${path}R`);
        positions.push([(l + r) / 2, d * 30, n]);
        nodes[path] = [(l + r) / 2, d * 30, n];
        nodeArray.push(path);
        return (l + r) / 2;
    }

    fb(num, 1, 'R');

    useEffect(() => {
    //   setValue(positions);
    }, []);

    const handleChangePlus = () => {
      if (range === nodeArray) return;
        setRange((prev) => prev + 1);
    };
    const handleChangeMinus = () => {
      if (range === 0) return;
        setRange((prev) => prev - 1);
    };

    const edgesList = new Map();
    for (let index = 1; index < range; index += 1) {
      const x1 = nodes[nodeArray[index - 1]][0];
      const x2 = nodes[nodeArray[index - 0]][0];
      const y1 = nodes[nodeArray[index - 1]][1];
      const y2 = nodes[nodeArray[index - 0]][1];
      const edgeNumString = (x1 + y1 > x2 + y2) ? `${x1 + y1}${x2 + y2}` : `${x2 + y2}${x1 + y1}`;
      edgesList.set(edgeNumString, [x1, x2, y1, y2, index]);
    }
    console.log(edgesList);
    const tempEdges = [];
    edgesList.forEach((value, key) => {
      tempEdges.push(
        <LinkedLine
          key={key + value[4]}
          xy={key}
          x1={value[0]}
          x2={value[1]}
          y1={value[2]}
          y2={value[3]}
          index={value[4]}
        />,
      );
    });
    return (
      <div style={{ width: '100%', height: '90vh', backgroundColor: 'yellow' }}>
        <svg viewBox={`0 0 ${mx[0] + 30} ${mx[1] + 30}`} style={{ width: '100%', height: '100%', backgroundColor: 'yellow' }}>
          {nodeArray.slice(0, range).map((value, index) => (
            <Node key={index} value={value} nodes={nodes} nodeArray={nodeArray} />))}
          {tempEdges}
        </svg>
        <button type="button" name={1} onClick={handleChangePlus}>+</button>
        <button type="button" name={0} onClick={handleChangeMinus}>-</button>
      </div>
    );
}
