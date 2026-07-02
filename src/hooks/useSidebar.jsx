import {
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

const SidebarContext = createContext(null);

export function SidebarProvider({ children }) {
  const [open, setOpen] = useState(false);

  const openSidebar = () => setOpen(true);

  const closeSidebar = () => setOpen(false);

  const toggleSidebar = () =>
    setOpen((prev) => !prev);

  const value = useMemo(
    () => ({
      open,
      openSidebar,
      closeSidebar,
      toggleSidebar,
    }),
    [open]
  );

  return (
    <SidebarContext.Provider value={value}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error(
      "useSidebar must be used inside SidebarProvider"
    );
  }

  return context;
}