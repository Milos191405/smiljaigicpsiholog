import Navbar from "@/components/Navbar";
import Link from "next/link";
import path from "path";
import fs from "fs";
import RandomQuote from "@/components/RandomQuote";
import Image from "next/image";

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

       <h1 className="italic text-center font-semibold py-5 text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-text-primary">
          Blog o psihoterapiji i razvoju deteta
        </h1>
        <ul className="mt-8 space-y-4 text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-xl">
  {posts.map((post) => (
    <li key={post.id} className="text-center ">
      <Link
        href={`/Blog/${generateSlug(post.title)}`}
        className="inline-block"
      >
        <div className="flex flex-col items-center space-y-2 hover:opacity-90 mb-5 ">
          <div className="relative w-72 sm:w-92 md:w-96 lg:w-96 xl:w-96 aspect-[4/4]">
  <Image
    src={post.image}
    alt={post.title}
    fill
    className="rounded-xl shadow-md object-cover"
    sizes="(max-width: 640px) 10rem, (max-width: 768px) 13rem, (max-width: 1024px) 16rem, (max-width: 1280px) 20rem, 24rem"
  />
</div>
          <div className="hover:underline">
            <h2 className="font-semibold text-foreground text-md  lg:text-lg xl:text-xl 2xl:text-xl">{post.title}</h2>
            <p className="font-light">{post.subtitle}</p>
          </div>
        </div>
      </Link>
    </li>
  ))}
</ul>

      </article>
    </>
  );
}
