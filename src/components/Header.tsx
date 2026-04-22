import React from 'react';
import { motion } from 'motion/react';
import { UserStats, getRank } from '../types';
import { Trophy, Star, Zap, Save, Upload, Target, Sparkles } from 'lucide-react';

interface SidebarProps {
  stats: UserStats;
  onExport: () => void;
  onImport: () => void;
}

export default function Sidebar({ stats, onExport, onImport }: SidebarProps) {
  const currentRank = getRank(stats.level);
  
  return (
    <aside className="w-72 bg-slate-900/50 border-r border-slate-800 p-6 flex flex-col gap-8 h-full">
      {/* Profile Section */}
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 border-2 border-white/20 flex items-center justify-center text-2xl font-bold text-white shadow-lg overflow-hidden">
          <span className="font-serif">{stats.name.charAt(0) || 'Σ'}</span>
        </div>
        <div>
          <h2 className="font-bold text-lg text-white leading-none mb-1 truncate max-w-[150px]">{stats.name || 'Scholar'}</h2>
          <p className="text-[10px] text-cyan-400 uppercase tracking-widest font-black leading-none">
            {currentRank.split(' ')[1] || 'Scholar'} Rank
          </p>
        </div>
      </div>

      {/* Progress Section */}
      <div className="space-y-4 bg-slate-800/20 p-4 rounded-2xl border border-slate-800">
        <div className="flex justify-between text-[10px] font-black uppercase tracking-tighter text-slate-400">
          <span>Rank: {currentRank}</span>
          <span className="text-white">Level {stats.level}</span>
        </div>
        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${(stats.xp % 100) / 1}%` }}
            className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-[10px] text-slate-500 font-bold uppercase">
             <Zap className="w-3 h-3 text-cyan-400" />
             {stats.xp.toLocaleString()} XP
          </div>
          <p className="text-[10px] text-slate-500 font-bold uppercase tabular-nums">
            Next: {Math.ceil(stats.xp / 100) * 100}
          </p>
        </div>
      </div>

      {/* Quests Section */}
      <nav className="flex-1 space-y-2 overflow-y-auto pr-1">
        <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest px-2 mb-4 flex items-center gap-2">
          <Target className="w-3 h-3" />
          Active Quests
        </p>
        
        <div className="p-3 bg-slate-800/40 rounded-xl border border-slate-700/50 group hover:border-slate-600 transition-colors">
          <div className="flex items-center justify-between mb-1">
            <p className="font-bold text-slate-200 text-xs">The Contrapositive Path</p>
            <Sparkles className="w-3 h-3 text-cyan-500" />
          </div>
          <p className="text-[10px] text-slate-500 font-medium">Complete 3 Proof-based topics</p>
        </div>

        <div className="p-3 bg-cyan-500/5 rounded-xl border border-cyan-500/20 group hover:border-cyan-500/40 transition-colors">
          <p className="font-bold text-cyan-400 text-xs italic">Challenge: Zero to Euler</p>
          <p className="text-[10px] text-cyan-300/60 mt-1 font-medium">Finish Complex Analysis in 24h</p>
        </div>

        <div className="mt-8 space-y-1">
          <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest px-2 mb-3">Settings</p>
          <button 
            onClick={onImport}
            className="w-full p-2.5 rounded-lg bg-slate-800/50 text-[10px] font-black uppercase text-slate-400 hover:text-white hover:bg-slate-700 transition-all flex items-center gap-2"
          >
            <Upload className="w-3.5 h-3.5" />
            Import Roadmap
          </button>
          <button 
            onClick={onExport}
            className="w-full p-2.5 rounded-lg bg-slate-800/50 text-[10px] font-black uppercase text-slate-400 hover:text-white hover:bg-slate-700 transition-all flex items-center gap-2"
          >
            <Save className="w-3.5 h-3.5" />
            Export Vault
          </button>
        </div>
      </nav>
      
      <div className="text-[9px] text-slate-700 font-black uppercase tracking-[0.2em] text-center">
        The Mathematician OS v3.1.0
      </div>
    </aside>
  );
}
