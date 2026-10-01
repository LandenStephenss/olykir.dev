import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
import { getReadTime } from "../components/utils";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  image: string;
  content: string;
};

const postsDirectory = path.join(process.cwd(), "src/app/blog/posts");

function formatDate(dateValue: string | Date): string {
  const date = typeof dateValue === "string" ? new Date(dateValue) : dateValue;

  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function sortPosts(posts: Post[]) {
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export async function getAllPosts(): Promise<Post[]> {
  const fileNames = fs
    .readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith(".md"));

  const posts = fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug: fileName.replace(/\.md$/, ""),
      title: data.title ?? "Untitled",
      excerpt: data.excerpt ?? "",
      date: formatDate(data.date ?? new Date()),
      readTime: `${getReadTime(content)} min read`,
      category: data.category ?? "General",
      author: data.author ?? "Landen Stephens",
      image:
        data.image ??
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
      content: "",
    } satisfies Post;
  });

  return sortPosts(posts);
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(remarkHtml).process(content);

  return {
    slug,
    title: data.title ?? "Untitled",
    excerpt: data.excerpt ?? "",
    date: formatDate(data.date ?? new Date()),
    readTime: `${getReadTime(content)} min read`,
    category: data.category ?? "General",
    author: data.author ?? "Landen Stephens",
    image:
      data.image ??
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    content: processedContent.toString(),
  };
}

export async function getPostSlugs() {
  return (await getAllPosts()).map((post) => ({ slug: post.slug }));
}
