import { useEffect } from "react";

import { ApieVciipPage } from "./components/ApieVciipPage";
import { EcosystemPage } from "./components/EcosystemPage";
import { Footer } from "./components/Footer";
import { HashScroll } from "./components/HashScroll";
import { HomePage } from "./components/HomePage";
import { IsikurimasPage } from "./components/IsikurimasPage";
import { KlientaiPage } from "./components/KlientaiPage";
import { KontaktaiPage } from "./components/KontaktaiPage";
import { Navigation } from "./components/Navigation";
import { NewsPage } from "./components/NewsPage";
import { NewsPostPage } from "./components/NewsPostPage";
import { OperatoriusPage } from "./components/OperatoriusPage";
import { ScrollReveal } from "./components/ScrollReveal";
import { SmoothScroll } from "./components/SmoothScroll";
import { StrategyPage } from "./components/StrategyPage";
import { TechPage } from "./components/TechPage";
import {
  BIO_HUB_PATH,
  TECH_HUB_PATH,
  getBrandVariantFromPath,
  getHubHrefFromPath,
  isBioHubPath,
  isTechHubPath,
  usesLegacyGreenTheme,
  usesVciipIndexTheme,
} from "./content/site";
import { getAppPath, getBaseUrl, withBase } from "./lib/paths";

function Redirect({ to }: { to: string }) {
  useEffect(() => {
    const hash = window.location.hash;
    const search = window.location.search;
    window.location.replace(`${withBase(to)}${search}${hash}`);
  }, [to]);

  return null;
}

function useBasePathLinkFix() {
  useEffect(() => {
    const base = getBaseUrl();
    if (base === "/") return;

    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a");
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;

      const hrefAttr = anchor.getAttribute("href");
      if (!hrefAttr || hrefAttr.startsWith("#")) return;

      const nextHref = withBase(hrefAttr);
      if (nextHref === hrefAttr) return;

      event.preventDefault();
      window.location.assign(nextHref);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
}

function App() {
  useBasePathLinkFix();

  const currentPath = getAppPath();
  const isStrategyPage = currentPath === "/strategija";
  const isTechHub = isTechHubPath(currentPath);
  const isBioHub = isBioHubPath(currentPath);
  const shouldRedirectBio = isBioHub && currentPath !== BIO_HUB_PATH;
  const shouldRedirectTech = isTechHub && currentPath !== TECH_HUB_PATH;
  const isKontaktaiPage = currentPath === "/kontaktai";
  const isKodelVilniusPage = currentPath === "/kodel-vilnius";
  const isApieVciipPage = currentPath === "/apie-vciip";
  const isIsikurimasPage = currentPath === "/isikurimas";
  const isOperatoriusPage = currentPath === "/operatorius";
  const isKlientaiPage = currentPath === "/klientai";
  const isNewsPage = currentPath === "/naujienos";
  const newsPostSlug = currentPath.startsWith("/naujienos/")
    ? currentPath.slice("/naujienos/".length).split("/")[0]
    : null;
  const isNewsPostPage = Boolean(newsPostSlug);
  const brandVariant = getBrandVariantFromPath(currentPath);
  const hubHref = withBase(getHubHrefFromPath(currentPath));
  const pageThemeClass = usesLegacyGreenTheme(currentPath) ? "legacy-green-page" : undefined;
  const useTealLogo = usesVciipIndexTheme(currentPath);

  return (
    <div className={pageThemeClass}>
      <SmoothScroll />
      <HashScroll pathname={currentPath} />
      <ScrollReveal />
      <Navigation variant={brandVariant} hubHref={hubHref} tealLogo={useTealLogo} />
      {isKodelVilniusPage ? (
        <Redirect to="/#kodel-vilnius" />
      ) : shouldRedirectBio ? (
        <Redirect to={BIO_HUB_PATH} />
      ) : shouldRedirectTech ? (
        <Redirect to={TECH_HUB_PATH} />
      ) : isStrategyPage ? (
        <StrategyPage />
      ) : isBioHub ? (
        <EcosystemPage />
      ) : isTechHub ? (
        <TechPage />
      ) : isKontaktaiPage ? (
        <KontaktaiPage />
      ) : isApieVciipPage ? (
        <ApieVciipPage />
      ) : isIsikurimasPage ? (
        <IsikurimasPage />
      ) : isOperatoriusPage ? (
        <OperatoriusPage />
      ) : isKlientaiPage ? (
        <KlientaiPage />
      ) : isNewsPostPage && newsPostSlug ? (
        <NewsPostPage slug={newsPostSlug} />
      ) : isNewsPage ? (
        <NewsPage />
      ) : (
        <HomePage />
      )}
      <Footer variant={brandVariant} hubHref={hubHref} tealLogo={useTealLogo} />
    </div>
  );
}

export default App;
