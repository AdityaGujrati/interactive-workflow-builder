// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div style={{ padding: '10px' }}>
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='mathNode' label='mathNode' />
                <DraggableNode type='concatNode' label='Concat Node' />
            </div>
        </div>
    );
};
