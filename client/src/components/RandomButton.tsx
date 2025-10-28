import { useLocation } from "wouter";
import { Sparkles } from "lucide-react";

const activities = [
  "learn-about-ai",
  "learn-with-ai",
  "teach-with-ai",
  "teach-about-ai",
  "critique-ai",
  "create-with-ai",
  "shape-ai",
  "research-with-ai",
];

export default function RandomButton() {
  const [, setLocation] = useLocation();

  const handleRandomClick = () => {
    const randomIndex = Math.floor(Math.random() * activities.length);
    const randomActivity = activities[randomIndex];
    setLocation(`/activity/${randomActivity}`);
  };

  return (
    <button
      onClick={handleRandomClick}
      data-testid="button-random"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="relative">
        <div className="absolute -inset-2 bg-gradient-to-r from-primary to-chart-1 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity animate-pulse" />
        <div className="relative bg-gradient-to-r from-primary to-chart-1 text-primary-foreground px-8 py-4 rounded-full font-bold text-lg uppercase tracking-wide shadow-xl transition-all duration-200 group-hover:scale-110 group-active:scale-95 flex items-center gap-2 font-playful">
          <Sparkles className="w-5 h-5" />
          RANDOM!
          <Sparkles className="w-5 h-5" />
        </div>
      </div>
    </button>
  );
}
