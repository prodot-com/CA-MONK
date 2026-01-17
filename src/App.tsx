import { useState } from "react";
import LandingPage from "./pages/Landing";
import Home from "./pages/Home";

export default function App() {
  const [view, setView] = useState<"landing" | "dashboard">("landing");

  if (view === "landing") {
    return <LandingPage onEnter={() => setView("dashboard")} />;
  }

  return (
    <div className="animate-in fade-in duration-700">
        <Home />
        <button 
          onClick={() => setView("landing")}
          className="fixed bottom-4 right-4 bg-white/50 p-2 rounded text-[12px] cursor-pointer">
          Back to Landing
        </button>
    </div>
  );
}