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
    const colWidth = 250;
    const rowHeight = 100;
    const padding = 50;

    categoryOrder.forEach((cat, colIdx) => {
      const catTopics = categories[cat] || [];
      catTopics.forEach((topic, rowIdx) => {
        positions[topic.id] = {
          x: colIdx * colWidth + padding,
          y: rowIdx * rowHeight + padding + 50
        };
      });
    });
    return positions;
  }, [categories]);

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
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Visualizing the threads of discovery</p>
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
        <div className="min-w-[2000px] min-h-[1000px] relative">
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
            {topics.map(topic => 
              topic.prerequisites.map(preId => {
                const start = topicPositions[preId];
                const end = topicPositions[topic.id];
                if (!start || !end) return null;
                
                return (
                  <line
                    key={`${preId}-${topic.id}`}
                    x1={start.x + 80} // Offset from node center
                    y1={start.y}
                    x2={end.x}
                    y2={end.y}
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-cyan-500/50"
                  />
                );
              })
            )}
          </svg>

          {categoryOrder.map((cat, colIdx) => (
            <div key={cat} className="absolute" style={{ left: colIdx * 250 + 50 }}>
              <div className="mb-8 px-3 py-1 bg-slate-900 border border-slate-800 rounded-md inline-block">
                <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em]">{cat}</span>
              </div>
              <div className="space-y-4">
                {(categories[cat] || []).map(topic => (
                  <div
                    key={topic.id}
                    className="w-48 p-3 rounded-xl bg-slate-900 border border-slate-800 shadow-xl hover:border-cyan-500/50 transition-all group"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <LinkIcon className="w-2.5 h-2.5 text-cyan-400 opacity-50 group-hover:opacity-100" />
                      <span className="text-[8px] font-black text-slate-600 uppercase tracking-widest">{topic.id}</span>
                    </div>
                    <h3 className="text-[11px] font-bold text-slate-200 tracking-tight leading-none truncate">{topic.title}</h3>
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
