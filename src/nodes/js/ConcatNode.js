import React, { useState } from 'react';
import BaseNode from './BaseNode';
import "../css/BaseNode.css"

const ConcatNode = ({ id, data }) => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  console.log("id is ",id,"data is ",data)

  const content = (
    <div>
      <input
        className='input_section'
        type="text"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
        placeholder="Input 1"
      />
      <input
       className='input_section'
        type="text"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
        placeholder="Input 2"
      />
      <div className='result'>Result: {input1 + input2}</div>
    </div>
  );

  const handles = [
    { type: 'target', position: 'left', id: 'input-1', style: { top: '20%' } },
    { type: 'target', position: 'left', id: 'input-2', style: { top: '50%' } },
    { type: 'source', position: 'right', id: 'output-1', style: { top: '50%' } },
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      content={content}
      handles={handles}
      style={{ width: 270, height: 'fit-content', border: '1px solid black' }}
    />
  );
};

export default ConcatNode;
