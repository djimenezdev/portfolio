export const sleeper = async (ms: number) => {
  return new Promise((resolve) => setTimeout(() => resolve(true), ms));
};

// Function to get today's date in YYYY-MM-DD format
export const getTodayDate = (dateString: string) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

// Function to parse time string and create a Date object
export function parseTimeString(timeString: string, baseDate: Date): Date {
  const [time, period] = timeString.split(" ");
  const [hours, minutes] = time.split(":").map(Number);

  let adjustedHours = hours;
  if (period.toLowerCase() === "pm" && hours !== 12) {
    adjustedHours += 12;
  } else if (period.toLowerCase() === "am" && hours === 12) {
    adjustedHours = 0;
  }

  const result = new Date(baseDate);
  result.setHours(adjustedHours, minutes, 0, 0);
  return result;
}
