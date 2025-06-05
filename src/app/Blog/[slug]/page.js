import Navbar from "@/components/Navbar";
import path from "path";
import fs from "fs";
import Button from "@/components/Button";
import ImageSectionCover from "@/components/ImageSectionCover";

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

      {/* Naslov */}
      <div className="mt-[80px] lg:mt-[100px] bg-background-secondary">
        <h1 className="flex items-center justify-center text-center text-xl md:text-2xl font-bold h-[80px] lg:h-[100px]">
          {post.title}
        </h1>
      </div>

      {/* Glavni sadržaj */}
      <article className="pt-10 px-4 md:max-w-[600px] lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1300px] mx-auto">
        
        {/* Sekcija sa slikom */}
        <section className="mb-10">
  <div className="relative w-full h-[200px] lg:h-[300px]">
    <ImageSectionCover
      src="/Smiljka1.jpg"
      alt="Terapija"
      className="w-full h-full"
    />
  </div>
</section>


        {/* Sekcije sa podnaslovima */}
        <section className="space-y-8">
          {post.subtitles.map((section, index) => (
            <div key={index}>
              <h2 className="italic font-semibold text-lg md:text-xl pb-3">
                {section.subtitle}
              </h2>
              <div className="text-text-primary text-sm md:text-lg pb-5">
                {Array.isArray(section.content) ? (
                  <ul className="list-disc list-inside">
                    {section.content.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  section.content
                )}
              </div>
            </div>
          ))}
        </section>

        {/* Dugme za povratak */}
        <section className="mt-10 text-center pb-10">
          <Button href="/Blog" text="Nazad na blog" styleType="blog" />
        </section>
      </article>
    </>
  );
}
