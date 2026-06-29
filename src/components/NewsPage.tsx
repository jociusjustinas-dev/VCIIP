import { useEffect, useState, type CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";

import { fetchLatestNewsPosts } from "../lib/wordpress";
import type { NewsPost } from "../types/news";
import { NewsCard } from "./NewsCard";
import { PageIntroHero } from "./PageIntroHero";

export function NewsPage() {
  const [posts, setPosts] = useState<NewsPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    fetchLatestNewsPosts(12)
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
    <main>
      <PageIntroHero
        eyebrow="VCIIP žiniasklaidoje"
        title="Naujienos"
        intro="VCIIP veiklos, investicijų ir ekosistemos plėtros naujienos iš oficialių komunikacijos kanalų."
      />

      <section className="relative bg-white section-shell">
        <div className="site-container px-6 max-[479px]:px-4">
          {isLoading ? (
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: 6 }, (_, index) => (
                <div
                  key={index}
                  className="flex flex-col border border-primary/10 bg-white"
                  aria-hidden="true"
                >
                  <div className="aspect-video border-b border-primary/10 bg-background" />
                  <div className="flex flex-col gap-3 p-5">
                    <div className="h-3 w-24 bg-primary/8" />
                    <div className="h-6 w-full bg-primary/8" />
                    <div className="h-16 w-full bg-primary/6" />
                  </div>
                </div>
              ))}
            </div>
          ) : posts.length === 0 ? (
            <p className="m-0 text-base font-medium leading-[1.6] text-muted">
              Šiuo metu naujienų nepavyko įkelti. Bandykite vėliau.
            </p>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3" data-reveal-group>
              {posts.map((post, index) => (
                <div
                  key={post.id}
                  className="reveal-item h-full"
                  style={{ "--reveal-delay": `${index * 70}ms` } as CSSProperties}
                >
                  <NewsCard post={post} className="w-full" />
                </div>
              ))}
            </div>
          )}

          <div className="mt-10 border-t border-dashed border-primary/20 pt-8">
            <a
              href="https://vciip.lt/"
              className="group inline-flex items-center gap-2 text-base font-semibold leading-none text-primary transition-colors duration-200 hover:text-accent"
            >
              Visos naujienos vciip.lt
              <ArrowUpRight
                size={16}
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
