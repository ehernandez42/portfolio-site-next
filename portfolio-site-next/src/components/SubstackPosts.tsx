"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { SubstackPost } from "@/lib/substack";

export default function SubstackPosts() {
  const [posts, setPosts] = useState<SubstackPost[]>([]);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 760px)");
    const updateVisibleCount = () => setVisibleCount(mobileQuery.matches ? 1 : 3);
    updateVisibleCount();
    mobileQuery.addEventListener("change", updateVisibleCount);

    fetch("/api/substack")
      .then((res) => (res.ok ? res.json() : []))
      .then((data: SubstackPost[]) => setPosts(data))
      .catch(() => setPosts([]));

    return () => mobileQuery.removeEventListener("change", updateVisibleCount);
  }, []);

  if (posts.length === 0) return null;

  const visiblePosts = posts.slice(0, visibleCount);
  const hasMore = visibleCount < posts.length;

  return (
    <section className="atlas-writing" id="writing" aria-labelledby="writing-title">
      <div className="atlas-writing-intro">
        <p>From the notebook</p>
        <h2 id="writing-title">Writings</h2>
        <a href="https://kickedrocks.substack.com" target="_blank" rel="noreferrer">
          Visit Substack <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className="atlas-post-list">
        {visiblePosts.map((post) => (
          <article key={post.link} className="atlas-post">
            <a href={post.link} target="_blank" rel="noreferrer">
              {post.image && (
                <div className="atlas-post-image">
                  <Image src={post.image} alt="" fill sizes="(max-width: 760px) 100vw, 33vw" className="object-cover" />
                </div>
              )}
              <div className="atlas-post-content">
                <time dateTime={post.pubDate}>
                  {new Date(post.pubDate).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                </time>
                <h3>{post.title}</h3>
                {post.description && <p>{post.description}</p>}
                <span className="atlas-post-read">Read article <b aria-hidden="true">↗</b></span>
              </div>
            </a>
          </article>
        ))}
      </div>
      {hasMore && <button className="atlas-post-more" onClick={() => setVisibleCount((count) => count + 9)}>Show more writing</button>}
    </section>
  );
}
