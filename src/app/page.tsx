import { headers } from "next/headers";
import Home from "@/components/Home";
import { isMobileDevice } from "@/lib/device";
import { getGeolocation, isDarkMode } from "@/lib/geolocation";
import { sleeper } from "@/util/helpers";

export default async function HomePage() {
  const isMobile = isMobileDevice();

  const headersList = headers();
  const ip = headersList.get("x-forwarded-for") || "121.0.0.1";
  const geoData = await getGeolocation(ip);

  const isDark = await isDarkMode(geoData.latitude, geoData.longitude);

  await sleeper(500);

  return <Home isMobile={isMobile} isDark={isDark} />;
}
