import { parseTimeString } from "./helpers";

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
