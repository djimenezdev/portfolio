export const sleeper = async (ms: number) => {
  return new Promise((resolve) => setTimeout(() => resolve(true), ms));
};

export const parseTimeString = (
  dateString: string,
  timeString: string
): Date => {
  const [year, month, day] = dateString.split("-").map(Number);
  const [time, period] = timeString.split(" ");
  const [hours, minutes, seconds] = time.split(":").map(Number);

  const date = new Date(year, month - 1, day);
  date.setHours(
    hours + (period === "PM" && hours !== 12 ? 12 : 0),
    minutes,
    seconds
  );

  return date;
};
