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
export const parseTimeString = (timeStr: string, dateStr: string) => {
  const [time, period] = timeStr.split(" ");
  let [hours, minutes, seconds] = time.split(":").map(Number);

  // Convert to 24-hour format if PM
  if (period === "PM" && hours !== 12) {
    hours += 12;
  } else if (period === "AM" && hours === 12) {
    hours = 0;
  }

  const [year, month, day] = dateStr.split("-").map(Number);

  // create date object
  const date = new Date(year, month - 1, day, hours, minutes, seconds);

  return date;
};
