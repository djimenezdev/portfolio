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
    console.log("apiUrl --->  ", apiUrl);
    const sunriseSunsetResponse = await fetch(apiUrl);
    if (!sunriseSunsetResponse.ok) {
      throw new Error("Failed to fetch sunrise/sunset data");
    }
    const sunriseSunsetData = await sunriseSunsetResponse.json();
    console.log("sunriseSunsetData --->  ", sunriseSunsetData);
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
  console.log("timezoneApiUrl --->  ", timezoneApiUrl);

  const response = await fetch(timezoneApiUrl);
  if (!response.ok) {
    throw new Error("Failed to fetch timezone for sunrise/sunset data");
  }
  const timezoneData = await response.json();
  console.log("timezoneApiUrl response --->  ", timezoneData);
  const todayDate = getTodayDate(timezoneData.dateTime);
  console.log("todayDate --->  ", todayDate);

  if (!timezoneData) {
    return false;
  }

  const sunriseSunsetData = await fetchSunriseSunsetData(
    todayDate,
    geolocation
  );

  if (!sunriseSunsetData) {
    return false;
  } else {
    const { date, sunrise, sunset } = sunriseSunsetData;

    const now = new Date();
    const sunriseTime = parseTimeString(sunrise, date);
    const sunsetTime = parseTimeString(sunset, date);
    console.log("sunriseTime --->  ", sunriseTime);
    console.log("sunsetTime --->  ", sunsetTime);

    console.log("now --->  ", now);
    console.log("now < sunriseTime --->  ", now < sunriseTime);
    console.log("now > sunsetTime --->  ", now > sunsetTime);
    return now < sunriseTime || now > sunsetTime;
  }
};
