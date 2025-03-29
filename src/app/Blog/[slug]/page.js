import Navbar from "@/components/Navbar";
import path from "path";
import fs from "fs";

// Function to generate slug
function generateSlug(title) {
  return title.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");
}

// Function to get post by slug
async function getPostBySlug(slug) {
  const postsFilePath = path.join(process.cwd(), "src/data/posts.json");
  const fileContent = fs.readFileSync(postsFilePath, "utf-8");
  const postsData = JSON.parse(fileContent).articles;

  return postsData.find((post) => generateSlug(post.title) === slug);
}

export async function generateStaticParams() {
  const postsFilePath = path.join(process.cwd(), "src/data/posts.json");
  const fileContent = fs.readFileSync(postsFilePath, "utf-8");
  const postsData = JSON.parse(fileContent).articles;

  return postsData.map((post) => ({
    slug: generateSlug(post.title),
  }));
}

export default async function BlogPost({ params }) {
  const { slug } = params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return <p className="text-center text-red-600">Post not found.</p>;
  }

  return (
    <>
      <Navbar />
      <article className="pt-30 px-4">
        <h1 className="text-center text-lg font-bold">{post.title}</h1>
        <div className="mt-6 space-y-4">
          {post.subtitles.map((section, index) => (
            <section key={index}>
              <h2 className="italic font-semibold">{section.subtitle}</h2>
              <p className="text-gray-700">
                {Array.isArray(section.content) ? section.content.join(", ") : section.content}
              </p>
            </section>
          ))}
        </div>
      </article>
    </>
  );
}
