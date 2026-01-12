import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

const themeOverrides: Record<string, string | undefined> = {
  "--primary": rootElement.dataset.primary,
  "--primary-foreground": rootElement.dataset.primaryForeground,
  "--accent": rootElement.dataset.accent,
  "--accent-foreground": rootElement.dataset.accentForeground,
  "--background": rootElement.dataset.background,
  "--foreground": rootElement.dataset.foreground,
  "--font-heading": rootElement.dataset.fontHeading,
  "--font-body": rootElement.dataset.fontBody,
};

Object.entries(themeOverrides).forEach(([variable, value]) => {
  if (value) {
    document.documentElement.style.setProperty(variable, value);
  }
});

createRoot(rootElement).render(<App />);
