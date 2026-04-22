import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import { X, Network, Link as LinkIcon, Info } from 'lucide-react';
import { MathTopic } from '../types';

interface DependencyMapProps {
  topics: MathTopic[];
  onClose: () => void;
}

export default function DependencyMap({ topics, onClose }: DependencyMapProps) {
  // Simple layout calculation: group by category
  const categories = useMemo(() => {
    const groups: { [key: string]: MathTopic[] } = {};
    topics.forEach(t => {
      if (!groups[t.category]) groups[t.category] = [];
      groups[t.category].push(t);
    });
    return groups;
  }, [topics]);

  const categoryOrder = [
    'Foundation', 'Algebra', 'Analysis', 
    'Geometry & Topology', 'Discrete & Numbers', 
    'Probability & Data', 'Applied Math', 'Meta-Mathematics'
  ];

  // Map topic ID to its center position for drawing lines
  const topicPositions = useMemo(() => {
    const positions: { [id: string]: { x: number; y: number } } = {};
    const colWidth = 300; // Increased spacing
    const nodeHeight = 70; // h-16 (64px) + gap
    const headerHeight = 80;
    const padding = 80;

    categoryOrder.forEach((cat, colIdx) => {
      const catTopics = categories[cat] || [];
      catTopics.forEach((topic, rowIdx) => {
        // EXACT UI MATCH:
        // x: outer offset (80) + col spacing (300)
        // y: header (40) + margin (48) + row spacing (h-16(64) + space-y-4(16) = 80)
        positions[topic.id] = {
          x: colIdx * 300 + 80,
          y: rowIdx * 80 + 88
        };
      });
    });
    return positions;
  }, [categories]);

  const renderLink = (preId: string, topicId: string) => {
    const start = topicPositions[preId];
    const end = topicPositions[topicId];
    if (!start || !end) return null;

    // Node is 192px wide (w-48), 64px high (h-16)
    const startX = start.x + 192;
    const startY = start.y + 32; 
    const endX = end.x;
    const endY = end.y + 32;

    const midX = (startX + endX) / 2;

    const pathData = `M ${startX} ${startY} C ${midX} ${startY}, ${midX} ${endY}, ${endX} ${endY}`;

    return (
      <g key={`${preId}-${topicId}`}>
        <defs>
          <linearGradient id={`grad-${preId}-${topicId}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        <path
          d={pathData}
          fill="none"
          stroke={`url(#grad-${preId}-${topicId})`}
          strokeWidth="1.5"
          className="transition-all duration-500 hover:stroke-cyan-400 hover:stroke-[3]"
        />
        <circle cx={startX} cy={startY} r="2" fill="#22d3ee" />
        <circle cx={endX} cy={endY} r="2" fill="#22d3ee" />
      </g>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] bg-slate-950 flex flex-col"
    >
      <header className="h-20 border-b border-slate-800 flex items-center justify-between px-8 bg-slate-900/50 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
            <Network className="w-5 h-5 text-cyan-400" />
          </div>
          <div>
            <h2 className="text-white font-black uppercase tracking-widest text-sm italic">Prerequisite Topology</h2>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Visualizing the logical threads of mathematics</p>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="p-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition-all active:scale-95 border border-slate-700 shadow-xl"
        >
          <X className="w-5 h-5" />
        </button>
      </header>

      <main className="flex-1 overflow-auto relative custom-scrollbar p-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-slate-900/50">
        <div className="min-w-[2600px] min-h-[1200px] relative">
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {topics.map(topic => 
              topic.prerequisites.map(preId => renderLink(preId, topic.id))
            )}
          </svg>

          {categoryOrder.map((cat, colIdx) => (
            <div key={cat} className="absolute" style={{ left: colIdx * 300 + 80 }}>
              <div className="mb-12 h-10 px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center">
                <span className="text-[9px] font-black text-cyan-500 uppercase tracking-[0.4em] whitespace-nowrap">{cat}</span>
              </div>
              <div className="space-y-4">
                {(categories[cat] || []).map(topic => (
                  <div
                    key={topic.id}
                    className="w-48 h-16 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl hover:border-cyan-500/50 transition-all group backdrop-blur-sm relative"
                  >
                    <div className="flex items-center gap-2 mb-1.5 overflow-hidden">
                      <LinkIcon className="w-2.5 h-2.5 text-cyan-400 opacity-50 group-hover:opacity-100 flex-shrink-0" />
                      <span className="text-[8px] font-black text-slate-600 uppercase tracking-widest truncate">{topic.id}</span>
                    </div>
                    <h3 className="text-[11px] font-bold text-slate-200 tracking-tight leading-4 line-clamp-2">{topic.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="h-12 border-t border-slate-800/50 bg-slate-900/80 backdrop-blur-md px-8 flex items-center justify-between">
        <div className="flex items-center gap-2 text-[9px] font-bold text-slate-600 uppercase tracking-widest">
          <Info className="w-3 h-3" />
          <span>Nodes represent topics • Lines represent prerequisite dependencies</span>
        </div>
        <div className="text-[9px] font-black text-cyan-500/50 uppercase tracking-[0.2em]">
          TOPOGRAPHY ENGINE V2
        </div>
      </footer>
    </motion.div>
  );
}
