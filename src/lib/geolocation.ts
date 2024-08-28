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

export const getGeolocation = async (ip: string) => {
  try {
    const res = await fetch(
      `https://api.ip2location.io/?key=${process.env.IP2_LOCATION_KEY}&ip=${ip}`
    );
    const resData = await res.json();
    return resData;
  } catch (error) {
    console.error("Error fetching geolocation:", error);
    return null;
  }
};

export const isDarkMode = async (lat: number, long: number) => {
  try {
    const res = await fetch(
      `https://api.sunrisesunset.io/json?lat=${lat}&lng=${long}`
    );
    const resData = await res.json();
    //   res returns results object which returns another object containing sunrise and sunset
    // use that data to return
    const { date, sunrise, sunset } = resData.results;

    const now = new Date();
    const sunriseTime = parseTimeString(date, sunrise);
    const sunsetTime = parseTimeString(date, sunset);

    return now < sunriseTime || now > sunsetTime;
  } catch (error) {
    console.error("Error fetching geolocation:", error);
    return false;
  }
};
