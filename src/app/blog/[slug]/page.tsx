import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import { getPostBySlug, getPostSlugs } from "../posts";
import { ImageWithFallback } from "../../components/ui/ImageWithFallback";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return getPostSlugs();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post not found",
    };
  }

  return {
    title: `${post.title} | Landen Stephens`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="blog-post-page min-h-screen bg-black pt-24">
      <article className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-slate-300 hover:text-rose-400 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to blog
          </Link>

          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-3 text-sm text-rose-400 mb-4">
              <span>{post.category}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span className="flex items-center gap-1 text-slate-400">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl text-white mb-4">
              {post.title}
            </h1>
            <p className="text-xl text-slate-400">{post.excerpt}</p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-800 mb-10">
            <ImageWithFallback
              src={post.image}
              alt={post.title}
              className="w-full h-80 object-cover"
            />
          </div>

          <div
            className="blog-post-content prose max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
    </main>
  );
}
