import React from 'react';
import { Handle } from 'reactflow';
import '../css/BaseNode.css';

const BaseNode = ({ id, data, content, handles, style }) => {
  return (
    <div className="base-node" style={style}>
      <div className="node-header">
        <strong>{data.nodeType || 'dfd'}</strong>
      </div>
      <div className="node-body">
        {content}
      </div>
      <div className="node-handles">
        {handles && handles.map((handle, index) => (
          <Handle
            key={index}
            type={handle.type}
            position={handle.position}
            id={handle.id}
            style={handle.style}
          />
        ))}
      </div>
    </div>
  );
};

export default BaseNode;
