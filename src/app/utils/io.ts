import { IoRank } from '@app/types/io';

/**
 * Convert a rank to a number
 * @param rank The rank to convert
 * @returns The IoRank | undefined of the rank
 */
export function numberToRank(number: number): IoRank | undefined {
  switch (number) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 3:
      return 3;
    case 4:
      return 4;
    case 5:
      return 5;
    case 6:
      return 6;
    case 8:
      return 8;
    case 9:
      return 9;
    case 10:
      return 10;
    case 12:
      return 12;
    case 14:
      return 14;
    case 15:
      return 15;
    case 16:
      return 16;
    case 20:
      return 20;
    case 25:
      return 25;
    default:
      return undefined;
  }
}

/**
 * Calculate the score of a task
 * @param riskLevel The risk level of the task
 * @param expectedTime The expected time of the task in hours
 * @param doneTime The time that the task is done in hours
 * @returns The score of the task
 */
export function calculateScore(riskLevel: number, expectedTime: number, doneTime: number): number {
  let baseScore = 0;

  if (riskLevel >= 1) {
    baseScore = 30;
  } else {
    baseScore = 0;
  }

  baseScore += riskLevel * 5;
  if (riskLevel > 10) {
    baseScore += (riskLevel - 10) * 2;
  }

  if (riskLevel <= 14) {
    baseScore += Math.floor(riskLevel / 7) * 10;
  } else {
    baseScore += Math.floor(14 / 7) * 10;
  }

  let riskScore = 0;

  if (baseScore !== 0) {
    const percentageOffset = 1 - (doneTime / expectedTime);

    if (percentageOffset >= 0.4) {
      riskScore = 5;
    } else if (percentageOffset >= 0) {
      riskScore = (percentageOffset * 5) / 0.4;
    } else if (percentageOffset >= -0.4) {
      riskScore = (percentageOffset * 5) / (0.4 - 5);
    } else {
      riskScore = 0;
    }
  } else {
    riskScore = 0;
  }

  return parseInt(String(baseScore + riskScore), 10);
}
