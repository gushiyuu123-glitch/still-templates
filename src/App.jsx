import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
// 先頭付近
import BlackOriettaPreview from "./pages/BlackOriettaPreview";

import Home from "./pages/Home";
import Templates from "./pages/Templates";
import TemplateDetail from "./pages/TemplateDetail";
import License from "./pages/License";
import Faq from "./pages/Faq";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/templates/:slug" element={<TemplateDetail />} />
          <Route path="/license" element={<License />} />
          <Route path="/faq" element={<Faq />} />
          <Route
  path="/preview/black-orietta"
  element={<BlackOriettaPreview />}
/>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}
