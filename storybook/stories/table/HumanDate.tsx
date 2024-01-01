export const HumanDate = ({ date: value }: { date?: string | number | Date }) => {
  if (!value) return null;
  // console.log({ value });
  const date = new Date(value);
  // console.log({ date });
  return date.toISOString().replace(/T/, ' ').substring(0, 19);
};
