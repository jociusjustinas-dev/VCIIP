import { Footer } from "./components/Footer";
import { HomePage } from "./components/HomePage";
import { Navigation } from "./components/Navigation";
import { ScrollReveal } from "./components/ScrollReveal";
import { SmoothScroll } from "./components/SmoothScroll";
import { StrategyBadge } from "./components/StrategyBadge";
import { StrategyPage } from "./components/StrategyPage";

function App() {
  const currentPath = window.location.pathname.replace(/\/$/, "");
  const isStrategyPage = currentPath === "/strategija";
  const isLegacyGreenPage = currentPath === "/ekosistema";

  return (
    <div className={isLegacyGreenPage ? "legacy-green-page" : undefined}>
      <SmoothScroll />
      <ScrollReveal />
      <Navigation />
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
