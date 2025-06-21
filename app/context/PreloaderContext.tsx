// src/context/PreloaderContext.tsx
import { createContext, useContext } from "react";

export const PreloaderContext = createContext<{ show: boolean }>({
  show: false,
});
export const usePreloader = () => useContext(PreloaderContext);
