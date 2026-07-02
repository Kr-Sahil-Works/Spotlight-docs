import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import MobileDrawer from "./MobileDrawer";
import Footer from "./Footer";
import ReadingProgress from "./ReadingProgress";
import TableOfContents from "./TableOfContents";
import BackgroundEffects from "./BackgroundEffects";
import ScrollToTop from "./ScrollToTop";

export default function Layout({ children }) {
  return (
    <>
    <BackgroundEffects />

      <ReadingProgress/>

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

<div className="flex flex-1 gap-10">

  <main className="w-full max-w-230">
    {children}
  </main>

  <TableOfContents />

</div>
      </div>

<Footer />

<ScrollToTop />
</>

  );
}