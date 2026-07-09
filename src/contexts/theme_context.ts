import { createContext } from "react";
import type { ThemeContextValue } from "./theme_types";

export const ThemeContext = createContext<ThemeContextValue | null>(null);
