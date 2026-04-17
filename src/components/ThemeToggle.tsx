import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Activer le thème clair" : "Activer le thème sombre"}
      title={isDark ? "Thème clair" : "Thème sombre"}
      className="relative inline-flex items-center justify-center w-9 h-9 rounded-md border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
    >
      <Sun
        className={`w-4 h-4 transition-all ${isDark ? "scale-0 -rotate-90 absolute" : "scale-100 rotate-0"}`}
      />
      <Moon
        className={`w-4 h-4 transition-all ${isDark ? "scale-100 rotate-0" : "scale-0 rotate-90 absolute"}`}
      />
    </button>
  );
};

export default ThemeToggle;
