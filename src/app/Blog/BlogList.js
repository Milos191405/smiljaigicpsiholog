"use client";

import Link from "next/link";
import Image from "next/image";
import FadeUp from "@/components/FadeUp";
import { useState, useEffect } from "react";

export default function BlogList({ posts: initialPosts }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simuliramo fetch ili primanje props-a
    setPosts(initialPosts);
    setLoading(false);
  }, [initialPosts]);

  const skeletons = Array(6).fill(0); // broj skeleton kartica

  return (
    <div className="mx-auto max-w-screen-xl px-6 md:px-10 lg:px-20 py-10 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {loading
        ? skeletons.map((_, index) => (
            <FadeUp key={index} delay={index * 0.1}>
              <div className="rounded-lg overflow-hidden shadow-lg animate-pulse bg-background-secondary h-72">
                <div className="w-full h-48 bg-gray-300"></div>
                <div className="p-4">
                  <div className="h-6 bg-gray-400 rounded mb-2 w-3/4"></div>
                  <div className="h-4 bg-gray-400 rounded w-1/2"></div>
                </div>
              </div>
            </FadeUp>
          ))
        : posts.map((post, index) => (
            <FadeUp key={post.id} delay={index * 0.1}>
              <Link href={`/Blog/${post.id}`}>
                <article className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-background-secondary">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover"
                    priority={index === 0} // LCP optimizacija prve slike
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
