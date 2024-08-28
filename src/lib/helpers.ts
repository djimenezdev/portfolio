export const sleeper = async (ms: number) => {
  return new Promise((resolve) => setTimeout(() => resolve(true), ms));
};

export function parseTimeString(
  dateString: string,
  timeString: string,
  isUTC = false
): Date {
  const [time, period] = timeString.split(" ");
  const [hours, minutes, seconds] = time.split(":").map(Number);

  let date = new Date(dateString);

  if (isUTC) {
    date.setUTCHours(
      period.toLowerCase() === "pm" && hours !== 12
        ? hours + 12
        : hours === 12
        ? 0
        : hours,
      minutes,
      seconds
    );
  } else {
    date.setHours(
      period.toLowerCase() === "pm" && hours !== 12
        ? hours + 12
        : hours === 12
        ? 0
        : hours,
      minutes,
      seconds
    );
  }

  return date;
}
