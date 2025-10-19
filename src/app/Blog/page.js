import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RandomQuote from "@/components/RandomQuote";
import path from "path";
import fs from "fs";
import BlogList from "./BlogList"; // client component

async function fetchPosts() {
  const postsFilePath = path.join(process.cwd(), "src/data/posts.json");
  const fileContent = fs.readFileSync(postsFilePath, "utf-8");
  return JSON.parse(fileContent).articles;
}

export default async function Blog() {
  const posts = await fetchPosts();

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <BlogList posts={posts} />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
