import { Footer } from "./components/Footer";
import { HomePage } from "./components/HomePage";
import { Navigation, type NavPageContext } from "./components/Navigation";
import { ScrollReveal } from "./components/ScrollReveal";
import { SmoothScroll } from "./components/SmoothScroll";
import { StrategyBadge } from "./components/StrategyBadge";
import { StrategyPage } from "./components/StrategyPage";

function App() {
  const currentPath = window.location.pathname.replace(/\/$/, "");
  const isStrategyPage = currentPath === "/strategija";
  const isBioPage = currentPath === "/ekosistema" || currentPath === "/bio";

  const pageContext: NavPageContext = isBioPage ? "bio" : isStrategyPage ? "other" : "tech";

  return (
    <div className={isBioPage ? "legacy-green-page" : undefined}>
      <SmoothScroll />
      <ScrollReveal />
      <Navigation pageContext={pageContext} />
      <StrategyBadge active={isStrategyPage} />
      {isStrategyPage ? (
        <StrategyPage />
      ) : (
        <HomePage />
      )}
      <Footer />
    </div>
  );
}

export default App;
