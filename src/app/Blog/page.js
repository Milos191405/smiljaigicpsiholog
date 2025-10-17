import Navbar from "@/components/Navbar";
import Link from "next/link";
import path from "path";
import fs from "fs";
import RandomQuote from "@/components/RandomQuote";
import Image from "next/image";
import Footer from "@/components/Footer";

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
      <header>
        <Navbar />
      </header>

      <main>
        <section className="pt-[80px] lg:pt-[100px]">
          <RandomQuote />
        </section>

        <section aria-labelledby="blog-title" className="px-4 md:px-0">
          <h1
            id="blog-title"
            className="italic text-center font-semibold pt-6 text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-text-primary"
          >
            Blog o psihoterapiji i razvoju deteta
          </h1>

          <ul className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-2 md:max-w-[700px] lg:max-w-[1000px] xl:max-w-[1200px] mx-auto pb-10">
            {posts.map((post) => (
              <li key={post.id}className="text-center  p-6 bg-background-secondary rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.03] transition-transform duration-300 ease-in-out">
                <Link
                  href={`/Blog/${generateSlug(post.title)}`}
                  className="inline-block hover:opacity-90"
                >
                  <article
                    aria-label={post.title}
                    className="flex flex-col items-center space-y-4 "
                  >
                    <div className="relative w-72 sm:w-92 md:w-96 lg:w-96 aspect-square rounded-xl shadow-md overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 10rem, (max-width: 768px) 13rem, (max-width: 1024px) 16rem, (max-width: 1280px) 20rem, 24rem"
                      />
                    </div>
                    <div className="hover:underline px-2">
                      <h2 className="font-semibold text-foreground text-md lg:text-lg xl:text-xl 2xl:text-xl">
                        {post.title}
                      </h2>
                      <p className="font-light">{post.subtitle}</p>
                    </div>
                  </article>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
