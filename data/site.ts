export const siteConfig = {
  name: "Space Riots",
  title: "Space Riots — Space Launches, Missions & Live Updates",
  description:
    "Track upcoming space launches, missions, satellite launches, countdowns, and important space events with Space Riots.",
  url: "https://spaceriots.com",
  language: "en",
  locale: "en_US",
} as const;

export function absoluteUrl(path: string = "/"): string {
  return new URL(path, siteConfig.url).toString();
}
