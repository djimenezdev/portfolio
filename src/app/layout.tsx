import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { CSPostHogProvider } from "../providers/PosthogProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Daniel Jimenez | Full Stack Developer",
  applicationName: "Daniel Jimenez Full Stack Developer Portfolio",
  description:
    "Full Stack Developer specializing in Next.js, React and Web 3. Building digital web experiences with a focus on UX. Explore my projects and skills.",
  creator: "Daniel Jimenez",
  publisher: "DJimenezDev",
  robots: { index: true, follow: false },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.djimenezdev.com",
    siteName: "Daniel Jimenez | Full Stack Developer",
    images: [
      {
        url: "https://utfs.io/f/cfac4792-ee6f-4cab-879a-82b708ad2dc8-hec2gg.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Jimenez | Full Stack Developer",
    description:
      "Full Stack Developer specializing in Next.js, React and Web 3. Building digital web experiences with a focus on UX.",
    images: [
      "https://utfs.io/f/cfac4792-ee6f-4cab-879a-82b708ad2dc8-hec2gg.png",
    ],
  },
  alternates: {
    canonical: "https://www.djimenezdev.com",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body>
        <CSPostHogProvider>
          {children}
          <SpeedInsights />
        </CSPostHogProvider>
      </body>
    </html>
  );
}
