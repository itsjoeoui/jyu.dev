import * as React from "react";
import { Moon, Sun, SunMoon } from "lucide-react";

import { match } from "ts-pattern";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ModeToggle() {
  const [theme, setThemeState] = React.useState<
    "theme-light" | "dark" | "system"
  >("theme-light");

  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setThemeState(isDarkMode ? "dark" : "theme-light");
  }, []);

  React.useEffect(() => {
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  }, [theme]);

  return (
    <Button variant="ghost" size="icon" className={cn("h-6 w-6")}>
      {match(theme)
        .with("theme-light", () => (
          <Sun className="h-6 w-6" onClick={() => setThemeState("dark")} />
        ))
        .with("dark", () => (
          <Moon className="h-6 w-6" onClick={() => setThemeState("system")} />
        ))
        .with("system", () => (
          <SunMoon
            className="h-6 w-6"
            onClick={() => setThemeState("theme-light")}
          />
        ))
        .exhaustive()}
    </Button>
  );
}
