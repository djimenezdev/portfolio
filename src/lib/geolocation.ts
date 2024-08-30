import { Geo } from "@vercel/functions";
import { getTodayDate, parseTimeString } from "./helpers";

// Add this function to handle IP address retrieval more securely
export function getClientIp(headersList: Headers): string | null {
  const xForwardedFor = headersList.get("x-forwarded-for");
  if (xForwardedFor) {
    // Use the last IP in the list (added by the nearest proxy)
    const ips = xForwardedFor.split(",").map((ip) => ip.trim());
    return ips[ips.length - 1];
  }

  // Fallback to direct connection IP
  return headersList.get("remote-addr") || null;
}

// Function to fetch sunrise and sunset data from the API
async function fetchSunriseSunsetData(date: string, geolocation: Geo) {
  try {
    const apiUrl = `https://api.sunrisesunset.io/json?lat=${geolocation.latitude}&lng=${geolocation.longitude}&date=${date}`;
    const sunriseSunsetResponse = await fetch(apiUrl);
    if (!sunriseSunsetResponse.ok) {
      throw new Error("Failed to fetch sunrise/sunset data");
    }
    const sunriseSunsetData = await sunriseSunsetResponse.json();
    return sunriseSunsetData.results;
  } catch (error) {
    console.error("Error fetching sunrise/sunset data:", error);
    return null;
  }
}

export const isDarkMode = async (geolocation: Geo) => {
  if (
    !geolocation.latitude ||
    !geolocation.longitude ||
    !geolocation.country ||
    !geolocation.city ||
    !geolocation.flag ||
    !geolocation.countryRegion ||
    !geolocation.region
  ) {
    return false;
  }

  const timezoneApiUrl = `https://timeapi.io/api/time/current/coordinate?latitude=${geolocation.latitude}&longitude=${geolocation.longitude}`;

  const response = await fetch(timezoneApiUrl);
  if (!response.ok) {
    return false;
  }
  const timezoneData = await response.json();
  const todayDateFormatted = getTodayDate(timezoneData.dateTime);

  if (!timezoneData) {
    return false;
  }

  const sunriseSunsetData = await fetchSunriseSunsetData(
    todayDateFormatted,
    geolocation
  );

  if (!sunriseSunsetData) {
    return false;
  } else {
    const { sunrise, sunset } = sunriseSunsetData;

    const timeDate = new Date(timezoneData.dateTime);
    if (isNaN(timeDate.getTime())) {
      return false;
    }
    const sunriseTime = parseTimeString(sunrise, timeDate);
    const sunsetTime = parseTimeString(sunset, timeDate);
    return timeDate < sunriseTime || timeDate > sunsetTime;
  }
};
