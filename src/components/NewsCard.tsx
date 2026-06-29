import { getNewsImageUrl, formatNewsDate } from "../lib/wordpress";
import type { NewsPost } from "../types/news";

export function NewsCard({
  post,
  className = "",
}: {
  post: NewsPost;
  className?: string;
}) {
  const imageUrl = getNewsImageUrl(post.imageUrl);

  return (
    <a
      href={post.url}
      className={`group flex h-full w-[min(88vw,360px)] shrink-0 snap-start flex-col border border-primary/14 bg-white transition-[border-color,background-color] duration-200 hover:border-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/35 focus-visible:ring-offset-2 lg:w-auto lg:min-w-0 ${className}`}
    >
      <div className="aspect-video overflow-hidden border-b border-primary/10 bg-background">
        <img
          src={imageUrl}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <time
          dateTime={post.date}
          className="font-mono text-[0.6875rem] font-semibold uppercase leading-[1.3] tracking-[0.1em] text-primary/52"
        >
          {formatNewsDate(post.date)}
        </time>

        <h3 className="heading-h3 mt-3 text-primary transition-colors duration-200 group-hover:text-accent">
          {post.title}
        </h3>

        <p className="mt-3 line-clamp-3 text-sm font-medium leading-[1.6] text-muted">{post.excerpt}</p>
      </div>
    </a>
  );
}
