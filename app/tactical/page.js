"use client";

import { useCallback } from "react";
import { ReactFlow, Background, Controls, useNodesState } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import PlayerNode from "../components/PlayerNode";

const nodeTypes = {
  playerNode: PlayerNode,
};

const initialNodes = [
  // Goalkeeper
  { id: "1", type: "playerNode", position: { x: 280, y: 500 }, data: { name: "Sanchez", number: 1 } },

  // Defenders
  { id: "2", type: "playerNode", position: { x: 100, y: 380 }, data: { name: "Cucurella", number: 3 } },
  { id: "3", type: "playerNode", position: { x: 220, y: 380 }, data: { name: "Colwill", number: 26 } },
  { id: "4", type: "playerNode", position: { x: 340, y: 380 }, data: { name: "Fofana", number: 33 } },
  { id: "5", type: "playerNode", position: { x: 460, y: 380 }, data: { name: "James", number: 24 } },

  // Midfielders
  { id: "6", type: "playerNode", position: { x: 150, y: 260 }, data: { name: "Caicedo", number: 25 } },
  { id: "7", type: "playerNode", position: { x: 280, y: 240 }, data: { name: "Fernandez", number: 8 } },
  { id: "8", type: "playerNode", position: { x: 410, y: 260 }, data: { name: "Palmer", number: 20 } },

  // Forwards
  { id: "9", type: "playerNode", position: { x: 150, y: 120 }, data: { name: "Sancho", number: 7 } },
  { id: "10", type: "playerNode", position: { x: 280, y: 100 }, data: { name: "Jackson", number: 15 } },
  { id: "11", type: "playerNode", position: { x: 410, y: 120 }, data: { name: "Neto", number: 17 } },
];

export default function TacticalPage() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);

  const onNodeDragStop = useCallback((event, node) => {
    console.log("Player moved:", node.data.name, node.position);
  }, []);

  return (
    <main className="flex-1 bg-gray-950 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-2 text-[#034694]">
        Tactical Timeline Builder
      </h1>
      <p className="text-center text-gray-400 mb-6">
        Drag players to build your Chelsea formation
      </p>

      <div className="max-w-3xl mx-auto rounded-xl overflow-hidden border border-gray-700" style={{ height: "600px", background: "#2d6a2d" }}>
        <ReactFlow
          nodes={nodes}
          onNodesChange={onNodesChange}
          onNodeDragStop={onNodeDragStop}
          nodeTypes={nodeTypes}
          fitView
        >
          <Background color="#3a7a3a" gap={40} />
          <Controls />
        </ReactFlow>
      </div>
    </main>
  );
}