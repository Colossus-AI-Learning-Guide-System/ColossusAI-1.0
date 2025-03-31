'use client';

import React, { useEffect, useCallback } from 'react';
import ReactFlow, {
  Node,
  Edge,
  addEdge,
  ConnectionLineType,
import React, { useState } from 'react';
import ReactFlow, {
  Node,
  Edge,
  useNodesState,
  useEdgesState,
  Background,
  Controls,
} from 'reactflow';
import 'reactflow/dist/style.css';

interface KnowledgeGraphProps {
  data: { title: string; content: string }[];
}

const nodeWidth = 250;
const nodeHeight = 200;

const KnowledgeGraph: React.FC<KnowledgeGraphProps> = ({ data }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    const newNodes: Node[] = data.map((item, index) => ({
      id: `node-${index}`,
      type: 'default',
      data: { label: (
        <div className="p-2">
          <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
          <p className="text-sm">{item.content}</p>
        </div>
      ) },
      position: { x: 0, y: index * (nodeHeight + 50) },
      style: { width: nodeWidth, height: 'auto', padding: '10px', fontSize: '10px' },
const nodeHeight = 100;

const KnowledgeGraph: React.FC<KnowledgeGraphProps> = ({ data }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState<Node[]>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge[]>([]);
  const [expandedNodeId, setExpandedNodeId] = useState<string | null>(null);

  React.useEffect(() => {
    const newNodes: Node[] = data.map((item, index) => ({
      id: `node-${index}`,
      type: 'default',
      data: {
        label: (
          <div
            style={{ cursor: 'pointer' }}
            onClick={() => setExpandedNodeId(expandedNodeId === `node-${index}` ? null : `node-${index}`)}
          >
            <h3 style={{ fontWeight: 'bold' }}>{item.title}</h3>
            {expandedNodeId === `node-${index}` && (
              <p style={{ marginTop: '10px' }}>{item.content}</p>
            )}
          </div>
        ),
      },
      position: { x: 0, y: index * (nodeHeight + 50) },
      style: { width: nodeWidth, height: 'auto', padding: '10px' },
    }));

    const newEdges: Edge[] = data.slice(1).map((_, index) => ({
      id: `edge-${index}`,
      source: `node-${index}`,
      target: `node-${index + 1}`,
      type: 'smoothstep',
      animated: true,
    }));

    setNodes(newNodes);
    setEdges(newEdges);
  }, [data]);

  const onConnect = useCallback((params: any) => setEdges((eds) => addEdge(params, eds)), [setEdges]);
  }, [data, expandedNodeId]);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        connectionLineType={ConnectionLineType.SmoothStep}
        fitView
        className="bg-background"
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default KnowledgeGraph;




// 'use client';

// import React, { useState } from 'react';
// import ReactFlow, {
//   Node,
//   Edge,
//   useNodesState,
//   useEdgesState,
//   Background,
//   Controls,
// } from 'reactflow';
// import 'reactflow/dist/style.css';

// interface KnowledgeGraphProps {
//   data: { title: string; content: string }[];
// }

// const nodeWidth = 250;
// const nodeHeight = 100;

// const KnowledgeGraph: React.FC<KnowledgeGraphProps> = ({ data }) => {
//   const [nodes, setNodes, onNodesChange] = useNodesState<Node[]>([]);
//   const [edges, setEdges, onEdgesChange] = useEdgesState<Edge[]>([]);
//   const [expandedNodeId, setExpandedNodeId] = useState<string | null>(null);

//   React.useEffect(() => {
//     const newNodes: Node[] = data.map((item, index) => ({
//       id: `node-${index}`,
//       type: 'default',
//       data: {
//         label: (
//           <div
//             style={{ cursor: 'pointer' }}
//             onClick={() => setExpandedNodeId(expandedNodeId === `node-${index}` ? null : `node-${index}`)}
//           >
//             <h3 style={{ fontWeight: 'bold' }}>{item.title}</h3>
//             {expandedNodeId === `node-${index}` && (
//               <p style={{ marginTop: '10px' }}>{item.content}</p>
//             )}
//           </div>
//         ),
//       },
//       position: { x: 0, y: index * (nodeHeight + 50) },
//       style: { width: nodeWidth, height: 'auto', padding: '10px' },
//     }));

//     const newEdges: Edge[] = data.slice(1).map((_, index) => ({
//       id: `edge-${index}`,
//       source: `node-${index}`,
//       target: `node-${index + 1}`,
//       type: 'smoothstep',
//       animated: true,
//     }));

//     setNodes(newNodes);
//     setEdges(newEdges);
//   }, [data, expandedNodeId]);

//   return (
//     <div style={{ width: '100%', height: '100%' }}>
//       <ReactFlow
//         nodes={nodes}
//         edges={edges}
//         onNodesChange={onNodesChange}
//         onEdgesChange={onEdgesChange}
//         fitView
//       >
//         <Background />
//         <Controls />
//       </ReactFlow>
//     </div>
//   );
// };

// export default KnowledgeGraph;
