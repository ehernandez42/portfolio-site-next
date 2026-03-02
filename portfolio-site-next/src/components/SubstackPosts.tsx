"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { SubstackPost } from "@/lib/substack";

export default function SubstackPosts() {
  const [posts, setPosts] = useState<SubstackPost[]>([]);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    fetch("/api/substack")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  const visiblePosts = posts.slice(0, visibleCount);
  const hasMore = visibleCount < posts.length;

  if (posts.length === 0) return null;

  return (
    <section>
      <h2 className="font-poppins font-bold text-3xl lg:text-4xl mb-8 text-white">
        Blog Posts
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {visiblePosts.map((post) => (
          <a
            key={post.link}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#111827] border border-[#1f2937] rounded-xl overflow-hidden hover:border-sawad-lime transition-colors"
          >
            {post.image && (
              <div className="relative w-full aspect-video">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="p-4 flex flex-col gap-2">
              <h3 className="font-poppins font-bold text-lg text-white leading-tight">
                {post.title}
              </h3>
              <time className="text-sawad-muted text-xs">
                {new Date(post.pubDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </time>
              {post.description && (
                <p className="text-sawad-muted text-sm line-clamp-3">
                  {post.description}
                </p>
              )}
            </div>
          </a>
        ))}
      </div>

      {hasMore && (
        <div className="mt-6 text-center">
          <button
            onClick={() => setVisibleCount((c) => c + 10)}
            className="px-6 py-2 border border-sawad-lime text-sawad-lime rounded-lg hover:bg-sawad-lime hover:text-black transition-colors font-poppins font-medium"
          >
            Show More
          </button>
        </div>
      )}
    </section>
  );
}
