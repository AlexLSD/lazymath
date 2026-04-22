import { MathTopic } from '../types';

export const MATH_TOPICS: MathTopic[] = [
  // 1. FOUNDATIONAL LAYER: LOGIC, SETS, AND PROOFS
  {
    id: 'phil',
    title: 'Philosophy & Logic',
    category: 'Foundation',
    description: 'The starting point for rigorous thought.',
    content: 'Master the ability to distinguish between analytic, synthetic, and a priori truths. Learn propositional and predicate calculus.',
    subtopics: [
      {
        id: 'phil_epi',
        title: 'Epistemology',
        items: [
          { id: 'phil_ana', title: 'Analytic vs. Synthetic' },
          { id: 'phil_apr', title: 'A Priori Knowledge' },
          { id: 'phil_lan', title: 'Basic Language Skills' }
        ]
      }
    ],
    prerequisites: [],
    xpValue: 150,
    quiz: [
      {
        question: 'Which of these is the operational language of mathematical inquiry?',
        options: ['Arithmetic', 'Logic', 'Calculus', 'Geometry'],
        correctIndex: 1,
        explanation: 'Logic provides the formal language and rules for mathematical derivation.'
      }
    ]
  },
  {
    id: 'arithmetic',
    title: 'Arithmetic Operations',
    category: 'Algebra',
    description: 'The absolute foundation.',
    content: 'Addition, Subtraction, Multiplication, Division.',
    subtopics: [
      {
        id: 'arith_basic',
        title: 'Operations',
        items: [
          { id: 'arith_ops', title: 'Fundamental Operations' },
          { id: 'arith_order', title: 'Order of Operations' }
        ]
      }
    ],
    prerequisites: [],
    xpValue: 50,
    quiz: [
      {
        question: 'Which operation is the inverse of multiplication?',
        options: ['Addition', 'Subtraction', 'Division', 'Exponentiation'],
        correctIndex: 2,
        explanation: 'Division "undoes" multiplication, just as subtraction undoes addition.'
      }
    ]
  },
  {
    id: 'notation',
    title: 'Notation & Terminology',
    category: 'Foundation',
    description: 'Learning the script of mathematics.',
    content: 'Mathematical symbols, syntax, and definitions.',
    subtopics: [
      {
        id: 'not_core',
        title: 'Core Symbols',
        items: [
          { id: 'not_symb', title: 'Common Symbols' },
          { id: 'not_def', title: 'Rigorous Definitions' }
        ]
      }
    ],
    prerequisites: ['phil'],
    xpValue: 80,
    quiz: [
      {
        question: 'What does the symbol ∀ denote in formal mathematical notation?',
        options: ['There exists', 'For all', 'Not', 'Implies'],
        correctIndex: 1,
        explanation: 'The upside-down A is the universal quantifier, meaning "for all" or "for every".'
      }
    ]
  },
  {
    id: 'formal_logic',
    title: 'Formal Logic',
    category: 'Foundation',
    description: 'The universal operating system for mathematics.',
    content: 'Propositional logic, Predicate calculus, and Resolution proof systems.',
    subtopics: [
      {
        id: 'logic_sys',
        title: 'Logical Systems',
        items: [
          { id: 'logic_prop', title: 'Propositional Logic' },
          { id: 'logic_pred', title: 'Predicate Calculus' },
          { id: 'logic_res', title: 'Resolution Proof Systems' }
        ]
      }
    ],
    prerequisites: ['notation'],
    xpValue: 200,
    quiz: [
      {
        question: 'In propositional logic, if P is true and Q is false, what is the value of (P ∧ Q)?',
        options: ['True', 'False', 'Undefined', 'Both'],
        correctIndex: 1,
        explanation: 'The logical AND (∧) is only true if BOTH propositions are true.'
      }
    ]
  },
  {
    id: 'trigonometry',
    title: 'Trigonometry',
    category: 'Analysis',
    description: 'The study of circular functions.',
    content: 'Sine, Cosine, Tangent, and the unit circle.',
    subtopics: [
      {
        id: 'trig_unit',
        title: 'Unit Circle',
        items: [
          { id: 'trig_funcs', title: 'Circular Functions' },
          { id: 'trig_ident', title: 'Identities' }
        ]
      }
    ],
    prerequisites: ['arithmetic'],
    xpValue: 200,
    quiz: [
      {
        question: 'What is the value of sin(π/2)?',
        options: ['0', '0.5', '1', '-1'],
        correctIndex: 2,
        explanation: 'At π/2 radians (90 degrees), the y-coordinate on the unit circle is 1.'
      }
    ]
  },
  {
    id: 'functions',
    title: 'Functions & Precalculus',
    category: 'Foundation',
    description: 'The architecture of mapping.',
    content: 'Domain, range, composition, and inverse functions.',
    subtopics: [
      {
        id: 'func_props',
        title: 'Properties',
        items: [
          { id: 'func_map', title: 'Mapping & Relations' },
          { id: 'func_inv', title: 'Inverse Functions' }
        ]
      }
    ],
    prerequisites: ['algebra_ele'],
    xpValue: 150,
    quiz: [
      {
        question: 'If a function f(x) maps x to y, what does the inverse function f⁻¹(y) do?',
        options: ['Squares y', 'Maps y back to x', 'Maps x to -y', 'Does nothing'],
        correctIndex: 1,
        explanation: 'An inverse function reverses the mapping of the original function.'
      }
    ]
  },
  {
    id: 'complex_nums',
    title: 'Complex Numbers',
    category: 'Algebra',
    description: 'Expanding the number line.',
    content: 'Imaginary units, complex planes, and Euler\'s formula.',
    subtopics: [
      {
        id: 'comp_plane',
        title: 'Complex Geometry',
        items: [
          { id: 'comp_imag', title: 'Imaginary Unit i' },
          { id: 'comp_euler', title: 'Euler\'s Formula' }
        ]
      }
    ],
    prerequisites: ['arithmetic'],
    xpValue: 220,
    quiz: [
      {
        question: 'What is the value of i² in complex algebra?',
        options: ['1', 'i', '-1', '0'],
        correctIndex: 2,
        explanation: 'The imaginary unit i is defined such that its square is -1.'
      }
    ]
  },
  {
    id: 'set_theory',
    title: 'Naive Set Theory',
    category: 'Foundation',
    description: 'The collection of mathematical objects.',
    content: 'Set operations, power sets, and cardinality.',
    subtopics: [
      {
        id: 'set_ops',
        title: 'Operations',
        items: [
          { id: 'set_union', title: 'Union & Intersection' },
          { id: 'set_power', title: 'Power Sets' },
          { id: 'set_card', title: 'Cardinality' }
        ]
      }
    ],
    prerequisites: ['formal_logic'],
    xpValue: 200,
    quiz: [
      {
        question: 'What is the power set of {1, 2}?',
        options: ['{1, 2}', '{{1}, {2}}', '{∅, {1}, {2}, {1, 2}}', '{1, 2, ∅}'],
        correctIndex: 2,
        explanation: 'The power set contains all possible subsets, including the empty set and the set itself.'
      }
    ]
  },
  {
    id: 'proof_tech',
    title: 'Proof Techniques',
    category: 'Foundation',
    description: 'Developing mathematical maturity.',
    content: 'Mastering direct proof, induction, contradiction, and contraposition.',
    subtopics: [
      {
        id: 'proof_methods',
        title: 'Methodology',
        items: [
          { id: 'proof_direct', title: 'Direct Proof' },
          { id: 'proof_induc', title: 'Induction' },
          { id: 'proof_contra', title: 'Contradiction' },
          { id: 'proof_pos', title: 'Contraposition' }
        ]
      }
    ],
    prerequisites: ['formal_logic'],
    xpValue: 250,
    quiz: [
      {
        question: 'Which proof technique involves assuming the negation of what you want to prove?',
        options: ['Direct Proof', 'Induction', 'Contradiction', 'Contraposition'],
        correctIndex: 2,
        explanation: 'Proof by contradiction starts by assuming the conclusion is false and showing this leads to an absurdity.'
      }
    ]
  },
  {
    id: 'axiomatic',
    title: 'Axiomatic Systems',
    category: 'Foundation',
    description: 'The rigorous foundations of sets.',
    content: 'Zermelo-Fraenkel (ZF) axioms, choice, and foundation.',
    subtopics: [
      {
        id: 'axioms_zf',
        title: 'ZF Systems',
        items: [
          { id: 'zf_axioms', title: 'Zermelo-Fraenkel Axioms' },
          { id: 'zf_choice', title: 'Axiom of Choice' },
          { id: 'zf_found', title: 'Axiom of Foundation' }
        ]
      }
    ],
    prerequisites: ['set_theory'],
    xpValue: 300,
    quiz: [
      {
        question: 'In Zermelo-Fraenkel set theory, which axiom prevents sets from containing themselves in a cycle?',
        options: ['Axiom of Choice', 'Axiom of Foundation', 'Axiom of Union', 'Axiom of Power Set'],
        correctIndex: 1,
        explanation: 'The Axiom of Foundation (or Regularity) ensures every non-empty set contains an element disjoint from it, preventing infinite descent.'
      }
    ]
  },
  {
    id: 'model_theory',
    title: 'Model Theory',
    category: 'Foundation',
    description: 'The study of mathematical structures.',
    content: 'Saturated models, first-order logic, and non-standard analysis.',
    subtopics: [
      {
        id: 'model_struct',
        title: 'Structures',
        items: [
          { id: 'model_sat', title: 'Saturated Models' },
          { id: 'model_first', title: 'First-order Logic' },
          { id: 'model_nonstd', title: 'Non-standard Analysis' }
        ]
      }
    ],
    prerequisites: ['formal_logic', 'set_theory'],
    xpValue: 350,
    quiz: [
      {
        question: 'Which logic is primary to Model Theory for defining mathematical structures?',
        options: ['Zero-order logic', 'First-order logic', 'Second-order logic', 'fuzzy logic'],
        correctIndex: 1,
        explanation: 'Model theory mainly focuses on the relationship between first-order formulas and the structures that satisfy them.'
      }
    ]
  },

  // 2. THE ALGEBRAIC PILLAR
  {
    id: 'algebra_ele',
    title: 'Elementary Algebra',
    category: 'Algebra',
    description: 'From arithmetic to equations.',
    content: 'Linear equations, quadratics, and exponentials.',
    subtopics: [
      {
        id: 'alg_scaff',
        title: 'Scaffolding',
        items: [
          { id: 'alg_arith', title: 'Arithmetic Operations' },
          { id: 'alg_linear', title: 'Linear Equations' },
          { id: 'alg_quad', title: 'Quadratics & Exponentials' }
        ]
      }
    ],
    prerequisites: ['arithmetic'],
    xpValue: 100,
    quiz: [
      {
        question: 'Solve for x: 3x + 5 = 14',
        options: ['2', '3', '4', '5'],
        correctIndex: 1,
        explanation: '3x = 14 - 5 => 3x = 9 => x = 3.'
      }
    ]
  },
  {
    id: 'polynomials',
    title: 'Polynomials & Inequalities',
    category: 'Algebra',
    description: 'Studying polynomial relationships.',
    content: 'Roots, factoring, and solving inequalities.',
    subtopics: [
      {
        id: 'poly_basic',
        title: 'Foundations',
        items: [
          { id: 'poly_roots', title: 'Roots & Factoring' },
          { id: 'ineq_solve', title: 'Solving Inequalities' }
        ]
      }
    ],
    prerequisites: ['algebra_ele'],
    xpValue: 180,
    quiz: [
      {
        question: 'What is the root of the polynomial (x - 7)?',
        options: ['0', '7', '-7', '1'],
        correctIndex: 1,
        explanation: 'The root is the value of x that makes the expression zero: x - 7 = 0 => x = 7.'
      }
    ]
  },
  {
    id: 'lin_alg',
    title: 'Linear Algebra',
    category: 'Algebra',
    description: 'The language of dimensionality.',
    content: 'Vector Spaces, Matrices, Linear Transformations, Eigenvalues.',
    subtopics: [
      {
        id: 'linalg_core',
        title: 'Core Concepts',
        items: [
          { id: 'linalg_vectors', title: 'Vector Spaces' },
          { id: 'linalg_matrices', title: 'Matrices' },
          { id: 'linalg_trans', title: 'Linear Transformations' },
          { id: 'linalg_eigen', title: 'Eigenvalues & Eigenvectors' }
        ]
      }
    ],
    prerequisites: ['algebra_ele'],
    xpValue: 300,
    quiz: [
      {
        question: 'What is the result of multiplying a 2x2 matrix by its identity matrix?',
        options: ['Zero matrix', 'The original matrix', 'The inverse matrix', 'A scalar'],
        correctIndex: 1,
        explanation: 'Multiplying any matrix by its identity matrix results in the original matrix.'
      }
    ]
  },
  {
    id: 'group_theory',
    title: 'Group Theory',
    category: 'Algebra',
    description: 'The study of symmetry.',
    content: 'Symmetry, Homomorphisms, Lagrange\'s Theorem.',
    subtopics: [
      {
        id: 'group_struct',
        title: 'Structures',
        items: [
          { id: 'group_symm', title: 'Symmetry' },
          { id: 'group_homo', title: 'Homomorphisms' },
          { id: 'group_lagrange', title: 'Lagrange\'s Theorem' },
          { id: 'group_finite', title: 'Finite Groups' }
        ]
      }
    ],
    prerequisites: ['proof_tech'],
    xpValue: 350,
    quiz: [
      {
        question: 'What does Lagrange\'s Theorem state about the order of a subgroup H of a finite group G?',
        options: ['|H| equals |G|', '|H| divides |G|', '|H| is greater than |G|', '|H| + |G| is prime'],
        correctIndex: 1,
        explanation: 'Lagrange\'s theorem states that the order of any subgroup H of a finite group G must divide the order of G.'
      }
    ]
  },
  {
    id: 'ring_field',
    title: 'Ring and Field Theory',
    category: 'Algebra',
    description: 'Arithmetic on abstract sets.',
    content: 'Polynomials, Ideal theory, Galois theory.',
    subtopics: [
      {
        id: 'rf_theory',
        title: 'Theories',
        items: [
          { id: 'rf_poly', title: 'Polynomials' },
          { id: 'rf_ideal', title: 'Ideal Theory' },
          { id: 'rf_galois', title: 'Galois Theory' }
        ]
      }
    ],
    prerequisites: ['group_theory'],
    xpValue: 400,
    quiz: [
      {
        question: 'What is a "field" in abstract algebra?',
        options: ['A group with one operation', 'A ring where every non-zero element has a multiplicative inverse', 'A set with no operations', 'A subset of a group'],
        correctIndex: 1,
        explanation: 'A field is a commutative ring where every non-zero element is a unit (has a multiplicative inverse).'
      }
    ]
  },
  {
    id: 'comm_alg',
    title: 'Commutative Algebra',
    category: 'Algebra',
    description: 'The gateway to Algebraic Geometry.',
    content: 'Noetherian rings, Localization, Integral closure.',
    subtopics: [
      {
        id: 'comm_rings',
        title: 'Rings',
        items: [
          { id: 'comm_noeth', title: 'Noetherian Rings' },
          { id: 'comm_local', title: 'Localization' },
          { id: 'comm_integral', title: 'Integral Closure' }
        ]
      }
    ],
    prerequisites: ['ring_field'],
    xpValue: 450,
    quiz: [
      {
        question: 'What characterizes a Noetherian ring?',
        options: ['Every ideal is prime', 'Every ascending chain of ideals stabilizes', 'It is non-commutative', 'It has no ideals'],
        correctIndex: 1,
        explanation: 'A Noetherian ring is one where every ascending chain of ideals becomes constant (satisfies the ascending chain condition).'
      }
    ]
  },
  {
    id: 'rep_theory',
    title: 'Representation Theory',
    category: 'Algebra',
    description: 'Linearizing abstract structures.',
    content: 'Schur\'s Lemma, Maschke\'s Theorem, Root systems.',
    subtopics: [
      {
        id: 'rep_linear',
        title: 'Linear Reps',
        items: [
          { id: 'rep_schur', title: 'Schur\'s Lemma' },
          { id: 'rep_maschke', title: 'Maschke\'s Theorem' },
          { id: 'rep_root', title: 'Root Systems' }
        ]
      }
    ],
    prerequisites: ['group_theory', 'lin_alg'],
    xpValue: 500,
    quiz: [
      {
        question: 'In representation theory, what does Maschke\'s Theorem state about representations of finite groups over fields of characteristic zero?',
        options: ['They are always irreducible', 'They are completely reducible', 'They have no sub-representations', 'They are infinite dimensional'],
        correctIndex: 1,
        explanation: 'Maschke\'s theorem states that any representation of a finite group over a field whose characteristic does not divide the group order is a direct sum of irreducible representations.'
      }
    ]
  },
  {
    id: 'homo_alg',
    title: 'Homological Algebra',
    category: 'Algebra',
    description: 'Exactness and complexes.',
    content: 'Exact sequences, Chain complexes, Cohomology.',
    subtopics: [
      {
        id: 'homo_basics',
        title: 'Basics',
        items: [
          { id: 'homo_exact', title: 'Exact Sequences' },
          { id: 'homo_chain', title: 'Chain Complexes' },
          { id: 'homo_coho', title: 'Cohomology' }
        ]
      }
    ],
    prerequisites: ['rep_theory'],
    xpValue: 550,
    quiz: [
      {
        question: 'What defines an "exact sequence" of modules A → B → C?',
        options: ['All maps are zero', 'The image of the first map equals the kernel of the second', 'All modules are isomorphic', 'The sequence never ends'],
        correctIndex: 1,
        explanation: 'An exact sequence is a sequence of morphisms between modules such that the image of one morphism is equal to the kernel of the next.'
      }
    ]
  },

  // 3. THE ANALYTIC PILLAR
  {
    id: 'limits',
    title: 'Limits & Continuity',
    category: 'Analysis',
    description: 'The foundation of infinitesimal study.',
    content: 'Understanding the behavior of functions as they approach points.',
    subtopics: [
      {
        id: 'lim_concepts',
        title: 'Core Concepts',
        items: [
          { id: 'lim_inf', title: 'Limits at Infinity' },
          { id: 'lim_cont', title: 'Continuity' }
        ]
      }
    ],
    prerequisites: ['functions', 'trigonometry'],
    xpValue: 200,
    quiz: [
      {
        question: 'What does it mean for a function f(x) to be continuous at a point c?',
        options: ['f(c) is undefined', 'The limit of f(x) as x approaches c exists and equals f(c)', 'f(x) is a straight line', 'f(x) always equals 0'],
        correctIndex: 1,
        explanation: 'Continuity at a point means the limit matches the function value at that point, ensuring no jumps or holes.'
      }
    ]
  },
  {
    id: 'seq_series',
    title: 'Sequences & Series',
    category: 'Analysis',
    description: 'Infinite sums and patterns.',
    content: 'Convergence tests, Taylor series, and Power series.',
    subtopics: [
      {
        id: 'seq_conv',
        title: 'Convergence',
        items: [
          { id: 'seq_tests', title: 'Convergence Tests' },
          { id: 'seq_taylor', title: 'Taylor Series' }
        ]
      }
    ],
    prerequisites: ['limits'],
    xpValue: 220,
    quiz: [
      {
        question: 'What is the sum of the infinite geometric series 1 + 1/2 + 1/4 + 1/8 + ...?',
        options: ['1', '2', '∞', '1.5'],
        correctIndex: 1,
        explanation: 'For a geometric series with |r| < 1, the sum is a/(1-r). Here, 1/(1 - 0.5) = 2.'
      }
    ]
  },
  {
    id: 'calculus',
    title: 'Calculus',
    category: 'Analysis',
    description: 'The study of continuous change.',
    content: 'Differentiation and Integration.',
    subtopics: [
      {
        id: 'calc_diff',
        title: 'Differentiation',
        items: [
          { id: 'calc_deriv', title: 'Derivatives' },
          { id: 'calc_chain', title: 'Chain Rule' }
        ]
      },
      {
        id: 'calc_int',
        title: 'Integration',
        items: [
          { id: 'calc_found', title: 'Fundamental Theorem' },
          { id: 'calc_parts', title: 'Integration by Parts' }
        ]
      }
    ],
    prerequisites: ['limits', 'seq_series'],
    xpValue: 300,
    quiz: [
      {
        question: 'What does the derivative of a function represent geometrically?',
        options: ['The area under the curve', 'The slope of the tangent line at a point', 'The value of the function at infinity', 'The length of the curve'],
        correctIndex: 1,
        explanation: 'The derivative f\'(x) gives the instantaneous rate of change, which is the slope of the tangent line to the graph of f at x.'
      }
    ]
  },
  {
    id: 'vec_calc',
    title: 'Multivariable Calculus',
    category: 'Analysis',
    description: 'Calculus in higher dimensions.',
    content: 'Partial derivatives, Gradients, Stokes theorem.',
    subtopics: [
      {
        id: 'vec_high',
        title: 'Higher Dim',
        items: [
          { id: 'vec_partial', title: 'Partial Derivatives' },
          { id: 'vec_grad', title: 'Gradients' },
          { id: 'vec_stokes', title: 'Green/Stokes Theorems' }
        ]
      }
    ],
    prerequisites: ['calculus', 'lin_alg'],
    xpValue: 350,
    quiz: [
      {
        question: 'In which direction does the gradient vector ∇f point?',
        options: ['Along the level curve', 'In the direction of steepest descent', 'In the direction of steepest ascent', 'In a constant direction'],
        correctIndex: 2,
        explanation: 'The gradient vector at a point points in the direction where the function value increases most rapidly.'
      }
    ]
  },
  {
    id: 'real_analysis',
    title: 'Real Analysis',
    category: 'Analysis',
    description: 'Formalizing calculus.',
    content: 'Metric spaces, epsilon-delta rigor, Riemann integration.',
    subtopics: [
      {
        id: 'real_rigor',
        title: 'Rigor',
        items: [
          { id: 'real_metric', title: 'Metric Spaces' },
          { id: 'real_eps', title: 'ϵ-δ Rigor' },
          { id: 'real_riemann', title: 'Riemann Integration' },
          { id: 'real_conv', title: 'Convergence & Completeness' }
        ]
      }
    ],
    prerequisites: ['calculus', 'proof_tech', 'topology'],
    xpValue: 400,
    quiz: [
      {
        question: 'What property does the Bolzano-Weierstrass theorem guarantee for bounded sequences in R?',
        options: ['They always converge', 'They contain a convergent subsequence', 'They are always increasing', 'They have no limits'],
        correctIndex: 1,
        explanation: 'The Bolzano-Weierstrass theorem is a fundamental نتیجه of completeness, stating that every bounded sequence in R has a convergent subsequence.'
      }
    ]
  },
  {
    id: 'comp_analysis',
    title: 'Complex Analysis',
    category: 'Analysis',
    description: 'Functions of complex variables.',
    content: 'Holomorphic functions, Residue theorem, Riemann surfaces.',
    subtopics: [
      {
        id: 'comp_theory',
        title: 'Theory',
        items: [
          { id: 'comp_holo', title: 'Holomorphic Functions' },
          { id: 'comp_residue', title: 'Residue Theorem' },
          { id: 'comp_surfaces', title: 'Riemann Surfaces' }
        ]
      }
    ],
    prerequisites: ['vec_calc', 'real_analysis', 'complex_nums'],
    xpValue: 450,
    quiz: [
      {
        question: 'What characterizes a holomorphic function?',
        options: ['It is only defined for real numbers', 'It is complex-differentiable in a neighborhood of every point in its domain', 'It is always zero', 'It is non-continuous'],
        correctIndex: 1,
        explanation: 'Holomorphic functions are the central object of study in complex analysis, defined as complex-valued functions that are differentiable at every point in an open set.'
      }
    ]
  },
  {
    id: 'func_analysis',
    title: 'Functional Analysis',
    category: 'Analysis',
    description: 'Infinite dimensional spaces.',
    content: 'Banach and Hilbert spaces, Linear operators.',
    subtopics: [
      {
        id: 'func_spaces',
        title: 'Spaces',
        items: [
          { id: 'func_banach', title: 'Banach & Hilbert Spaces' },
          { id: 'func_ops', title: 'Linear Operators' },
          { id: 'func_spectral', title: 'Spectral Theory' }
        ]
      }
    ],
    prerequisites: ['real_analysis', 'lin_alg'],
    xpValue: 500,
    quiz: [
      {
        question: 'What is a Hilbert Space?',
        options: ['A finite dimensional vector space', 'A complete inner product space', 'A space with no norm', 'A discrete set of points'],
        correctIndex: 1,
        explanation: 'A Hilbert space is a real or complex inner product space that is also a complete metric space with respect to the distance function induced by the inner product.'
      }
    ]
  },
  {
    id: 'meas_theory',
    title: 'Measure Theory',
    category: 'Analysis',
    description: 'Generalized integration.',
    content: 'Lebesgue measure, sigma-algebras.',
    subtopics: [
      {
        id: 'meas_gen',
        title: 'Generalization',
        items: [
          { id: 'meas_lebesgue', title: 'Lebesgue Measure' },
          { id: 'meas_sigma', title: 'σ-algebras' }
        ]
      }
    ],
    prerequisites: ['func_analysis'],
    xpValue: 500,
    quiz: [
      {
        question: 'What is a σ-algebra on a set X?',
        options: ['A collection of subsets closed under complement and countable unions', 'A set of numbers', 'A linear transformation', 'A type of group'],
        correctIndex: 0,
        explanation: 'A σ-algebra (or sigma-field) is a collection of subsets where taking complements and countable unions does not leave the collection, essential for defining measures.'
      }
    ]
  },
  {
    id: 'fourier',
    title: 'Fourier Analysis',
    category: 'Analysis',
    description: 'Decomposing signals.',
    content: 'Fourier series, transforms, and harmonic analysis.',
    subtopics: [
      {
        id: 'four_trans',
        title: 'Transforms',
        items: [
          { id: 'four_series', title: 'Fourier Series' },
          { id: 'four_integral', title: 'Harmonic Analysis' }
        ]
      }
    ],
    prerequisites: ['real_analysis', 'func_analysis'],
    xpValue: 480,
    quiz: [
      {
        question: 'What is the primary goal of the Fourier Transform?',
        options: ['To solve algebraic equations', 'To represent a function as a sum of sinusoidal components', 'To calculate the area of a circle', 'To find prime numbers'],
        correctIndex: 1,
        explanation: 'The Fourier transform decomposes functions depending on space or time into functions depending on spatial or temporal frequency.'
      }
    ]
  },
  {
    id: 'special_funcs',
    title: 'Special Functions',
    category: 'Analysis',
    description: 'Beyond elementary functions.',
    content: 'Gamma function, Bessel functions, and Zeta function.',
    subtopics: [
      {
        id: 'spec_cat',
        title: 'Categories',
        items: [
          { id: 'spec_gamma', title: 'Gamma & Beta' },
          { id: 'spec_bessel', title: 'Bessel & Orthogonal' }
        ]
      }
    ],
    prerequisites: ['comp_analysis'],
    xpValue: 460,
    quiz: [
      {
        question: 'The Gamma function Γ(n) is a generalization of which operation for non-integer values?',
        options: ['Addition', 'Square root', 'Factorial', 'Exponentiation'],
        correctIndex: 2,
        explanation: 'The Gamma function extends the factorial function to complex and real numbers, where Γ(n) = (n-1)! for positive integers n.'
      }
    ]
  },

  // 4. GEOMETRIC AND TOPOLOGICAL FRAMEWORKS
  {
    id: 'topology',
    title: 'General Topology',
    category: 'Geometry & Topology',
    description: 'The study of continuity and shape.',
    content: 'Open sets, Compactness, Connectedness.',
    subtopics: [
      {
        id: 'topo_found',
        title: 'Foundations',
        items: [
          { id: 'topo_open', title: 'Open Sets' },
          { id: 'topo_comp', title: 'Compactness' },
          { id: 'topo_conn', title: 'Connectedness' }
        ]
      }
    ],
    prerequisites: ['proof_tech'],
    xpValue: 400,
    quiz: [
      {
        question: 'In topology, what is a "homeomorphism"?',
        options: ['A map that preserves distance', 'A continuous bijection with a continuous inverse', 'A map between groups', 'A type of manifold'],
        correctIndex: 1,
        explanation: 'A homeomorphism is a continuous transformation that preserves the topological properties of a geometric figure.'
      }
    ]
  },
  {
    id: 'diff_geom',
    title: 'Differential Geometry',
    category: 'Geometry & Topology',
    description: 'Calculus on manifolds.',
    content: 'Manifolds, Tangent spaces, Curvature.',
    subtopics: [
      {
        id: 'dg_concepts',
        title: 'Concepts',
        items: [
          { id: 'dg_manifolds', title: 'Manifolds' },
          { id: 'dg_tangent', title: 'Tangent Spaces' },
          { id: 'dg_curvature', title: 'Curvature & Tensors' }
        ]
      }
    ],
    prerequisites: ['vec_calc', 'lin_alg'],
    xpValue: 450,
    quiz: [
      {
        question: 'What is a manifold?',
        options: ['A flat Euclidean space', 'A space that locally resembles Euclidean space', 'A set of integers', 'A type of matrix'],
        correctIndex: 1,
        explanation: 'A manifold is a topological space that locally resembles Euclidean space near each point.'
      }
    ]
  },
  {
    id: 'alg_topo',
    title: 'Algebraic Topology',
    category: 'Geometry & Topology',
    description: 'Algebraic tools for topology.',
    content: 'Homotopy, Fundamental groups.',
    subtopics: [
      {
        id: 'at_tools',
        title: 'Tools',
        items: [
          { id: 'at_homotopy', title: 'Homotopy' },
          { id: 'at_groups', title: 'Fundamental Groups' },
          { id: 'at_sequences', title: 'Mayer-Vietoris Sequences' }
        ]
      }
    ],
    prerequisites: ['topology', 'group_theory'],
    xpValue: 500,
    quiz: [
      {
        question: 'What does the fundamental group π₁(X) of a space X represent?',
        options: ['The set of all points in X', 'The set of equivalence classes of loops based at a point', 'The number of holes in X', 'The dimension of X'],
        correctIndex: 1,
        explanation: 'The fundamental group π₁ is the first of the homotopy groups, describing the system of loops that cannot be shrunk to a point.'
      }
    ]
  },
  {
    id: 'alg_geom',
    title: 'Algebraic Geometry',
    category: 'Geometry & Topology',
    description: 'Zeros of polynomials.',
    content: 'Varieties, Schemes, Sheaves.',
    subtopics: [
      {
        id: 'ag_struct',
        title: 'Structures',
        items: [
          { id: 'ag_varieties', title: 'Varieties' },
          { id: 'ag_schemes', title: 'Schemes' },
          { id: 'ag_sheaves', title: 'Sheaves' }
        ]
      }
    ],
    prerequisites: ['comm_alg', 'comp_analysis'],
    xpValue: 600,
    quiz: [
      {
        question: 'What is an "Algebraic Variety"?',
        options: ['A collection of variable names', 'The set of solutions of a system of polynomial equations', 'A type of group structure', 'A field extension'],
        correctIndex: 1,
        explanation: 'Algebraic varieties are the central objects of study in algebraic geometry, essentially the set of common zeros of a set of polynomials.'
      }
    ]
  },

  // 5. DISCRETE AND NUMBERS
  {
    id: 'combinatorics',
    title: 'Combinatorics',
    category: 'Discrete & Numbers',
    description: 'The art of counting.',
    content: 'Permutations, combinations, Generating functions.',
    subtopics: [
      {
        id: 'comb_counting',
        title: 'Counting',
        items: [
          { id: 'comb_perm', title: 'Permutations' },
          { id: 'comb_gen', title: 'Generating Functions' }
        ]
      }
    ],
    prerequisites: ['proof_tech'],
    xpValue: 250,
    quiz: [
      {
        question: 'How many ways can you arrange 3 distinct books on a shelf (permutations)?',
        options: ['3', '6', '9', '12'],
        correctIndex: 1,
        explanation: 'The number of permutations of n objects is n!. So 3! = 3 × 2 × 1 = 6.'
      }
    ]
  },
  {
    id: 'graph_theory',
    title: 'Graph Theory',
    category: 'Discrete & Numbers',
    description: 'Networks and relations.',
    content: 'Euler tours, Hamiltonian graphs, Max-flow.',
    subtopics: [
      {
        id: 'gt_networks',
        title: 'Networks',
        items: [
          { id: 'gt_euler', title: 'Euler Tours' },
          { id: 'gt_flow', title: 'Max-flow Min-cut' }
        ]
      }
    ],
    prerequisites: ['proof_tech'],
    xpValue: 300,
    quiz: [
      {
        question: 'What is an Euler tour in a graph?',
        options: ['A path that visits every vertex exactly once', 'A trail that visits every edge exactly once', 'A cycle that only contains 3 vertices', 'A map between two graphs'],
        correctIndex: 1,
        explanation: 'An Eulerian trail (or tour) is a trail in a finite graph that visits every edge exactly once.'
      }
    ]
  },
  {
    id: 'num_theory_ele',
    title: 'Elementary Number Theory',
    category: 'Discrete & Numbers',
    description: 'Properties of integers.',
    content: 'Divisibility, Chinese Remainder Theorem.',
    subtopics: [
      {
        id: 'nt_basic',
        title: 'Basic Concepts',
        items: [
          { id: 'nt_div', title: 'Divisibility & Primes' },
          { id: 'nt_crt', title: 'Chinese Remainder Theorem' },
          { id: 'nt_primes', title: 'Prime Numbers' }
        ]
      }
    ],
    prerequisites: ['proof_tech'],
    xpValue: 300,
    quiz: [
      {
        question: 'What is a prime number?',
        options: ['A number divisible by 2', 'A natural number greater than 1 with no positive divisors other than 1 and itself', 'Any negative number', 'A number with exactly 3 factors'],
        correctIndex: 1,
        explanation: 'Prime numbers are the building blocks of integers, having only 1 and themselves as divisors.'
      }
    ]
  },
  {
    id: 'comp_theory',
    title: 'Theory of Computation',
    category: 'Discrete & Numbers',
    description: 'The math of machines.',
    content: 'Turing machines, NP-completeness.',
    subtopics: [
      {
        id: 'toc_machines',
        title: 'Computation',
        items: [
          { id: 'toc_turing', title: 'Turing Machines' },
          { id: 'toc_np', title: 'NP-completeness' },
          { id: 'toc_algo', title: 'Algorithms' }
        ]
      }
    ],
    prerequisites: ['formal_logic'],
    xpValue: 400,
    quiz: [
      {
        question: 'What is the "Church-Turing Thesis"?',
        options: ['Every computer must have a keyboard', 'Anything computable can be computed by a Turing machine', 'Prime numbers are infinite', 'Logic is superior to arithmetic'],
        correctIndex: 1,
        explanation: 'The thesis states that a function is effectively calculable if and only if it is computable by a Turing machine.'
      }
    ]
  },

  // 6. PROBABILITY & DATA
  {
    id: 'prob_theory',
    title: 'Probability Theory',
    category: 'Probability & Data',
    description: 'Reasoning under uncertainty.',
    content: 'Random variables, Distributions, CLT.',
    subtopics: [
      {
        id: 'prob_core',
        title: 'Core',
        items: [
          { id: 'prob_vars', title: 'Random Variables' },
          { id: 'prob_dist', title: 'Distributions' },
          { id: 'prob_clt', title: 'Central Limit Theorem' }
        ]
      }
    ],
    prerequisites: ['calc_found', 'set_theory'],
    xpValue: 300,
    quiz: [
      {
        question: 'What does the Central Limit Theorem state about the distribution of the sample mean?',
        options: ['It is always uniform', 'It approaches a normal distribution as sample size increases', 'It is always skewed', 'It is independent of sample size'],
        correctIndex: 1,
        explanation: 'The CLT is a fundamental theorem stating that the distribution of the sample mean approaches normal, regardless of the population distribution shape, given a sufficiently large sample.'
      }
    ]
  },
  {
    id: 'stochastic',
    title: 'Stochastic Processes',
    category: 'Probability & Data',
    description: 'Randomness over time.',
    content: 'Markov chains, Poisson processes, and Martingales.',
    subtopics: [
      {
        id: 'stoch_models',
        title: 'Models',
        items: [
          { id: 'stoch_markov', title: 'Markov Chains' },
          { id: 'stoch_poisson', title: 'Poisson Processes' }
        ]
      }
    ],
    prerequisites: ['prob_theory'],
    xpValue: 380,
    quiz: [
      {
        question: 'What is the defining property of a Markov Chain?',
        options: ['Future states depend on all past states', 'Future states depend only on the current state', 'Future states are independent of current state', 'It never changes state'],
        correctIndex: 1,
        explanation: 'The Markov property states that given the present, the future is independent of the past.'
      }
    ]
  },
  {
    id: 'stats_freq',
    title: 'Frequentist Stats',
    category: 'Probability & Data',
    description: 'Classical statistical tools.',
    content: 'Hypothesis testing, P-values, ANOVA.',
    subtopics: [
      {
        id: 'sf_tools',
        title: 'Tools',
        items: [
          { id: 'sf_hypo', title: 'Hypothesis Testing' },
          { id: 'sf_p', title: 'P-values' },
          { id: 'sf_anova', title: 'ANOVA' }
        ]
      }
    ],
    prerequisites: ['prob_theory'],
    xpValue: 350,
    quiz: [
      {
        question: 'In hypothesis testing, what does the p-value represent?',
        options: ['The probability that the null hypothesis is true', 'The probability of observing data as extreme as ours, assuming the null hypothesis is true', 'The probability of an error', 'The percentage of data that is correct'],
        correctIndex: 1,
        explanation: 'A p-value is the probability of obtaining test results at least as extreme as the results actually observed, under the assumption that the null hypothesis is correct.'
      }
    ]
  },
  {
    id: 'stats_bayesian',
    title: 'Bayesian Stats',
    category: 'Probability & Data',
    description: 'Probability as degrees of belief.',
    content: 'Prior/Posterior distributions, MCMC.',
    subtopics: [
      {
        id: 'sb_theory',
        title: 'Theory',
        items: [
          { id: 'sb_bayes', title: 'Bayes\' Theorem' },
          { id: 'sb_mcmc', title: 'MCMC Methods' }
        ]
      }
    ],
    prerequisites: ['prob_theory', 'calc_found'],
    xpValue: 400,
    quiz: [
      {
        question: 'What is the main difference between Bayesian and Frequentist statistics?',
        options: ['Bayesians use computers, Frequentists use pens', 'Bayesians incorporate prior beliefs via distributions, Frequentists do not', 'Frequentists only use prime numbers', 'There is no difference'],
        correctIndex: 1,
        explanation: 'Bayesian statistics treats probability as a measure of belief in a proposition, allowing for the incorporation of prior knowledge or evidence.'
      }
    ]
  },
  {
    id: 'data_science_math',
    title: 'Data Science',
    category: 'Probability & Data',
    description: 'Mathematical foundations of ML.',
    content: 'Linear Regression, PCA, SVD, Gradient Descent.',
    subtopics: [
      {
        id: 'ds_algos',
        title: 'Algos',
        items: [
          { id: 'ds_regression', title: 'Linear Regression' },
          { id: 'ds_pca', title: 'PCA' },
          { id: 'ds_grad', title: 'Gradient Descent' }
        ]
      }
    ],
    prerequisites: ['lin_alg', 'calc_found'],
    xpValue: 400,
    quiz: [
      {
        question: 'What is the purpose of Principal Component Analysis (PCA)?',
        options: ['To solve differential equations', 'To reduce the dimensionality of a dataset while keeping variance', 'To encrypt data', 'To calculate the mean of a sequence'],
        correctIndex: 1,
        explanation: 'PCA is a dimensionality-reduction method that is often used to reduce the dimensionality of large data sets, by transforming a large set of variables into a smaller one.'
      }
    ]
  },

  // 7. APPLIED MATH
  {
    id: 'diff_eq',
    title: 'Differential Equations',
    category: 'Applied Math',
    description: 'Modeling change in physical systems.',
    content: 'ODEs and PDEs.',
    subtopics: [
      {
        id: 'de_modeling',
        title: 'Modeling',
        items: [
          { id: 'de_ode', title: 'ODEs' },
          { id: 'de_pde', title: 'PDEs' }
        ]
      }
    ],
    prerequisites: ['calculus', 'lin_alg'],
    xpValue: 400,
    quiz: [
      {
        question: 'What is the main difference between an ODE and a PDE?',
        options: ['One is for integers, the other for real numbers', 'ODEs have one independent variable, while PDEs have multiple', 'PDEs are always linear', 'There is no difference'],
        correctIndex: 1,
        explanation: 'Ordinary Differential Equations (ODEs) involve derivatives with respect to a single independent variable, whereas Partial Differential Equations (PDEs) involve partial derivatives with respect to multiple independent variables.'
      }
    ]
  },
  {
    id: 'numerical',
    title: 'Numerical Methods',
    category: 'Applied Math',
    description: 'Approximating solutions.',
    content: 'Root finding, integration, and differential solvers.',
    subtopics: [
      {
        id: 'num_appro',
        title: 'Approximation',
        items: [
          { id: 'num_roots', title: 'Root Finding' },
          { id: 'num_integ', title: 'Numerical Integration' }
        ]
      }
    ],
    prerequisites: ['diff_eq', 'comp_theory'],
    xpValue: 420,
    quiz: [
      {
        question: 'What is the Newton-Raphson method used for?',
        options: ['Calculating integrals', 'Finding roots of a real-valued function', 'Solving linear equations', 'Data encryption'],
        correctIndex: 1,
        explanation: 'Newton-Raphson is a powerful numerical method for finding successively better approximations to the roots (or zeroes) of a real-valued function.'
      }
    ]
  },
  {
    id: 'optimization',
    title: 'Optimization',
    category: 'Applied Math',
    description: 'Finding the best path.',
    content: 'Linear and non-linear programming.',
    subtopics: [
      {
        id: 'opt_proc',
        title: 'Procedures',
        items: [
          { id: 'opt_linear', title: 'Linear Programming' },
          { id: 'opt_nonlinear', title: 'Gradient Methods' }
        ]
      }
    ],
    prerequisites: ['vec_calc', 'lin_alg'],
    xpValue: 440,
    quiz: [
      {
        question: 'What is the goal of "Linear Programming"?',
        options: ['To write linear code', 'To maximize or minimize a linear objective function subject to constraints', 'To solve for prime numbers', 'To sort a list of numbers'],
        correctIndex: 1,
        explanation: 'Linear programming is a method to achieve the best outcome (such as maximum profit or lowest cost) in a mathematical model whose requirements are represented by linear relationships.'
      }
    ]
  },
  {
    id: 'dyn_sys',
    title: 'Dynamical Systems',
    category: 'Applied Math',
    description: 'Chaos and stability.',
    content: 'Bifurcations, Strange attractors, Fractals.',
    subtopics: [
      {
        id: 'ds_chaos',
        title: 'Chaos',
        items: [
          { id: 'ds_bifur', title: 'Bifurcations' },
          { id: 'ds_fractals', title: 'Fractals' }
        ]
      }
    ],
    prerequisites: ['diff_eq'],
    xpValue: 450,
    quiz: [
      {
        question: 'In dynamical systems, what describes a "Strange Attractor"?',
        options: ['A point that repels all orbits', 'An attractor with a complex, fractal structure', 'A linear mapping', 'A set of zero measure'],
        correctIndex: 1,
        explanation: 'Strange attractors are often found in chaotic systems, exhibiting sensitive dependence on initial conditions and having non-integer fractal dimension.'
      }
    ]
  },
  {
    id: 'stoch_calc',
    title: 'Stochastic Calculus',
    category: 'Applied Math',
    description: 'The math of finance.',
    content: 'Ito calculus, Brownian motion.',
    subtopics: [
      {
        id: 'sc_finance',
        title: 'Finance',
        items: [
          { id: 'sc_ito', title: 'Ito Calculus' },
          { id: 'sc_brownian', title: 'Brownian Motion' }
        ]
      }
    ],
    prerequisites: ['meas_theory', 'prob_theory', 'stochastic'],
    xpValue: 500,
    quiz: [
      {
        question: 'What is "Itô\'s Lemma" used for in stochastic calculus?',
        options: ['To solve algebraic equations', 'To find the differential of a function of a stochastic process', 'To sort data', 'To calculate the mean of a sequence'],
        correctIndex: 1,
        explanation: 'Itô\'s lemma is a key tool in stochastic calculus, analogous to the chain rule, used to find the differential of a time-dependent function of a stochastic process.'
      }
    ]
  },
  {
    id: 'math_physics',
    title: 'Mathematical Physics',
    category: 'Applied Math',
    description: 'The language of the universe.',
    content: 'Quantum Theory, General Relativity.',
    subtopics: [
      {
        id: 'mp_universe',
        title: 'Universe',
        items: [
          { id: 'mp_quantum', title: 'Quantum Theory' },
          { id: 'mp_relativity', title: 'General Relativity' }
        ]
      }
    ],
    prerequisites: ['diff_geom', 'func_analysis'],
    xpValue: 600,
    quiz: [
      {
        question: 'Which mathematical framework is central to the formulation of General Relativity?',
        options: ['Algebraic Topology', 'Differential Geometry (Tensors)', 'Combinatorics', 'Number Theory'],
        correctIndex: 1,
        explanation: 'Einstein used differential geometry, specifically tensors and curvature on four-dimensional manifolds, to describe the gravitational field.'
      }
    ]
  },

  // 8. META-MATHEMATICS
  {
    id: 'category_theory',
    title: 'Category Theory',
    category: 'Meta-Mathematics',
    description: 'The math of math.',
    content: 'Functors, Natural transformations, Adjunctions.',
    subtopics: [
      {
        id: 'ct_patterns',
        title: 'Patterns',
        items: [
          { id: 'ct_functors', title: 'Functors' },
          { id: 'ct_adj', title: 'Adjunctions' }
        ]
      }
    ],
    prerequisites: ['group_theory', 'topology', 'formal_logic'],
    xpValue: 700,
    quiz: [
      {
        question: 'In Category Theory, what is a "Functor"?',
        options: ['A type of group', 'A mapping between categories that preserves structure', 'A specific prime number', 'A linear operator'],
        correctIndex: 1,
        explanation: 'A functor is a mapping between categories that preserves the structure of morphisms and objects, essentially a morphism of categories.'
      }
    ]
  },
  {
    id: 'ergodic_theory',
    title: 'Ergodic Theory',
    category: 'Meta-Mathematics',
    description: 'Measure theory in dynamics.',
    content: 'Long-term behaviors in systems.',
    subtopics: [
      {
        id: 'et_dynamics',
        title: 'Dynamics',
        items: [
          { id: 'et_behavior', title: 'Long-term Behavior' }
        ]
      }
    ],
    prerequisites: ['meas_theory', 'func_analysis'],
    xpValue: 650,
    quiz: [
      {
        question: 'What is the "Ergodic Hypothesis" in simple terms?',
        options: ['A system will eventually visit all parts of its state space', 'Prime numbers alternate between even and odd', 'Calculus is actually algebra', 'Logic is always false'],
        correctIndex: 0,
        explanation: 'In essence, the ergodic hypothesis suggests that over a long period, the time spent in a region of the state space is proportional to the region\'s volume.'
      }
    ]
  }
];
