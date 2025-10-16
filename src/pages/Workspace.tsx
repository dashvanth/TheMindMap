import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  Node,
  Edge,
  addEdge,
  Connection,
  useNodesState,
  useEdgesState,
} from "reactflow";
import "reactflow/dist/style.css";
import {
  Upload,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Save,
  Share2,
  Volume2,
  BookOpen,
  Lightbulb,
  AlertCircle,
  Calculator,
  Copy,
  Download,
} from "lucide-react";

// Custom node types
const nodeTypes = {
  definition: ({ data }: { data: any }) => (
    <div className="glass-panel px-4 py-3 rounded-xl border-2 border-green-500/50 min-w-[200px] hover:scale-110 transition-all neon-glow">
      <div className="flex items-start gap-2">
        <BookOpen className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
        <div>
          <p className="font-semibold text-sm mb-1">{data.label}</p>
          <p className="text-xs text-muted-foreground">{data.summary}</p>
          {data.difficulty && (
            <div className="mt-2 flex items-center gap-2">
              <div className="h-1 flex-1 rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-green-500"
                  style={{ width: `${data.difficulty}%` }}
                />
              </div>
              <span className="text-xs">{data.difficulty}%</span>
            </div>
          )}
        </div>
      </div>
    </div>
  ),
  warning: ({ data }: { data: any }) => (
    <div className="glass-panel px-4 py-3 rounded-full border-2 border-red-500/50 min-w-[180px] hover:scale-110 transition-all neon-glow">
      <div className="flex items-center gap-2">
        <AlertCircle className="h-4 w-4 text-red-400 flex-shrink-0" />
        <p className="font-semibold text-sm">{data.label}</p>
      </div>
    </div>
  ),
  formula: ({ data }: { data: any }) => (
    <div className="glass-panel px-4 py-3 rounded-lg border-2 border-blue-500/50 min-w-[200px] hover:scale-110 transition-all neon-glow">
      <div className="flex items-start gap-2">
        <Calculator className="h-4 w-4 text-blue-400 flex-shrink-0 mt-0.5" />
        <div>
          <p className="font-semibold text-sm mb-1">{data.label}</p>
          {data.formula && (
            <code className="text-xs bg-background/50 px-2 py-1 rounded">{data.formula}</code>
          )}
        </div>
      </div>
    </div>
  ),
  concept: ({ data }: { data: any }) => (
    <div className="glass-panel px-4 py-3 rounded-xl border-2 border-primary/50 min-w-[200px] hover:scale-110 transition-all">
      <div className="flex items-start gap-2">
        <Lightbulb className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
        <p className="font-semibold text-sm">{data.label}</p>
      </div>
    </div>
  ),
};

// Sample data
const initialNodes: Node[] = [
  {
    id: "1",
    type: "concept",
    position: { x: 400, y: 100 },
    data: { label: "Quantum Mechanics" },
  },
  {
    id: "2",
    type: "definition",
    position: { x: 200, y: 250 },
    data: {
      label: "Wave-Particle Duality",
      summary: "Matter exhibits both wave and particle properties",
      difficulty: 65,
    },
  },
  {
    id: "3",
    type: "formula",
    position: { x: 600, y: 250 },
    data: {
      label: "Schrödinger Equation",
      formula: "iℏ∂ψ/∂t = Hψ",
    },
  },
  {
    id: "4",
    type: "warning",
    position: { x: 400, y: 400 },
    data: { label: "Uncertainty Principle" },
  },
  {
    id: "5",
    type: "definition",
    position: { x: 100, y: 400 },
    data: {
      label: "Quantum States",
      summary: "Discrete energy levels in quantum systems",
      difficulty: 45,
    },
  },
];

const initialEdges: Edge[] = [
  { id: "e1-2", source: "1", target: "2", animated: true, style: { stroke: "#a855f7" } },
  { id: "e1-3", source: "1", target: "3", animated: true, style: { stroke: "#22d3ee" } },
  { id: "e1-4", source: "1", target: "4", animated: true, style: { stroke: "#ec4899" } },
  { id: "e2-5", source: "2", target: "5", animated: true, style: { stroke: "#a855f7" } },
];

export default function Workspace() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);

  const onConnect = useCallback(
    (connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  const handleNodeClick = useCallback((_event: React.MouseEvent, node: Node) => {
    setSelectedNode(node);
  }, []);

  return (
    <div className="h-screen flex flex-col">
      {/* Toolbar */}
      <div className="glass-panel border-b border-border/40 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold">Quantum Mechanics - Chapter 1</h1>
            <span className="text-xs text-muted-foreground">Last saved: just now</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              <Save className="h-4 w-4 mr-2" />
              Save
            </Button>
            <Button variant="ghost" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button variant="hero" size="sm">
              <Upload className="h-4 w-4 mr-2" />
              Upload PDF
            </Button>
          </div>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Main Canvas */}
        <div className="flex-1 relative">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onNodeClick={handleNodeClick}
            nodeTypes={nodeTypes}
            fitView
            className="bg-background"
          >
            <Background className="opacity-20" />
            <Controls className="glass-panel" />
            <MiniMap
              className="glass-panel"
              nodeColor={(node) => {
                switch (node.type) {
                  case "definition":
                    return "#22c55e";
                  case "warning":
                    return "#ef4444";
                  case "formula":
                    return "#3b82f6";
                  default:
                    return "#a855f7";
                }
              }}
            />
          </ReactFlow>

          {/* Floating Action Buttons */}
          <div className="absolute bottom-6 left-6 flex flex-col gap-2">
            <Button variant="glass" size="icon" className="rounded-full">
              <ZoomIn className="h-4 w-4" />
            </Button>
            <Button variant="glass" size="icon" className="rounded-full">
              <ZoomOut className="h-4 w-4" />
            </Button>
            <Button variant="glass" size="icon" className="rounded-full">
              <Maximize2 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Right Sidebar - Summary Panel */}
        <motion.div
          initial={{ x: 400 }}
          animate={{ x: 0 }}
          className="w-96 glass-panel border-l border-border/40 flex flex-col overflow-hidden"
        >
          <div className="p-6 border-b border-border/40">
            <h2 className="text-xl font-bold mb-2">
              {selectedNode ? selectedNode.data.label : "Summary Panel"}
            </h2>
            {selectedNode && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="capitalize">{selectedNode.type}</span>
                {selectedNode.data.difficulty && (
                  <>
                    <span>•</span>
                    <span>Difficulty: {selectedNode.data.difficulty}%</span>
                  </>
                )}
              </div>
            )}
          </div>

          <div className="flex-1 overflow-auto p-6 space-y-6">
            {selectedNode ? (
              <>
                {/* Summary Modes */}
                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    Summary Modes
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {["Quick", "Detailed", "Exam", "ELI5"].map((mode) => (
                      <Button
                        key={mode}
                        variant={mode === "Quick" ? "default" : "glass"}
                        size="sm"
                        className="text-xs"
                      >
                        {mode}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* TL;DR */}
                <Card className="glass-panel p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-sm">TL;DR</h4>
                    <Button variant="ghost" size="icon" className="h-6 w-6">
                      <Copy className="h-3 w-3" />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {selectedNode.data.summary ||
                      "This concept describes a fundamental principle in quantum mechanics where particles can exist in multiple states simultaneously."}
                  </p>
                </Card>

                {/* Detailed Explanation */}
                <div>
                  <h4 className="font-semibold mb-2 text-sm">Detailed Explanation</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>
                      A comprehensive breakdown of the concept with multiple perspectives and
                      practical examples.
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Key principle one</li>
                      <li>Important relationship</li>
                      <li>Common application</li>
                    </ul>
                  </div>
                </div>

                {/* Voice Controls */}
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Volume2 className="h-4 w-4" />
                    Voice Assistant
                  </h4>
                  <Button variant="neon" className="w-full">
                    <Volume2 className="h-4 w-4 mr-2" />
                    Narrate
                  </Button>
                  <div className="mt-3 flex items-center gap-4">
                    <select className="flex-1 glass-panel rounded-lg px-3 py-2 text-sm bg-background/50">
                      <option>Neural Voice</option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                    <select className="glass-panel rounded-lg px-3 py-2 text-sm bg-background/50">
                      <option>1.0x</option>
                      <option>0.75x</option>
                      <option>1.5x</option>
                    </select>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="glass" size="sm">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Save Note
                  </Button>
                  <Button variant="glass" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground">
                <Lightbulb className="h-12 w-12 mb-4 opacity-50" />
                <p>Select a node to view its summary and details</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
