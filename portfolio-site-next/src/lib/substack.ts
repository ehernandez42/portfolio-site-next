import { XMLParser } from "fast-xml-parser";

export interface SubstackPost {
  title: string;
  link: string;
  pubDate: string;
  image: string | null;
  description: string;
}

export async function getSubstackPosts(): Promise<SubstackPost[]> {
  const res = await fetch("https://kickedrocks.substack.com/feed");
  const xml = await res.text();

  const parser = new XMLParser({ ignoreAttributes: false });
  const feed = parser.parse(xml);

  const items = feed.rss.channel.item;
  if (!Array.isArray(items)) return [];

  return items.map((item: Record<string, unknown>) => ({
    title: (item.title as string) ?? "",
    link: (item.link as string) ?? "",
    pubDate: (item.pubDate as string) ?? "",
    image:
      (item.enclosure as Record<string, string> | undefined)?.["@_url"] ?? null,
    description: (item.description as string) ?? "",
  }));
}
