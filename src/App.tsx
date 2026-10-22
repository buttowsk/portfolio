import { TopBar, Hero } from "./components/Hero";
import { Offer } from "./components/Offer";
import { Work } from "./components/Work";
import { Production } from "./components/Production";
import { Timeline } from "./components/Timeline";
import { Stack } from "./components/Stack";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <div className="page">
      <TopBar />
      <Hero />
      <Offer />
      <Work />
      <Production />
      <Timeline />
      <Stack />
      <Footer />
    </div>
  );
}
