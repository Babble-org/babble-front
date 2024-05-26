import { createContext } from "react";
import { InsetsContextInterface } from "./index";

export const InsetsContext = createContext<InsetsContextInterface>({
  insets: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  setInsets: (insets) => {},
});

export const FocusContext = createContext<{
  id: string;
  setId: (id: string) => void;
}>({
  id: "",
  setId: (id) => {},
});
