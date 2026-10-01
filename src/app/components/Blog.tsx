import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { getAllPosts } from "../blog/posts";
import { Button } from "./ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/Card";
import { ImageWithFallback } from "./ui/ImageWithFallback";

export async function Blog() {
  const posts = await getAllPosts();
  const featuredPosts = posts.slice(0, 3);

  return (
    <section id="blog" className="py-20 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4 text-white">Notes from the build</h2>
          <p className="text-xl text-slate-400">
            Product thinking, firmware problem-solving, and the ideas behind the
            work I ship.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {featuredPosts.map((post) => (
            <Card
              key={post.slug}
              className="blog-card overflow-hidden bg-slate-950 border-slate-800"
            >
              <div className="blog-card-image relative h-48">
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
                <CardTitle className="blog-card-title text-xl text-white">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="blog-card-content px-6 pb-6">
                <CardDescription className="text-slate-400">
                  {post.excerpt}
                </CardDescription>
                <div className="mt-4">
                  <Link href={`/blog/${post.slug}`}>
                    <Button
                      variant="outline"
                      className="blog-card-button border-slate-700 text-white hover:bg-slate-900"
                    >
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            className="site-button-primary rounded-sm font-semibold"
          >
            <Link href="/blog">
              Explore all posts
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
