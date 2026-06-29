import { useEffect, useState, type CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";

import { fetchLatestNewsPosts } from "../lib/wordpress";
import type { NewsPost } from "../types/news";
import { NewsCard } from "./NewsCard";

export function MediaNewsSection() {
  const [posts, setPosts] = useState<NewsPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    fetchLatestNewsPosts(3)
      .then((nextPosts) => {
        if (isMounted) setPosts(nextPosts);
      })
      .catch(() => {
        if (isMounted) setPosts([]);
      })
      .finally(() => {
        if (isMounted) setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section id="naujienos" className="relative bg-white section-shell">
      <div className="site-container px-6 max-[479px]:px-4">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-dashed border-primary/28 pb-8" data-reveal-group>
          <p className="eyebrow reveal-item">VCIIP žiniasklaidoje</p>
          <h2 className="section-heading reveal-item m-0">Naujienos</h2>
        </div>

        {isLoading ? (
          <div className="grid gap-6 lg:grid-cols-3">
            {Array.from({ length: 3 }, (_, index) => (
              <div
                key={index}
                className="flex flex-col bg-white"
                aria-hidden="true"
              >
                <div className="aspect-video bg-background" />
                <div className="flex flex-col gap-3 pt-4">
                  <div className="h-3 w-24 bg-primary/8" />
                  <div className="h-6 w-full bg-primary/8" />
                  <div className="h-16 w-full bg-primary/6" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            className="flex gap-6 overflow-x-auto pb-1 [scrollbar-width:none] lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible [&::-webkit-scrollbar]:hidden"
            data-reveal-group
          >
            {posts.map((post, index) => (
              <div key={post.id} className="reveal-item h-full min-w-0" style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}>
                <NewsCard post={post} className="lg:w-full" />
              </div>
            ))}
          </div>
        )}

        <div className="reveal-item mt-10 border-t border-dashed border-primary/20 pt-8">
          <a
            href="/naujienos"
            className="group inline-flex items-center gap-2 text-base font-semibold leading-none text-primary transition-colors duration-200 hover:text-accent"
          >
            Žiūrėti visas naujienas
            <ArrowUpRight
              size={16}
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
