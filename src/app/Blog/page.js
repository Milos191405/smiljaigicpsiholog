import Navbar from "@/components/Navbar";
import Link from "next/link";
import path from "path";
import fs from "fs";
import RandomQuote from "@/components/RandomQuote";

// Function to generate a URL-friendly slug
function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
}

// Function to fetch posts from JSON file
async function fetchPosts() {
  const postsFilePath = path.join(process.cwd(), "src/data/posts.json");
  const fileContent = fs.readFileSync(postsFilePath, "utf-8");
  const postsData = JSON.parse(fileContent).articles;
  return postsData;
}

export default async function Blog() {
  const posts = await fetchPosts();

  if (!Array.isArray(posts)) {
    return <p>No blog posts found.</p>;
  }

  return (
    <>
      <Navbar />
      <article className="pt-20">
        <RandomQuote />

        <p className="text-center text-lg  font-bold">Blog</p>
        <ul className="mt-8 space-y-4">
          {posts.map((post) => (
            <li key={post.id} className="text-center">
              <Link
                href={`/Blog/${generateSlug(post.title)}`}
                className="font-semibold text-foreground hover:underline"
              >
                {post.title}
              </Link>
              <p className="">{post.subtitle}</p>
            </li>
          ))}
        </ul>
      </article>
    </>
  );
}
