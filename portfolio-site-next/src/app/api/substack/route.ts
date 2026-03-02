import { getSubstackPosts } from "@/lib/substack";
import { NextResponse } from "next/server";

export async function GET() {
  const posts = await getSubstackPosts();
  return NextResponse.json(posts);
}
