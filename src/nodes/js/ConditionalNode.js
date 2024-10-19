import React, { useState } from 'react';
import BaseNode from './BaseNode';

const ConditionalNode = ({ id, data }) => {
  const [condition, setCondition] = useState("true");

  const content = (
    <div>
      <label>Condition (true/false):</label>
      <input type="text" value={condition} onChange={(e) => setCondition(e.target.value)} />
      <div>Result: {condition ? "True" : "False"}</div>
    </div>
  );

  const handles = [
    { type: 'target', position: 'left', id: 'input-1', style: { top: '50%' } },
    { type: 'source', position: 'right', id: 'output-1', style: { top: '50%' } },
  ];

  return (
    <BaseNode id={id} data={data} content={content} handles={handles} style={{ width: 200, height: 100, border: '1px solid black' }} />
  );
};

export default ConditionalNode;
