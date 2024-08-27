// Projects to potentially show
import prospectiveThumbnail from "@/static/images/prospective_thumbnail.png";
import web3SpaceDefenseThumbnail from "@/static/images/defense_thumbnail.png";
import oldeusThumbnail from "@/static/images/oldeus_thumbnail.png";
/*
 * Prospective
 * Oldeus
 * this portfolio
 * Web3 Base Defense
 * MDS Homes Realtor Website
 * Zuku
 */

export const projects = [
  {
    title: "Prospective.world",
    description: `A Web3 app that allows you to interact 
      on a blockchain network called TRON. Embark on a revolutionary 
      journey through the digital frontier with Prospective. Designed 
      to elevate creators, empower professionals, and transform play.`,
    imageSrc: prospectiveThumbnail,
    imageAlt: "Prospective.world project thumbnail for project card",
    href: "https://www.prospective.world/",
    ariaLabel: "Prospective.world (opens in a new tab)",
    technologies: [
      "Web 3.0",
      "Next.js",
      "Typescript",
      "Google Analytics",
      "Styled Components",
      "TRON",
    ],
  },
  {
    title: "Web 3.0 Space Defense",
    description: `A 2D shooter game built on the Polygon blockchain using Next.js. As well as the 
    Dalle API for character image generation. Further immerse yourself into the world of blockchain 
    by having fun`,
    imageSrc: web3SpaceDefenseThumbnail,
    imageAlt: "Web 3.0 Space Defense project thumbnail for project card",
    href: "https://web3defense.nazaweb.com",
    ariaLabel: "Web 3.0 Space Defense (opens in a new tab)",
    technologies: [
      "Web 3.0",
      "Gaming",
      "Ethereum",
      "Solidity",
      "Alchemy",
      "Next.js",
      "Dalle",
    ],
  },
  {
    title: "Oldeus",
    description: `A project with a lofty vision to build the most authentic 
    decentralized community of manga, anime, and fantasy storytelling fans. We all have a story. 
    What's yours?`,
    imageSrc: oldeusThumbnail,
    imageAlt: "Oldeus project thumbnail for project card",
    href: "https://oldeus.nazaweb.com",
    ariaLabel: "Oldeus (opens in a new tab)",
    technologies: ["Web 3.0", "Next.js", "Framer Motion", "Styled Components"],
  },
];
