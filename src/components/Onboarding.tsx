import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Sparkles, Upload, ArrowRight, Brain, Zap } from 'lucide-react';
import { UserStats } from '../types';

interface OnboardingProps {
  onComplete: (name: string, stats?: UserStats) => void;
}

export default function Onboarding({ onComplete }: OnboardingProps) {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const stats = JSON.parse(event.target?.result as string);
          onComplete(stats.name || 'Mathematician', stats);
        } catch (err) {
          alert('Invalid JSON file');
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-slate-950 flex items-center justify-center p-6 overflow-y-auto">
      <div className="max-w-2xl w-full">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center space-y-8"
            >
              <div className="flex justify-center">
                <div className="w-20 h-20 bg-cyan-500/10 rounded-3xl flex items-center justify-center border border-cyan-500/20 shadow-[0_0_50px_rgba(6,182,212,0.15)]">
                  <Brain className="w-10 h-10 text-cyan-400" />
                </div>
              </div>
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-5xl font-light text-white tracking-tighter leading-tight uppercase">
                  Welcome to<br />
                  The <span className="line-through text-slate-600 decoration-cyan-500/50 decoration-[6px]">lazy</span> <span className="font-black text-cyan-400 italic text-5xl sm:text-7xl block sm:inline mt-2 sm:mt-0">mathematician</span>
                </h1>
                <p className="text-slate-400 text-lg leading-relaxed max-w-md mx-auto pt-4">
                  Mathematics is not a collection of facts, but a <span className="text-slate-200 font-bold italic">landscape of discovery</span>. We are here to map it for you.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <button
                  onClick={() => setStep(2)}
                  className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full font-black uppercase tracking-widest text-xs transition-all shadow-xl shadow-cyan-900/20 active:scale-95 flex items-center justify-center gap-2"
                >
                  Initiate Learning
                  <ArrowRight className="w-4 h-4" />
                </button>
                <label className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-slate-400 rounded-full font-black uppercase tracking-widest text-xs transition-all border border-slate-800 cursor-pointer flex items-center justify-center gap-2">
                  <Upload className="w-4 h-4" />
                  Restore Vault
                  <input type="file" className="hidden" accept=".json" onChange={handleImport} />
                </label>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-12"
            >
              <div className="space-y-4 text-center sm:text-left">
                <h2 className="text-3xl font-black text-white uppercase italic">Define your identity</h2>
                <p className="text-slate-400">How should the system address you in the topography?</p>
              </div>
              
              <div className="relative">
                <input
                  autoFocus
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your handle..."
                  className="w-full bg-slate-900/50 border-b-2 border-slate-800 focus:border-cyan-500 py-6 px-4 text-2xl font-bold text-white outline-none transition-all placeholder:text-slate-700 uppercase tracking-tight"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-3">
                  <Shield className="w-6 h-6 text-emerald-400" />
                  <h3 className="text-xs font-black text-white uppercase tracking-widest">Anchored Mastery</h3>
                  <p className="text-[10px] text-slate-500 leading-relaxed uppercase font-bold">Topics must be unlocked through prerequisites. No shortcuts in logic.</p>
                </div>
                <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-3">
                  <Zap className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-xs font-black text-white uppercase tracking-widest">Knowledge Bounty</h3>
                  <p className="text-[10px] text-slate-500 leading-relaxed uppercase font-bold">Gain XP by passing rigorous investigations. Level up your rank.</p>
                </div>
                <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-3">
                  <Sparkles className="w-6 h-6 text-amber-400" />
                  <h3 className="text-xs font-black text-white uppercase tracking-widest">Sleek Interface</h3>
                  <p className="text-[10px] text-slate-500 leading-relaxed uppercase font-bold">Navigate the map with precision. Visualize dependencies in real-time.</p>
                </div>
              </div>

              <button
                onClick={() => name.length > 0 && onComplete(name)}
                disabled={name.length === 0}
                className="w-full py-5 bg-white text-slate-950 rounded-2xl font-black uppercase tracking-[0.2em] text-sm transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:grayscale disabled:cursor-not-allowed shadow-2xl flex items-center justify-center gap-3"
              >
                Enter the Topography
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
