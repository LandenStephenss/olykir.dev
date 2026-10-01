"use client";

import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { useMemo, useState } from "react";
import type { Post } from "./posts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/Card";
import { ImageWithFallback } from "../components/ui/ImageWithFallback";

export function BlogSorter({ posts }: { posts: Post[] }) {
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

  const sortedPosts = useMemo(() => {
    const copy = [...posts];

    return copy.sort((a, b) => {
      const aTime = new Date(a.date).getTime();
      const bTime = new Date(b.date).getTime();

      return sortOrder === "newest" ? bTime - aTime : aTime - bTime;
    });
  }, [posts, sortOrder]);

  return (
    <div className="space-y-8">
      <div className="flex justify-end">
        <label className="flex items-center gap-3 text-sm text-slate-300">
          <span>Sort by</span>
          <select
            value={sortOrder}
            onChange={(event) =>
              setSortOrder(event.target.value as "newest" | "oldest")
            }
            className="rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-white focus:border-rose-500 focus:outline-none"
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </label>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {sortedPosts.map((post) => (
          <Card
            key={post.slug}
            className="blog-card overflow-hidden bg-slate-950 border-slate-800"
          >
            <div className="blog-card-image relative h-56">
              <ImageWithFallback
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader className="blog-card-header px-6 pt-6 pb-0">
              <div className="blog-card-meta flex items-center gap-2 text-sm text-rose-400 mb-3">
                <span>{post.category}</span>
                <span>•</span>
                <span className="flex items-center gap-1 text-slate-400">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </span>
              </div>
              <CardTitle className="blog-card-title text-2xl text-white">
                {post.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="blog-card-content px-6 pb-6">
              <CardDescription className="text-slate-400 mb-4">
                {post.excerpt}
              </CardDescription>
              <div className="flex items-center justify-between text-sm text-slate-500">
                <span>{post.date}</span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-rose-400 hover:text-rose-300 transition-colors"
                >
                  Read more
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
