import { parseTimeString } from "./helpers";

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

/* export const getGeolocation = async (ip: string) => {
  try {
    const res = await fetch(
      `https://api.ip2location.io/?key=${process.env.IP2_LOCATION_KEY}&ip=${ip}`
    );
    const resData = await res.json();
    console.log(resData);
    return resData;
  } catch (error) {
    console.error("Error fetching geolocation:", error);
    return null;
  }
}; */

export const isDarkMode = async (lat: number, long: number) => {
  try {
    const res = await fetch(
      `https://api.sunrisesunset.io/json?lat=${lat}&lng=${long}`
    );
    const resData = await res.json();
    //   res returns results object which returns another object containing sunrise and sunset
    // use that data to return
    const { date, sunrise, sunset } = resData.results;
    console.log(date, sunrise, sunset);
    const now = new Date();
    const nowUTC = new Date(
      now.getUTCFullYear(),
      now.getUTCMonth(),
      now.getUTCDate(),
      now.getUTCHours(),
      now.getUTCMinutes(),
      now.getUTCSeconds()
    );
    const sunriseTime = parseTimeString(date, sunrise);
    const sunsetTime = parseTimeString(date, sunset);
    // If current time is after sunset, it's dark mode
    if (nowUTC >= sunsetTime) {
      return true;
    }

    // If current time is before sunrise, it's dark mode
    if (nowUTC < sunriseTime) {
      return true;
    }

    // Otherwise, it's light mode (between sunrise and sunset)
    return false;
  } catch (error) {
    console.error("Error fetching geolocation:", error);
    return false;
  }
};
