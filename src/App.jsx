import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import { navigation } from "./config/navigation";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {navigation.flatMap((section) =>
            section.pages.map((page) => (
              <Route
                key={page.path}
                path={page.path}
                element={<page.component />}
              />
            ))
          )}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}