import { getNewsImageUrl, formatNewsDate, getNewsPostHref } from "../lib/wordpress";
import type { NewsPost } from "../types/news";

export function NewsCard({
  post,
  className = "",
  variant = "default",
}: {
  post: NewsPost;
  className?: string;
  variant?: "default" | "plain";
}) {
  const imageUrl = getNewsImageUrl(post.imageUrl);

  return (
    <a
      href={getNewsPostHref()}
      className={`group flex h-full w-[min(88vw,360px)] shrink-0 snap-start flex-col transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/35 focus-visible:ring-offset-2 lg:w-auto lg:min-w-0 ${
        variant === "default" ? "bg-white" : "bg-transparent"
      } ${className}`}
    >
      <div className="aspect-video overflow-hidden bg-background">
        <img
          src={imageUrl}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col pt-4">
        <time
          dateTime={post.date}
          className="font-display text-sm font-bold uppercase leading-tight tracking-wide text-primary/52"
        >
          {formatNewsDate(post.date)}
        </time>

        <h3 className="heading-h3 mt-2 text-primary transition-colors duration-200 group-hover:text-accent">
          {post.title}
        </h3>

        <p className="mt-3 line-clamp-3 text-base leading-loose text-muted">{post.excerpt}</p>
      </div>
    </a>
  );
}
