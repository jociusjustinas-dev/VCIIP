export const CONTACT_INTEREST_OPTIONS = [
  "Gyvybės mokslai (BIO)",
  "Technologijos ir gamyba (TECH)",
  "Tyrimai ir plėtra",
  "Kita",
] as const;

const INTEREST_PARAM_MAP: Record<string, (typeof CONTACT_INTEREST_OPTIONS)[number]> = {
  bio: "Gyvybės mokslai (BIO)",
  tech: "Technologijos ir gamyba (TECH)",
};

export function getInterestFromSearchParams(search: string) {
  const interestParam = new URLSearchParams(search).get("interest");
  if (!interestParam) return null;
  return INTEREST_PARAM_MAP[interestParam.toLowerCase()] ?? null;
}
