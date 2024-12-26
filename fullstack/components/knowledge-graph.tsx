'use client'

import React, { useCallback } from 'react'
import ReactFlow, {
  Node,
  Edge,
  ConnectionLineType,
  useNodesState,
  useEdgesState,
  Background,
  Controls,
} from 'reactflow'
import 'reactflow/dist/style.css'

interface KnowledgeGraphProps {
  data: { title: string; content: string }[]
}

const nodeWidth = 250
const nodeHeight = 200

const KnowledgeGraph: React.FC<KnowledgeGraphProps> = ({ data }) => {
  const initialNodes: Node[] = data.map((item, index) => ({
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
  }))

  const initialEdges: Edge[] = data.slice(1).map((_, index) => ({
    id: `edge-${index}`,
    source: `node-${index}`,
    target: `node-${index + 1}`,
    type: 'smoothstep',
    animated: true,
  }))

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const onConnect = useCallback((params: any) => setEdges((eds) => addEdge(params, eds)), [setEdges])

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
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  )
}

export default KnowledgeGraph

