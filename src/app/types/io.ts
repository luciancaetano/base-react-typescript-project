export type IoRank = 1 | 2 | 3 | 4 | 5 | 6 | 8 | 9 | 10 | 12 | 14 | 15 | 16 | 20 | 25;

export interface RiskExplanationTableRow {
  level: number;
  title: string;
  explanation: string;
}
