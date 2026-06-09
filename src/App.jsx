import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Introduction from "./pages/introduction";
import Installation from "./pages/installation";
import Features from "./pages/features";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white">
        <Navbar />

        <div className="mx-auto flex max-w-7xl">
          <Sidebar />

          <main className="flex-1 p-8">
            <Routes>
              <Route
                path="/"
                element={<Introduction />}
              />

              <Route
                path="/installation"
                element={<Installation />}
              />

              <Route
                path="/features"
                element={<Features />}
              />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}