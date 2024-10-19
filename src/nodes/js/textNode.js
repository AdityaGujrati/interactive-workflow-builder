import React, { useState, useEffect } from 'react';
import BaseNode from './BaseNode';

const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || '');
  const [handles, setHandles] = useState([]);
  const [nodeSize, setNodeSize] = useState({ width: 200, height: 200 });

  useEffect(() => {
    // Adjust the size of the node based on text length
    const textLength = text.length;
    const newWidth = Math.min(Math.max(200, textLength * 8), 400); // Width grows with text length
    const newHeight = Math.min(Math.max(100, text.split('\n').length * 50), 3000); // Height grows with line count
    setNodeSize({ width: newWidth, height: newHeight });

    // Regex to find all variables in the form of {{ variableName }}
    const variableRegex = /\{\{\s*(\w+)\s*\}\}/g;
    const matchedVariables = [...text.matchAll(variableRegex)].map(match => match[1]);

    // Create handles for each detected variable
    const newHandles = matchedVariables.map((variable, index) => ({
      type: 'target',
      position: 'left',
      id: `input-${variable}`,
      style: { top: `${(index + 1) * 30}px` },
    }));

    setHandles(newHandles);
  }, [text]);

  const content = (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text here..."
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );

  return (
    <BaseNode
      id={id}
      data={data}
      content={content}
      handles={[...handles, { type: 'source', position: 'right', id: 'output-1', style: { top: '50%' } }]}
      style={{ width: nodeSize.width, height: nodeSize.height, border: '1px solid black' }}
    />
  );
};

export default TextNode;
