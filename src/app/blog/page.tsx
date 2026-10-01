import { getAllPosts } from "./posts";
import { BlogSorter } from "./BlogSorter";

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className="blog-page min-h-screen bg-black pt-24">
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-12">
            <p className="text-rose-400 mb-4">Blog</p>
            <h1 className="text-5xl md:text-6xl text-white mb-6">
              Product notes, hardware thinking, and the work behind the build
            </h1>
            <p className="text-xl text-slate-400">
              Short reflections on product design, firmware challenges, and
              creative systems that shape the way I ship.
            </p>
          </div>

          <BlogSorter posts={posts} />
        </div>
      </section>
    </main>
  );
}
