import { getDaysBetweenTimestamps, isMonday, isTuesday } from "./date-helpers";

export const getTokens = (
  tokens: number,
  timestamp: number,
  timeNow: number,
) => {
  const numberOfDays = getDaysBetweenTimestamps(timestamp, timeNow);

  if (numberOfDays === 0) return tokens;

  if (numberOfDays === 1) {
    if (isMonday(timeNow)) {
      return Math.min(3, tokens + 2);
    }
    return Math.min(3, tokens + 1);
  }

  if (numberOfDays === 2) {
    if (isMonday(timeNow) || isTuesday(timeNow)) {
      return 3;
    }
    return Math.min(3, tokens + 2);
  }

  return 3;
};
