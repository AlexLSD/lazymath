export interface SubSubTopic {
  id: string;
  title: string;
}

export interface SubTopic {
  id: string;
  title: string;
  items: SubSubTopic[];
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface MathTopic {
  id: string;
  title: string;
  category: 'Foundation' | 'Algebra' | 'Analysis' | 'Geometry & Topology' | 'Discrete & Numbers' | 'Probability & Data' | 'Applied Math' | 'Meta-Mathematics';
  description: string;
  content: string;
  subtopics: SubTopic[];
  prerequisites: string[];
  xpValue: number;
  quiz: QuizQuestion[];
}

export interface UserStats {
  name: string;
  xp: number;
  level: number;
  rank: string;
  completedTopicIds: string[];
  checkedItemIds: string[]; // Store IDs of checked sub-sub-topics
  lastImportDate: string | null;
}

export const RANKS = [
  { minLevel: 1, title: 'Novice Numerician' },
  { minLevel: 5, title: 'Algebra Apprentice' },
  { minLevel: 10, title: 'Geometry Guardian' },
  { minLevel: 15, title: 'Calculus Conqueror' },
  { minLevel: 25, title: 'Matrix Master' },
  { minLevel: 35, title: 'Analysis Ace' },
  { minLevel: 50, title: 'Field Theorist' },
  { minLevel: 75, title: 'Fields Medalist' },
  { minLevel: 100, title: 'Archimedean Ascendant' },
];

export function getRank(level: number): string {
  const rank = [...RANKS].reverse().find(r => level >= r.minLevel);
  return rank ? rank.title : RANKS[0].title;
}

export function calculateLevel(xp: number): number {
  // Level = floor(sqrt(xp) / 5) + 1
  // level 1: 0xp
  // level 2: 25xp
  // level 3: 100xp
  // level 20: 10000xp
  return Math.floor(Math.sqrt(xp) / 5) + 1;
}
