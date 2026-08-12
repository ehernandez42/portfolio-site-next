import { getSubstackPosts } from "@/lib/substack";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const posts = await getSubstackPosts();
    return NextResponse.json(posts);
  } catch {
    return NextResponse.json([]);
  }
}
