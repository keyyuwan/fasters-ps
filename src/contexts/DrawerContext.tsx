import { createContext, ReactNode, useContext, useState } from "react";

interface DrawerContextData {
  isDrawerOpen: boolean;
  handleOpenDrawer: () => void;
  handleCloseDrawer: () => void;
}

interface DrawerProviderProps {
  children: ReactNode;
}

const DrawerContext = createContext({} as DrawerContextData);

export function DrawerProvider({ children }: DrawerProviderProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  function handleOpenDrawer() {
    setIsDrawerOpen(true);
  }

  function handleCloseDrawer() {
    setIsDrawerOpen(false);
  }

  return (
    <DrawerContext.Provider
      value={{
        isDrawerOpen,
        handleOpenDrawer,
        handleCloseDrawer,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
}

export const useDrawer = () => useContext(DrawerContext);
