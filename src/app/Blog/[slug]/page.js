import Navbar from "@/components/Navbar";
import path from "path";
import fs from "fs";
import Button from "@/components/Button";
import ImageSectionCover from "@/components/ImageSectionCover";
import FadeUpStatic from "@/components/FadeUpStatic";
import FadeUp from "@/components/FadeUp";
import RandomQuote from "@/components/RandomQuote";

// Funkcija za generisanje slug-a iz naslova
function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
}

// Funkcija za dobijanje posta po slug-u
async function getPostBySlug(slug) {
  const postsFilePath = path.join(process.cwd(), "src/data/posts.json");
  const fileContent = fs.readFileSync(postsFilePath, "utf-8");
  const postsData = JSON.parse(fileContent).articles;

  return postsData.find((post) => generateSlug(post.title) === slug);
}

// Generisanje statičnih parametara za SSG
export async function generateStaticParams() {
  const postsFilePath = path.join(process.cwd(), "src/data/posts.json");
  const fileContent = fs.readFileSync(postsFilePath, "utf-8");
  const postsData = JSON.parse(fileContent).articles;

  return postsData.map((post) => ({
    slug: generateSlug(post.title),
  }));
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-center text-red-600 text-xl font-semibold">
          Post nije pronađen.
        </p>
      </main>
    );
  }

  return (
    <>
      <header>
        <FadeUpStatic>
          <Navbar />
        </FadeUpStatic>
      </header>

      {/* Citati ispod navigacije */}
      <FadeUp delay={0.2}>
        <div className="pt-[80px] lg:pt-[100px]">
          <RandomQuote />
        </div>
      </FadeUp>

      <main>
        {/* Naslov posta */}
        <FadeUp delay={0.4}>
          <section
            role="banner"
            className="bg-background-secondary"
            aria-label="Naslov blog posta"
          >
            <h1
              tabIndex={-1}
              className="flex items-center justify-center text-center text-xl md:text-2xl font-bold h-[80px] lg:h-[100px]"
            >
              {post.title}
            </h1>
          </section>
        </FadeUp>

        {/* Glavni sadržaj */}
        <FadeUp delay={0.6}>
          <article
            className="pt-10 px-4 md:max-w-[600px] lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1300px] mx-auto"
            aria-label={`Članak: ${post.title}`}
          >
            {/* Slika naslovne sekcije */}
            <section className="mb-10" aria-label="Naslovna slika blog posta">
              <div className="relative w-full h-[150px] md:h-[150px] lg:h-[200px] xl:h-[250px] 2xl:h-[300px] rounded-xl">
                <ImageSectionCover
                  src={post.insideImage}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </section>

            {/* Tekstualni podnaslovi i sadržaj */}
            <section className="space-y-8">
              {post.subtitles.map((section, index) => (
                <section key={index} aria-labelledby={`subtitle-${index}`}>
                  <h2
                    id={`subtitle-${index}`}
                    className="italic font-semibold text-lg md:text-xl pb-3"
                  >
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
                      <p>{section.content}</p>
                    )}
                  </div>
                </section>
              ))}
            </section>

            {/* Dugme za povratak */}
            <section className="mt-10 text-center pb-10">
              <Button
                href="/Blog"
                text="Nazad na blog"
                styleType="blog"
                aria-label="Nazad na listu blog postova"
              />
            </section>
          </article>
        </FadeUp>
      </main>
    </>
  );
}
