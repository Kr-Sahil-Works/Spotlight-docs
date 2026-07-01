import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import MobileDrawer from "./MobileDrawer";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-(--bg) text-(--text)">

      {/* Background Blobs */}

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

        <div
          className="
          absolute
          -left-40
          -top-40
          h-130
          w-130
          rounded-full
          bg-emerald-500/10
          blur-[180px]
          "
        />

        <div
          className="
          absolute
          -right-30
          top-[35%]
          h-105
          w-105
          rounded-full
          bg-green-400/8
          blur-[170px]
          "
        />

      </div>

      <Navbar />

      <MobileDrawer />

      <div
        className="
        mx-auto
        flex
        max-w-412.5
        gap-10
        px-4
        py-8
        lg:px-8
        "
      >

        <aside className="hidden xl:block">
          <Sidebar />
        </aside>

        <main
          className="
          mx-auto
          w-full
          max-w-230
          flex-1
          "
        >
          {children}
        </main>

      </div>

      <Footer />

    </div>
  );
}