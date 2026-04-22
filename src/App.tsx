import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import JSConfetti from 'js-confetti';
import { 
  MathTopic, 
  UserStats, 
  calculateLevel, 
  getRank 
} from './types';
import { MATH_TOPICS } from './data/topics';
import Sidebar from './components/Header'; // Using the Sidebar component
import TopicNode from './components/TopicNode';
import InvestigationModal from './components/InvestigationModal';
import Onboarding from './components/Onboarding';
import DependencyMap from './components/DependencyMap';
import { 
  ShieldAlert, 
  Download, 
  Layers,
  Search,
  BookOpen,
  ArrowRight,
  TrendingUp,
  Layout,
  Zap,
  Menu,
  X,
  Network,
  Trophy
} from 'lucide-react';

const STORAGE_KEY = 'axiom_math_user_v1';

const INITIAL_STATS: UserStats = {
  name: '',
  xp: 0,
  level: 1,
  rank: 'Novice Numerician',
  completedTopicIds: [],
  checkedItemIds: [],
  lastImportDate: null
};

export default function App() {
  const [stats, setStats] = useState<UserStats>(INITIAL_STATS);
  const [selectedTopic, setSelectedTopic] = useState<MathTopic | null>(null);
  const [showInvestigation, setShowInvestigation] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showDependencyMap, setShowDependencyMap] = useState(false);
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const [justUnlocked, setJustUnlocked] = useState<MathTopic[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [confetti] = useState(() => new JSConfetti());

  // PERSISTENCE
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setStats({
          ...INITIAL_STATS,
          ...parsed,
          checkedItemIds: parsed.checkedItemIds || []
        });
        if (!parsed.name) setShowOnboarding(true);
      } catch (e) {
        console.error('Failed to load stats', e);
        setShowOnboarding(true);
      }
    } else {
      setShowOnboarding(true);
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
    }
  }, [stats, isLoaded]);

  // LOGIC
  const handleOnboardingComplete = (name: string, importedStats?: UserStats) => {
    if (importedStats) {
      setStats({ ...importedStats, lastImportDate: new Date().toISOString() });
    } else {
      setStats(prev => ({ ...prev, name }));
    }
    setShowOnboarding(false);
  };
  const toggleItem = (itemId: string) => {
    setStats(prev => {
      const isChecked = prev.checkedItemIds.includes(itemId);
      const newChecked = isChecked 
        ? prev.checkedItemIds.filter(id => id !== itemId)
        : [...prev.checkedItemIds, itemId];
      return { ...prev, checkedItemIds: newChecked };
    });
  };
  const isTopicUnlocked = (topic: MathTopic, completedIds = stats.completedTopicIds) => {
    if (topic.prerequisites.length === 0) return true;
    return topic.prerequisites.every(id => completedIds.includes(id));
  };

  const categories = useMemo(() => {
    const groups: { [key: string]: MathTopic[] } = {};
    MATH_TOPICS.forEach(topic => {
      if (!groups[topic.category]) groups[topic.category] = [];
      groups[topic.category].push(topic);
    });
    return groups;
  }, []);

  const handleCompleteTopic = () => {
    if (!selectedTopic) return;
    
    const newXP = stats.xp + selectedTopic.xpValue;
    const newLevel = calculateLevel(newXP);
    const newRank = getRank(newLevel);
    
    const upgraded = newLevel > stats.level;
    const newCompletedIds = [...stats.completedTopicIds, selectedTopic.id];

    // Find what we just unlocked
    const unlockedNow = MATH_TOPICS.filter(t => 
      !stats.completedTopicIds.includes(t.id) && 
      t.id !== selectedTopic.id &&
      !isTopicUnlocked(t, stats.completedTopicIds) && // Was locked
      isTopicUnlocked(t, newCompletedIds) // Is now unlocked
    );

    setStats(prev => ({
      ...prev,
      xp: newXP,
      level: newLevel,
      rank: newRank,
      completedTopicIds: newCompletedIds
    }));

    confetti.addConfetti({
      emojis: ['💎', '⚡', '✨', '📐', '🧠'],
      emojiSize: 50,
      confettiNumber: 40,
    });

    if (upgraded) {
      confetti.addConfetti();
    }

    if (unlockedNow.length > 0) {
      setJustUnlocked(unlockedNow);
    }

    setShowInvestigation(false);
  };

  const exportData = () => {
    const dataStr = JSON.stringify(stats, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `axiom-vault-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const importData = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          try {
            const data = JSON.parse(e.target?.result as string);
            if (data.xp !== undefined && Array.isArray(data.completedTopicIds)) {
              setStats({ ...data, lastImportDate: new Date().toISOString() });
              location.reload();
            }
          } catch (err) {
            alert('Invalid Axiom Vault file.');
          }
        };
        reader.readAsText(file);
      }
    };
    input.click();
  };

  if (!isLoaded) return null;

  return (
    <div className="flex h-screen w-full bg-slate-950 text-slate-200 overflow-hidden font-sans">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block h-full">
        <Sidebar stats={stats} onExport={exportData} onImport={importData} />
      </div>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {showMobileSidebar && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-slate-950/80 backdrop-blur-sm lg:hidden"
            onClick={() => setShowMobileSidebar(false)}
          >
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-72 h-full bg-slate-950"
              onClick={e => e.stopPropagation()}
            >
              <Sidebar stats={stats} onExport={exportData} onImport={importData} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.main 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex-1 flex flex-col min-w-0 h-full relative"
      >
        {/* Viewport Header */}
        <header className="h-16 border-b border-slate-800 flex items-center justify-between px-4 sm:px-8 bg-slate-900/20 backdrop-blur-sm shrink-0">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setShowMobileSidebar(true)}
              className="p-2 -ml-2 lg:hidden text-slate-400 hover:text-white transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-lg sm:text-xl font-light tracking-tight text-white flex items-center gap-2 truncate">
              The <span className="line-through text-slate-500 decoration-cyan-500/50 decoration-2">lazy</span> <span className="font-black text-cyan-400 italic shrink-0">mathematician</span>
            </h1>
          </div>
          <div className="flex gap-3 sm:gap-6 items-center">
            <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-emerald-500/10 text-emerald-400 text-[11px] font-black rounded-full border border-emerald-500/20 uppercase tracking-widest">
              <TrendingUp className="w-3 h-3" />
              Progress Synced
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setShowDependencyMap(true)}
                className="flex items-center gap-2 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg text-[10px] font-black uppercase tracking-widest text-cyan-400 transition-all active:scale-95"
              >
                <Network className="w-4 h-4" />
                <span className="hidden sm:inline">Topology Map</span>
              </button>
            </div>
          </div>
        </header>

        {/* Scrollable Map Container */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-10 scroll-smooth">
          <div className="max-w-5xl mx-auto space-y-16 sm:space-y-24">
            {Object.entries(categories).map(([category, catTopics]) => (
              <div key={category} className="relative group/cat">
                <div className="flex items-center gap-4 sm:gap-6 mb-8 sm:mb-12">
                   <div className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-md shrink-0">
                     <span className="text-[9px] sm:text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">{category}</span>
                   </div>
                   <div className="h-px flex-1 bg-gradient-to-r from-slate-800 to-transparent"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
                  {(catTopics as MathTopic[]).map((topic) => (
                    <TopicNode
                      key={topic.id}
                      topic={topic}
                      isCompleted={stats.completedTopicIds.includes(topic.id)}
                      isUnlocked={isTopicUnlocked(topic)}
                      onClick={(t) => setSelectedTopic(t)}
                      prerequisiteNames={topic.prerequisites.map(id => 
                        MATH_TOPICS.find(t => t.id === id)?.title || id
                      )}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Detail Panel */}
        <AnimatePresence>
          {selectedTopic && (
            <motion.section 
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              className="fixed bottom-0 left-0 right-0 lg:absolute lg:relative h-[80vh] sm:h-96 border-t border-slate-800 bg-slate-900/95 backdrop-blur-xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 sm:gap-10 z-[70] lg:z-40"
            >
              <button 
                onClick={() => setSelectedTopic(null)}
                className="absolute top-4 right-4 p-2 text-slate-500 hover:text-white transition-colors bg-slate-800/50 rounded-full"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="sm:w-1/3 lg:w-1/4 flex flex-col overflow-y-auto sm:overflow-visible pr-2 custom-scrollbar shrink-0">
                <h4 className="text-[10px] font-black text-cyan-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                  <BookOpen className="w-3 h-3" />
                  Currently Examining
                </h4>
                <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-tight mb-2 uppercase italic">{selectedTopic.title}</h2>
                <p className="text-xs text-slate-400 mb-6 leading-relaxed flex-1 sm:overflow-y-auto custom-scrollbar">
                  {selectedTopic.description}
                  <br /><br />
                  <span className="text-slate-500 block font-medium uppercase tracking-widest text-[9px] mb-1">Theoretical Content:</span>
                  <span className="text-slate-500">{selectedTopic.content}</span>
                  {selectedTopic.realLifeApplication && (
                    <>
                      <br /><br />
                      <span className="text-cyan-500 block font-black uppercase tracking-widest text-[9px] mb-1 flex items-center gap-1">
                        <Zap className="w-2.5 h-2.5" />
                        Axiomatic Application:
                      </span>
                      <span className="text-slate-300 italic">"{selectedTopic.realLifeApplication}"</span>
                    </>
                  )}
                </p>
                <div className="space-y-4">
                   <div className="flex items-center gap-2">
                      <Zap className="w-3 h-3 text-cyan-400" />
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">{selectedTopic.xpValue} XP Bounty</span>
                   </div>
                   {stats.completedTopicIds.includes(selectedTopic.id) ? (
                    <div className="w-full py-3 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2">
                      <ShieldAlert className="w-3 h-3" />
                      Mastered
                    </div>
                  ) : isTopicUnlocked(selectedTopic) ? (
                    <button
                      onClick={() => setShowInvestigation(true)}
                      className="w-full bg-cyan-600 hover:bg-cyan-50 text-white hover:text-slate-950 font-black text-[10px] uppercase tracking-widest py-3 rounded-full shadow-lg shadow-cyan-900/20 transition-all flex items-center justify-center gap-2 active:scale-95"
                    >
                      Verify Knowledge
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  ) : (
                    <div className="w-full py-3 bg-slate-800 text-slate-600 border border-slate-700 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 opacity-50">
                      <ShieldAlert className="w-3 h-3" />
                      Locked
                    </div>
                  )}
                </div>
              </div>

              <div className="flex-1 border-t sm:border-t-0 sm:border-l border-slate-800/50 pt-6 sm:pt-0 sm:pl-10 flex flex-col min-h-0 min-w-0">
                <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                   <Layout className="w-3 h-3" /> Topic Breakdown Checklist
                </h4>
                
                <div className="flex-1 overflow-y-auto pr-2 space-y-8 custom-scrollbar">
                  {selectedTopic.subtopics.map((sub) => (
                    <div key={sub.id} className="space-y-3">
                      <h5 className="text-[11px] font-black text-slate-300 uppercase tracking-wider flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 text-transparent">.</span>
                        {sub.title}
                      </h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ml-3">
                        {sub.items.map((item) => {
                          const isChecked = stats.checkedItemIds.includes(item.id);
                          return (
                            <button
                              key={item.id}
                              onClick={() => toggleItem(item.id)}
                              className={`flex items-center gap-3 p-3 rounded-xl border text-left transition-all group/item ${
                                isChecked 
                                  ? 'bg-cyan-500/5 border-cyan-500/20 text-white' 
                                  : 'bg-slate-800/20 border-slate-800 hover:border-slate-700 text-slate-500 hover:text-slate-300'
                              }`}
                            >
                              <div className={`w-4 h-4 rounded border flex-shrink-0 flex items-center justify-center transition-all ${
                                isChecked ? 'bg-cyan-500 border-cyan-400' : 'bg-slate-950 border-slate-700 group-hover/item:border-slate-500'
                              }`}>
                                {isChecked && (
                                  <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
                                  </svg>
                                )}
                              </div>
                              <span className="text-[10px] sm:text-[11px] font-bold tracking-tight">
                                {item.title}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </motion.main>

      {/* Dependency Map Overlay */}
      <AnimatePresence>
        {showDependencyMap && (
          <DependencyMap 
            topics={MATH_TOPICS} 
            stats={stats}
            onClose={() => setShowDependencyMap(false)} 
          />
        )}
      </AnimatePresence>

      {/* Onboarding Overlay */}
      <AnimatePresence>
        {showOnboarding && (
          <Onboarding onComplete={handleOnboardingComplete} />
        )}
      </AnimatePresence>

      {/* Investigation Popup */}
      {showInvestigation && selectedTopic && (
        <InvestigationModal
          topic={selectedTopic}
          onClose={() => setShowInvestigation(false)}
          onSuccess={handleCompleteTopic}
        />
      )}

      {/* Congratulations / Unlocks Modal */}
      <AnimatePresence>
        {justUnlocked.length > 0 && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-slate-900 border border-slate-700 w-full max-w-md rounded-3xl p-8 shadow-2xl relative overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-cyan-500/20 blur-[100px] pointer-events-none" />
              
              <div className="relative z-10 text-center space-y-6">
                <div className="w-20 h-20 bg-cyan-500/10 rounded-2xl flex items-center justify-center mx-auto border border-cyan-500/20">
                  <Trophy className="w-10 h-10 text-cyan-400" />
                </div>
                
                <div className="space-y-2">
                  <h2 className="text-3xl font-black text-white italic tracking-tight uppercase">Topic Mastered!</h2>
                  <p className="text-slate-400 font-medium">Excellent work, <span className="text-cyan-400">{stats.name}</span>. You've expanded your mathematical horizon.</p>
                </div>

                <div className="bg-slate-950/50 rounded-2xl p-6 border border-slate-800 space-y-4">
                  <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center justify-center gap-2">
                    <TrendingUp className="w-3 h-3" />
                    New Terrains Unlocked
                  </h3>
                  <div className="space-y-3">
                    {justUnlocked.map(topic => (
                      <div key={topic.id} className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-xl border border-slate-700">
                        <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                          <BookOpen className="w-4 h-4 text-cyan-400" />
                        </div>
                        <div className="text-left">
                          <div className="text-xs font-bold text-white">{topic.title}</div>
                          <div className="text-[9px] text-slate-500 uppercase font-black tracking-widest">{topic.category}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setJustUnlocked([])}
                  className="w-full bg-white text-slate-950 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-cyan-400 transition-colors shadow-lg active:scale-95"
                >
                  Continue Journey
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
