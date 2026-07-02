import { AnimatePresence, motion } from "framer-motion";

import Sidebar from "./Sidebar";

import { useSidebar } from "../../hooks/useSidebar";

export default function MobileDrawer() {
  const {
    open,
    closeSidebar,
  } = useSidebar();

  return (
    <AnimatePresence>

      {open && (

        <>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .18 }}
            onClick={closeSidebar}
            className="
            fixed
            inset-0
            z-40
            bg-black/55
            backdrop-blur-sm
            xl:hidden
            "
          />

          <motion.div
            initial={{
              x: -320,
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: -320,
            }}
            transition={{
              duration: .28,
            }}
            className="
            fixed
            left-0
            top-0
            z-50
            h-screen
            w-75
            xl:hidden
            "
          >
            <Sidebar mobile />

          </motion.div>

        </>

      )}

    </AnimatePresence>
  );
}