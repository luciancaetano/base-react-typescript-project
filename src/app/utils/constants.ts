import { IoRank, RiskExplanationTableRow } from '@app/types/io';

export const riskTable = {
  table: [
    [5, 10, 15, 20, 25],
    [4, 8, 12, 16, 20],
    [3, 6, 9, 12, 15],
    [2, 4, 6, 8, 10],
    [1, 2, 3, 4, 5],
  ] as IoRank[][],
  redRanks: [15, 20, 25, 16, 20] as IoRank[],
  yellowRanks: [10, 8, 12, 6, 9, 8] as IoRank[],
  allRisks: [1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 16, 20, 25],
};

export const ioTable = {
  table: [
    [5, 10, 15, 20, 25],
    [4, 8, 12, 16, 20],
    [3, 6, 9, 12, 15],
    [2, 4, 6, 8, 10],
    [1, 2, 3, 4, 5],
  ] as IoRank[][],
  ranks: [
    [1, 2, 3],
    [4, 5, 6],
    [8, 9, 10, 12],
    [15, 16, 20, 25],
  ] as IoRank[][],
  rankLevelsValues: {
    1: 3,
    2: 6,
    3: 12,
    4: 20,
  },
  rankLevelsColors: [
    '#215DB0',
    '#1C6E42',
    '#EC9A3C',
    '#AC2F33',
  ],
  getRankColor: (rank: IoRank) => {
    const rankLevelsColors = [
      '#215DB0',
      '#1C6E42',
      '#EC9A3C',
      '#AC2F33',
    ];

    if (rank <= 3) {
      return rankLevelsColors[0];
    }

    if (rank <= 6) {
      return rankLevelsColors[1];
    }

    if (rank <= 12) {
      return rankLevelsColors[2];
    }

    return rankLevelsColors[3];
  },
};

export const effortExplanationData: RiskExplanationTableRow[] = [
  {
    level: 1,
    title: 'Very Low',
    explanation: 'At this level, the task requires minimal effort. It can be completed quickly without requiring many additional resources or effort.',
  },
  {
    level: 2,
    title: 'Low',
    explanation: 'At this level, the task requires moderate but accessible effort. Although it may take some time and resources, it is not particularly difficult or time-consuming.',
  },
  {
    level: 3,
    title: 'Moderate',
    explanation: 'At this level, the task requires considerable effort. Significant time and additional resources may be needed to successfully complete the task. Some specific skills or knowledge may be required.',
  },
  {
    level: 4,
    title: 'High',
    explanation: 'At this level, the task demands significant effort. It can be challenging and may require a substantial investment of time, resources, and specialized skills. Careful planning and strategic approaches may be necessary.',
  },
  {
    level: 5,
    title: 'Very High',
    explanation: 'At the highest level of effort, the task represents an immense challenge. It requires intense, dedicated, and sustained effort over time. Coordinating teams, utilizing advanced resources, and overcoming complex obstacles may be involved.',
  },
];

export const complexityExplanationData: RiskExplanationTableRow[] = [
  {
    level: 1,
    title: 'Very Low',
    explanation: 'At this level, the complexity of the task is minimal. It is straightforward to understand and execute, generally not requiring specialized knowledge.',
  },
  {
    level: 2,
    title: 'Low',
    explanation: 'At this level, the complexity is slightly higher than the previous level but still relatively simple to approach. It may require some basic understanding but is not highly challenging.',
  },
  {
    level: 3,
    title: 'Moderate',
    explanation: 'At this level, the complexity of the task is moderate. It may require a certain level of experience or specialized knowledge to successfully complete. It may involve multiple steps or variables.',
  },
  {
    level: 4,
    title: 'High',
    explanation: 'At this level, the complexity is high, presenting a significant challenge. It requires a deep understanding of the subject matter, advanced technical skills, or a detailed approach to address the task.',
  },
  {
    level: 5,
    title: 'Very High',
    explanation: 'At the highest level of complexity, the task is extremely challenging. It may involve a combination of complex factors, in-depth analysis, and solving difficult problems. Specialized expertise and advanced knowledge may be required.',
  },
];
