import { useLang } from "./i18n";
import { ui } from "./data/content";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Work } from "./components/Work";
import { Stack } from "./components/Stack";
import { Journey } from "./components/Journey";
import { Contact } from "./components/Contact";

export function App() {
  const { t } = useLang();
  return (
    <div id="top" className="page">
      <a className="skip" href="#main">
        {t(ui.skip)}
      </a>
      <Nav />
      <main id="main" tabIndex={-1}>
        <Hero />
        <About />
        <Work />
        <Stack />
        <Journey />
        <Contact />
      </main>
    </div>
  );
}
