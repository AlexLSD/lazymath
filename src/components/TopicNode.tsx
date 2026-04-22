import React from 'react';
import { motion } from 'motion/react';
import { MathTopic } from '../types';
import { Lock, Unlock, CheckCircle2, BookOpen } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface TopicNodeProps {
  topic: MathTopic;
  isCompleted: boolean;
  isUnlocked: boolean;
  onClick: (topic: MathTopic) => void;
  prerequisiteNames: string[];
  key?: string | number;
}

export default function TopicNode({ topic, isCompleted, isUnlocked, onClick, prerequisiteNames }: TopicNodeProps) {
  const [showMobileTooltip, setShowMobileTooltip] = React.useState(false);

  const handleInteraction = () => {
    if (isUnlocked) {
      onClick(topic);
    } else {
      setShowMobileTooltip(!showMobileTooltip);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="relative flex flex-col items-center group cursor-pointer"
      onPointerLeave={() => setShowMobileTooltip(false)}
    >
      {/* Tooltip - Visible on hover (desktop) or showMobileTooltip (mobile) */}
      {!isUnlocked && prerequisiteNames.length > 0 && (
        <div className={cn(
          "absolute bottom-full mb-3 z-50 w-48 p-3 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl pointer-events-none transition-all",
          showMobileTooltip ? "block scale-100 opacity-100" : "hidden group-hover:block"
        )}>
          <div className="text-[10px] font-black text-cyan-400 uppercase tracking-widest mb-2">Required Anchors</div>
          <div className="flex flex-wrap gap-1.5">
            {prerequisiteNames.map(name => (
              <span key={name} className="text-[9px] font-bold text-slate-300 bg-slate-800 px-2 py-0.5 rounded border border-slate-700/50">
                {name}
              </span>
            ))}
          </div>
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-slate-700"></div>
        </div>
      )}
      
      <button
        onClick={handleInteraction}
        className={cn(
          "relative z-10 w-full p-5 rounded-2xl transition-all border text-left flex flex-col gap-1",
          isCompleted 
            ? "bg-cyan-500 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)] ring-2 ring-cyan-200/20"
            : isUnlocked
              ? "bg-slate-900 border-slate-800 hover:border-cyan-500 shadow-xl group-hover:scale-105 active:scale-95 group-hover:shadow-cyan-900/10"
              : "bg-slate-900/50 border-slate-800 opacity-40 grayscale cursor-not-allowed"
        )}
      >
        {isCompleted && (
          <span className="absolute -top-3 -right-3 w-7 h-7 bg-white text-cyan-600 rounded-full flex items-center justify-center font-bold text-xs shadow-md z-20">
            ✓
          </span>
        )}
        
        <div className="flex items-center gap-3 mb-1">
          <div className={cn(
            "w-8 h-8 rounded-lg flex items-center justify-center",
            isCompleted ? "bg-white/20" : isUnlocked ? "bg-slate-800" : "bg-slate-900"
          )}>
            {isCompleted ? (
              <CheckCircle2 className="w-5 h-5 text-white" />
            ) : isUnlocked ? (
              <BookOpen className="w-5 h-5 text-cyan-400" />
            ) : (
              <Lock className="w-5 h-5 text-slate-600" />
            )}
          </div>
          <span className={cn(
            "text-[10px] font-bold uppercase tracking-widest leading-none",
            isCompleted ? "text-slate-900" : "text-slate-500"
          )}>
            {topic.category}
          </span>
        </div>

        <h3 className={cn(
          "text-sm font-bold tracking-tight leading-tight",
          isCompleted ? "text-slate-950 font-black" : isUnlocked ? "text-slate-200" : "text-slate-600"
        )}>
          {topic.title}
        </h3>

        {isUnlocked && !isCompleted && (
          <div className="mt-3 w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
            <div className="h-full bg-cyan-500 w-1/4 animate-pulse"></div>
          </div>
        )}
      </button>
    </motion.div>
  );
}
