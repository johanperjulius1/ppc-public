import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";
import CategoryPage from "./pages/CategoryPage";
import CasinoReview from "./pages/CasinoReview";
import HotelReview from "./pages/HotelReview";
import BotOptimized from "./pages/BotOptimized";
import CasinoContent from "./pages/CasinoContent";
import Hotels from "./pages/Hotels";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Hotels />} />
        {/* <Route path="/casino-content" element={<CasinoContent />} />
        <Route path="/bot-optimized" element={<BotOptimized />} />
        <Route path="/casino/:id" element={<CasinoReview />} /> */}
        <Route path="/hotel/:id" element={<HotelReview />} />
        <Route path="/:slug" element={<CategoryPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default App;
