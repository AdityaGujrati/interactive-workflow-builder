import React, { useState } from 'react';
import BaseNode from './BaseNode';
import "../css/MathNode.css"
import "../css/BaseNode.css"

const MathOpNode = ({ id, data }) => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [operation, setOperation] = useState('+');

  const calculateResult = () => {
    switch (operation) {
      case '+':
        return value1 + value2;
      case '-':
        return value1 - value2;
      case '*':
        return value1 * value2;
      case '/':
        return value2 !== 0 ? value1 / value2 : 'Error';
      default:
        return 0;
    }
  };

  const content = (
    <div className='math-node'>
      <div>
        <input
         className='input_section'
          type="number"
          value={value1}
          onChange={(e) => setValue1(+e.target.value)}
          placeholder="Value 1"
        />
      </div>
      <div >
        <select className='result'
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
        >
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
      </div>
      <div>
        <input
          type="number"
          value={value2}
          onChange={(e) => setValue2(+e.target.value)}
          placeholder="Value 2"
        />
      </div>

      <div className='result'> Result: {calculateResult()}</div>
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
      style={{ width: 368, height: 'fit-content', border: '1px solid black' }}
    />
  );
};

export default MathOpNode;
