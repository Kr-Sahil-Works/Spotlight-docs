import { BrowserRouter, Routes, Route } from "react-router-dom";

import Introduction from "./docs/introduction";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Introduction />}
        />
      </Routes>
    </BrowserRouter>
  );
}