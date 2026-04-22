import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MathTopic } from '../types';
import { CheckCircle2, XCircle, ShieldCheck, Sparkles, AlertCircle } from 'lucide-react';

interface InvestigationModalProps {
  topic: MathTopic;
  onClose: () => void;
  onSuccess: () => void;
}

export default function InvestigationModal({ topic, onClose, onSuccess }: InvestigationModalProps) {
  const [currentStep, setCurrentStep] = useState<'intro' | 'quiz' | 'result'>('intro');
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const question = topic.quiz[0];

  const handleVerify = () => {
    if (selectedOption === question.correctIndex) {
      setIsCorrect(true);
      setCurrentStep('result');
    } else {
      setIsCorrect(false);
      setCurrentStep('result');
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 40 }}
          className="bg-slate-900 border border-slate-700 rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl ring-1 ring-cyan-500/30"
        >
          {currentStep === 'intro' && (
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="text-cyan-400 w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">Verification Required!</h2>
              <p className="text-slate-400 mb-8 font-medium leading-relaxed">
                To secure your XP and finalize your mastery of <span className="text-cyan-400">"{topic.title}"</span>, you must verify your knowledge.
              </p>
              <div className="space-y-3">
                <button
                  onClick={() => setCurrentStep('quiz')}
                  className="w-full py-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-2xl font-black uppercase tracking-wider transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-cyan-900/20"
                >
                  Initiate Quiz
                </button>
                <button
                  onClick={onClose}
                  className="w-full py-4 text-slate-500 hover:text-slate-300 font-bold uppercase tracking-widest text-xs transition-colors"
                >
                  Return to Study
                </button>
              </div>
            </div>
          )}

          {currentStep === 'quiz' && (
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="px-2 py-1 bg-cyan-500/10 rounded-md border border-cyan-500/20">
                  <span className="text-[10px] font-black text-cyan-400 uppercase tracking-widest">Knowledge Check</span>
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-6 leading-tight">
                {question.question}
              </h3>

              <div className="space-y-3">
                {question.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedOption(idx)}
                    className={`w-full p-4 rounded-2xl text-left transition-all border font-semibold text-sm ${
                      selectedOption === idx
                        ? 'bg-slate-800 border-cyan-500 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.1)]'
                        : 'bg-slate-800/40 border-slate-700/50 text-slate-400 hover:bg-slate-800 hover:border-slate-600'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-between gap-4">
                <button
                  onClick={onClose}
                  className="text-[11px] font-bold text-slate-500 hover:text-white uppercase tracking-widest transition-colors"
                >
                  Skip for now
                </button>
                <button
                  disabled={selectedOption === null}
                  onClick={handleVerify}
                  className={`px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest transition-all ${
                    selectedOption !== null
                      ? 'bg-white text-slate-950 hover:bg-cyan-50 shadow-lg'
                      : 'bg-slate-800 text-slate-600 cursor-not-allowed border border-slate-700'
                  }`}
                >
                  Verify Knowledge
                </button>
              </div>
            </div>
          )}

          {currentStep === 'result' && (
            <div className="p-10 text-center">
              {isCorrect ? (
                <>
                  <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-500/20">
                    <CheckCircle2 className="text-emerald-400 w-10 h-10" />
                  </div>
                  <h2 className="text-3xl font-black text-white mb-2 italic tracking-tighter">SUCCESS!</h2>
                  <p className="text-slate-400 mb-8 text-sm leading-relaxed px-4">
                    {question.explanation}
                  </p>
                  <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700 mb-8 flex items-center justify-center gap-3">
                    <Sparkles className="text-cyan-400 w-5 h-5" />
                    <span className="text-white font-black text-lg">+{topic.xpValue} XP</span>
                    <span className="text-slate-500 font-bold text-xs uppercase">Acquired</span>
                  </div>
                  <button
                    onClick={onSuccess}
                    className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-black uppercase tracking-widest transition-all shadow-lg"
                  >
                    Claim Reward
                  </button>
                </>
              ) : (
                <>
                  <div className="w-20 h-20 bg-rose-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-rose-500/20">
                    <AlertCircle className="text-rose-400 w-10 h-10" />
                  </div>
                  <h2 className="text-3xl font-black text-white mb-2 italic tracking-tighter">REFOCUSSING...</h2>
                  <p className="text-slate-400 mb-10 text-sm leading-relaxed px-4">
                    Your logic was imprecise. True mastery requires absolute rigor. Return to the axioms and study deeper.
                  </p>
                  <button
                    onClick={onClose}
                    className="w-full py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-2xl font-black uppercase tracking-widest transition-all"
                  >
                    Return to Map
                  </button>
                </>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
