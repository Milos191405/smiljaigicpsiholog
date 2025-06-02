import Navbar from "@/components/Navbar";
import path from "path";
import fs from "fs";
import Image from "next/image";

// Function to generate slug
function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
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
      <div className="mt-[60px] bg-background-secondary">
        <h1 className="text-center text-lg font-bold py-10">{post.title}</h1>
      </div>

      <article className="pt-10 px-4">
        <Image
          src={post.image}
          alt={post.title}
          width={600}
          height={400}
          className="rounded-xl shadow-md "
        />
        <div className="mt-6 space-y-4">
          {post.subtitles.map((section, index) => (
            <section key={index}>
              <h2 className="italic font-semibold text-lg pb-3">{section.subtitle}</h2>
              <div className="text-text-primary primary text-sm pb-5">
                {Array.isArray(section.content) ? (
                  <ul className="list-disc list-inside ">
                    {section.content.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  section.content
                )}
              </div>
            </section>
          ))}
        </div>
      </article>
    </>
  );
}
