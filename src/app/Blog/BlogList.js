"use client";

import Link from "next/link";
import Image from "next/image";
import FadeUp from "@/components/FadeUp";

export default function BlogList({ posts }) {
  return (
    <div className="mx-auto max-w-screen-xl px-6 md:px-10 lg:px-20 py-10 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, index) => (
        <FadeUp key={post.id} delay={index * 0.1}>
          <Link href={`/Blog/${post.id}`}>
            <article className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-background-secondary">
              <Image
                src={post.image}
                alt={post.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg md:text-xl font-semibold mb-2 text-text-primary">
                  {post.title}
                </h2>
                {post.subtitle && (
                  <p className="text-text-secondary text-sm md:text-base">
                    {post.subtitle}
                  </p>
                )}
              </div>
            </article>
          </Link>
        </FadeUp>
      ))}
    </div>
  );
}
