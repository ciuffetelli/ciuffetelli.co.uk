export type Solution = {
  id: string;
  title: string;
  description: string;
};

export const solutions: Solution[] = [
  {
    id: 'ai',
    title: 'AI-Augmented Development',
    description:
      'Built a structured AI development harness that turns AI assistance into a disciplined, repeatable workflow. By combining TDD, contextual pair programming, and continuous feedback loops, the approach delivers solutions up to 10x faster — without sacrificing quality. Tight context management and contract-first testing keep hallucinations and unnecessary churn out of the codebase, ensuring every AI-assisted commit meets the same bar as hand-crafted code.',
  },
  {
    id: 'performance',
    title: 'API Architecture & State Management',
    description:
      'Replaced fragmented direct API calls across pages with a centralised data layer — handling fetching, real-time caching, error normalisation, and loading states through a single hook. This eliminated an entire class of race-condition bugs, removed significant boilerplate, and standardised how the frontend communicates with any backend. The impact landed first on developer experience, then on production: measurably fewer bugs shipped and faster feature delivery.',
  },
  {
    id: 'testing',
    title: 'Zero-Regression Testing Strategy',
    description:
      'Introduced structured Test-Driven Development where there was none — replacing a fully manual QA process and regression reviews before every release. Defensive, contract-based tests ensure the frontend never silently breaks when APIs evolve. The result: faster shipping cycles, near-zero regressions, and a codebase new developers can contribute to with confidence from day one.',
  },
  {
    id: 'fullstack',
    title: 'Scalable Full-Stack Delivery',
    description:
      'Designed and shipped complete full-stack products — from architecture to deployment — with TDD, performance optimisation, and quality built in from the first line. This model reduces dependency on multiple specialist teams, compresses time-to-market, and keeps the path from development to production simple and maintainable.',
  },
];
