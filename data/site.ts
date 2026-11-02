export const siteConfig = {
  name: "Space Riots",
  title: "Space Riots — Space Events, Exploration & Technology",
  description:
    "Explore space events, rocket launches, exploration missions, astronomy, satellites, and the technologies shaping the future of space.",
  url: "https://www.spaceriots.com",
  language: "en",
  locale: "en_US",
} as const;

export function absoluteUrl(path: string = "/"): string {
  return new URL(path, siteConfig.url).toString();
}
