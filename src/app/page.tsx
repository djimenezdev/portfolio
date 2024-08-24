import Home from "@/components/Home";
import { isMobileDevice } from "@/lib/device";

export default function HomePage() {
  const isMobile = isMobileDevice();

  return <Home isMobile={isMobile} />;
}
