"use client";

import FadeUp from "@/components/FadeUp";
import RandomQuote from "@/components/RandomQuote";
import Link from "next/link";
import Image from "next/image";

export default function BlogList({ posts }) {
  return (
    <section aria-labelledby="blog-title" className="px-4 md:px-0">
      {/* Quote odmah ispod menija sa fade */}
      <FadeUp delay={0}>
        <div className="pt-[80px] lg:pt-[100px]">
          <RandomQuote />
        </div>
      </FadeUp>

      {/* Naslov */}
      <FadeUp delay={0.2}>
        <h1
          id="blog-title"
          className="italic text-center font-semibold pt-6 text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-text-primary"
        >
          Blog o psihoterapiji i razvoju deteta
        </h1>
      </FadeUp>

      {/* Lista postova sa stagger fade */}
      <ul className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-2 md:max-w-[600px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1400px] mx-auto pb-10">
        {posts.map((post, index) => (
          <FadeUp key={post.id} delay={0.3 + index * 0.15}>
            <li className="text-center p-6 bg-background-secondary rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.03] transition-transform duration-300 ease-in-out">
              <Link href={`/Blog/${post.slug}`} className="inline-block hover:opacity-90">
                <article aria-label={post.title} className="flex flex-col items-center space-y-4">
                  <div className="relative w-72 sm:w-92 md:w-96 lg:w-96 aspect-square rounded-xl shadow-md overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
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
          </FadeUp>
        ))}
      </ul>
    </section>
  );
}
