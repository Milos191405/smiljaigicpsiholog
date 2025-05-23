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
      <article className="">
         <div className="pt-[64px] lg:pt-[100px]">
          <RandomQuote />
        </div>

       <h1 className="italic text-center font-semibold py-4 text-1xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-text-primary">
          Blog o psihoterapiji i razvoju deteta
        </h1>
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
