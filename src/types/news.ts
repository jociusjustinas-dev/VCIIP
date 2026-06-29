export type NewsPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  url: string;
  imageUrl: string | null;
};

export type NewsPostDetail = NewsPost & {
  content: string;
};
