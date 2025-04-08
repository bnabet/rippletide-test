export const getDuration = (start: Date, end: Date) => {
  return Math.round((end.getTime() - start.getTime()) / (1000 * 60));
};
