export type AwardVariant = "a" | "b";

export function getAwardVariant(): AwardVariant {
  if (typeof window === "undefined") return "a";
  return new URLSearchParams(window.location.search).get("variantas") === "b" ? "b" : "a";
}
