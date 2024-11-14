export const isSameDay = (timestamp1: number, timestamp2: number) => {
  const date1 = new Date(timestamp1);
  const date2 = new Date(timestamp2);

  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};

export const isMonday = (timestamp: number) => {
  const date = new Date(timestamp);
  return date.getDay() === 1;
};

export const isTuesday = (timestamp: number) => {
  const date = new Date(timestamp);
  return date.getDay() === 2;
};

export const getDaysBetweenTimestamps = (
  timestamp1: number,
  timestamp2: number,
) => {
  const differenceInMillis = Math.abs(timestamp2 - timestamp1);

  const daysBetween = differenceInMillis / (1000 * 60 * 60 * 24);

  return Math.floor(daysBetween);
};
