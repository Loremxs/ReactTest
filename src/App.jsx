import Header from "./Components/Header/Header";
import TeachingSection from "./Components/TeachingSection";
import DifferencesSection from "./Components/DifferencesSection";
import IntroSection from "./Components/IntroSection";
import TabsSection from "./Components/TabsSection";
import FeedbackSection from "./Components/FeedbackSection";
import { useState } from "react";

export default function App() {
  const [tab, setTab] = useState("feedback");

  return (
    <>
      <Header />
      <main>
        <IntroSection />

        <TabsSection active={tab} onChange={(current) => setTab(current)} />

        {tab === "main" && (
          <>
            <TeachingSection />
            <DifferencesSection />
          </>
        )}
        {tab === "feedback" && <FeedbackSection />}
      </main>
    </>
  );
}
