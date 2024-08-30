import { headers } from "next/headers";
import { CreativeWork, WithContext } from "schema-dts";
import Home from "@/components/Home";
import { isMobileDevice } from "@/lib/device";
import { isDarkMode } from "@/lib/geolocation";

const jsonLd: WithContext<CreativeWork> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Daniel Jimenez | Full Stack Developer",
  sameAs: [
    "https://github.com/djimenezdev",
    "https://www.linkedin.com/in/djimenezdev/",
    "https://x.com/djimenezdev",
    "https://www.instagram.com/djimenezdev/",
  ],
  description:
    "Full Stack Developer specializing in Next.js, React and Web 3. Building digital web experiences with a focus on UX. Explore my projects and skills.",
  image: "https://utfs.io/f/cfac4792-ee6f-4cab-879a-82b708ad2dc8-hec2gg.png",
  author: {
    "@type": "Person",
    name: "Daniel Jimenez",
    url: "https://www.djimenezdev.com",
  },
  keywords: [
    "Frontend",
    "Backend",
    "Full Stack",
    "Next.js",
    "React",
    "Web 3",
    "Full Stack Developer",
    "Web Development",
    "Portfolio",
    "MongoDB",
    "Tailwind CSS",
    "TypeScript",
    "JavaScript",
    "AI",
    "Sentry",
    "Posthog",
  ],
};

export default async function HomePage() {
  const isMobile = isMobileDevice();

  // dynamic function
  const headersList = headers();
  /* const geoData = JSON.parse(
    headersList.get("x-geo-data") || "{latitude: null, longitude: null}"
  ); */

  const geoData = {
    city: "Lake%20Forest",
    country: "US",
    flag: "🇺🇸",
    countryRegion: "CA",
    region: "sfo1",
    latitude: "33.6416",
    longitude: "-117.6898",
  };

  const isDark = await isDarkMode(geoData);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Home isMobile={isMobile} isDark={isDark} />
    </>
  );
}
