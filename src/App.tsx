import { EcosystemPage } from "./components/EcosystemPage";
import { Footer } from "./components/Footer";
import { HashScroll } from "./components/HashScroll";
import { HomePage } from "./components/HomePage";
import { Navigation } from "./components/Navigation";
import { ScrollReveal } from "./components/ScrollReveal";
import { SmoothScroll } from "./components/SmoothScroll";
import { StrategyBadge } from "./components/StrategyBadge";
import { StrategyPage } from "./components/StrategyPage";
import { TechPage } from "./components/TechPage";

function App() {
  const currentPath = window.location.pathname.replace(/\/$/, "");
  const isStrategyPage = currentPath === "/strategija";
  const isHomePage = currentPath === "";
  const isTechPage = currentPath === "/tech";
  const isBioPage = currentPath === "/ekosistema" || currentPath === "/bio";
  const brandVariant: "vciip" | "bio" | "tech" = isBioPage
    ? "bio"
    : isTechPage
      ? "tech"
      : isHomePage
        ? "vciip"
        : "tech";

  return (
    <div className={isBioPage ? "legacy-green-page" : undefined}>
      <SmoothScroll />
      <HashScroll pathname={currentPath} />
      <ScrollReveal />
      <Navigation variant={brandVariant} />
      {!isBioPage && <StrategyBadge active={isStrategyPage} />}
      {isStrategyPage ? (
        <StrategyPage />
      ) : isBioPage ? (
        <EcosystemPage />
      ) : isTechPage ? (
        <TechPage />
      ) : (
        <HomePage />
      )}
      <Footer variant={brandVariant} />
    </div>
  );
}

export default App;
