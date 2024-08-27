import { headers } from "next/headers";
import { UAParser } from "ua-parser-js";

export const isMobileDevice = () => {
  if (typeof process === "undefined") {
    throw new Error(
      "[Server method] you are importing a server-only module outside of server"
    );
  }

  const { get } = headers();
  const ua = get("user-agent");

  const device = new UAParser(ua || "").getDevice();
  return device.type === "mobile";
};

export const isTabletDevice = () => {
  if (typeof process === "undefined") {
    throw new Error(
      "[Server method] you are importing a server-only module outside of server"
    );
  }

  const { get } = headers();
  const ua = get("user-agent");

  const parser = new UAParser(ua || "");

  // work around since apple froze user agent string detection
  const device2 = parser.getDevice();

  // return device.type === "mobile";
};
