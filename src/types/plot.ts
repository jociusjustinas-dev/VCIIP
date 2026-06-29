export type PlotStatus = "available" | "reserved" | "planned";

export type PlotInfrastructure = {
  electric: boolean;
  water: boolean;
  gas: boolean;
  communications: boolean;
};

export type Plot = {
  id: string;
  letter: string;
  name: string;
  area: string;
  purpose: string[];
  status: PlotStatus;
  infrastructure: PlotInfrastructure;
  mapPosition: { left: string; top: string };
  ctaHref: string;
  planDownloadUrl?: string | null;
};
