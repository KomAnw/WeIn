export const getTimeRemaining = (targetDate: string) => {
  const now = new Date();
  const target = new Date(targetDate);

  const addPadStart = (num: number) => num.toString().padStart(2, '0');

  const totalSeconds = Math.floor((target.getTime() - now.getTime()) / 1000);
  const weeks = addPadStart(Math.floor(totalSeconds / (60 * 60 * 24 * 7)));
  const days = addPadStart(Math.floor((totalSeconds % (60 * 60 * 24 * 7)) / (60 * 60 * 24)));
  const hours = addPadStart(Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60)));
  const minutes = addPadStart(Math.floor((totalSeconds % (60 * 60)) / 60));
  return [
    { name: 'недель', value: weeks },
    { name: 'дней', value: days },
    { name: 'часов', value: hours },
    { name: 'минут', value: minutes },
  ];
};
