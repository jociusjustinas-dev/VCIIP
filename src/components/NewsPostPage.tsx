import { useEffect, useState, type CSSProperties } from "react";
import { ArrowLeft } from "lucide-react";

import {
  fetchLatestNewsPosts,
  fetchPostBySlug,
  formatNewsDate,
  getNewsImageUrl,
} from "../lib/wordpress";
import type { NewsPost, NewsPostDetail } from "../types/news";
import { NewsCard } from "./NewsCard";
import { ArticleShareActions } from "./ArticleShareActions";

const articleColumnClass = "mx-auto w-full max-w-4xl";
const articleTopSpacing = "pt-32 max-[991px]:pt-28 max-[479px]:pt-24";

export function NewsPostPage({ slug }: { slug: string }) {
  const [post, setPost] = useState<NewsPostDetail | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<NewsPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    let isMounted = true;

    Promise.all([fetchPostBySlug(slug), fetchLatestNewsPosts(4)])
      .then(([nextPost, latestPosts]) => {
        if (!isMounted) return;

        if (!nextPost) {
          setNotFound(true);
          setPost(null);
          setRelatedPosts(latestPosts.slice(0, 3));
          return;
        }

        setPost(nextPost);
        setRelatedPosts(latestPosts.filter((item) => item.id !== nextPost.id).slice(0, 3));
      })
      .catch(() => {
        if (!isMounted) return;
        setNotFound(true);
        setPost(null);
        setRelatedPosts([]);
      })
      .finally(() => {
        if (isMounted) setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [slug]);

  if (isLoading) {
    return (
      <main>
        <section className={`relative bg-white ${articleTopSpacing}`}>
          <div className="content-container">
            <div className={articleColumnClass}>
              <div className="border-b border-dashed border-primary/28 pb-10 pt-2">
                <div className="h-3 w-24 bg-primary/8" />
                <div className="mt-5 h-12 w-full bg-primary/8" />
                <div className="mt-5 h-4 w-40 bg-primary/6" />
              </div>
            </div>
          </div>
        </section>

        <section className="relative bg-white pb-16 pt-10">
          <div className="content-container">
            <div className={articleColumnClass}>
              <div className="aspect-[16/9] bg-background" />
              <div className="mt-10 space-y-4">
                <div className="h-4 w-full bg-primary/6" />
                <div className="h-4 w-full bg-primary/6" />
                <div className="h-4 w-4/5 bg-primary/6" />
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (notFound || !post) {
    return (
      <main>
        <section className={`relative bg-white ${articleTopSpacing}`}>
          <div className="content-container">
            <div className={`${articleColumnClass} border-b border-dashed border-primary/28 pb-10 pt-2`} data-reveal-group>
              <a
                href="/naujienos"
                className="reveal-item inline-flex items-center gap-2 text-sm font-semibold leading-none text-primary/62 transition-colors duration-200 hover:text-accent"
              >
                <ArrowLeft size={16} aria-hidden="true" />
                Grįžti į naujienas
              </a>
              <h1 className="display-h1 reveal-item mt-6">Naujiena nerasta</h1>
              <p className="reveal-item body-lead m-0 mt-5 max-w-2xl text-muted">
                Šis straipsnis nebepasiekiamas arba adresas neteisingas.
              </p>
            </div>
          </div>
        </section>

        {relatedPosts.length > 0 ? (
          <section className="relative bg-white section-shell">
            <div className="site-container">
              <h2 className="section-heading m-0">Kitos naujienos</h2>
              <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                {relatedPosts.map((relatedPost) => (
                  <NewsCard key={relatedPost.id} post={relatedPost} className="w-full" variant="plain" />
                ))}
              </div>
            </div>
          </section>
        ) : null}
      </main>
    );
  }

  const imageUrl = getNewsImageUrl(post.imageUrl);

  return (
    <main>
      <section className={`relative bg-white ${articleTopSpacing}`}>
        <div className="content-container">
          <div className={`${articleColumnClass} border-b border-dashed border-primary/28 pb-10 pt-2`} data-reveal-group>
            <p className="eyebrow reveal-item">Naujienos</p>
            <h1 className="display-h1 reveal-item mt-5">{post.title}</h1>

            <time
              dateTime={post.date}
              className="reveal-item mt-5 block font-display text-sm font-bold uppercase leading-tight tracking-wide text-primary/52"
            >
              {formatNewsDate(post.date)}
            </time>
          </div>
        </div>
      </section>

      <section className="relative bg-white pb-16 pt-10 max-[479px]:pb-14">
        <div className="content-container">
          <div className={articleColumnClass} data-reveal-group>
            <figure className="reveal-item m-0 overflow-hidden bg-background">
              <img
                src={imageUrl}
                alt=""
                className="aspect-[16/9] w-full object-cover"
              />
            </figure>

            <article
              className="article-body reveal-item mt-10"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <footer className="reveal-item mt-14 flex flex-col gap-6 border-t border-dashed border-primary/20 pt-8">
              <ArticleShareActions />
              <a
                href="/naujienos"
                className="inline-flex w-fit items-center gap-2 text-base font-semibold leading-none text-primary transition-colors duration-200 hover:text-accent"
              >
                <ArrowLeft size={16} aria-hidden="true" />
                Grįžti į naujienas
              </a>
            </footer>
          </div>
        </div>
      </section>

      {relatedPosts.length > 0 ? (
        <section className="relative bg-white section-shell">
          <div className="site-container">
            <div className="flex flex-col gap-3 border-b border-dashed border-primary/28 pb-8" data-reveal-group>
              <p className="eyebrow reveal-item">VCIIP žiniasklaidoje</p>
              <h2 className="section-heading reveal-item m-0">Kitos naujienos</h2>
            </div>

            <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3" data-reveal-group>
              {relatedPosts.map((relatedPost, index) => (
                <div
                  key={relatedPost.id}
                  className="reveal-item h-full"
                  style={{ "--reveal-delay": `${index * 70}ms` } as CSSProperties}
                >
                  <NewsCard post={relatedPost} className="w-full" variant="plain" />
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}
