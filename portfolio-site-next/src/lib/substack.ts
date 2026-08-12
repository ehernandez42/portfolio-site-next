import { XMLParser } from "fast-xml-parser";

export interface SubstackPost {
  title: string;
  link: string;
  pubDate: string;
  image: string | null;
  description: string;
}

export async function getSubstackPosts(): Promise<SubstackPost[]> {
  const res = await fetch("https://kickedrocks.substack.com/feed", {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error("Unable to retrieve Substack posts");
  const xml = await res.text();

  const parser = new XMLParser({ ignoreAttributes: false });
  const feed = parser.parse(xml);

  const items = feed.rss?.channel?.item;
  if (!items) return [];

  const postItems = Array.isArray(items) ? items : [items];
  const plainText = (value: unknown) => String(value ?? "")
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();

  return postItems.map((item: Record<string, unknown>) => ({
    title: plainText(item.title),
    link: (item.link as string) ?? "",
    pubDate: (item.pubDate as string) ?? "",
    image:
      (item.enclosure as Record<string, string> | undefined)?.["@_url"] ?? null,
    description: plainText(item.description),
  }));
}
