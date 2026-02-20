import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import NyaCasinon from "./pages/NyaCasinon";
import CasinoMedSwish from "./pages/CasinoMedSwish";
import CasinoMedBonus from "./pages/CasinoMedBonus";
import CasinoMedBonusUtanOmsattningskrav from "./pages/CasinoMedBonusUtanOmsattningskrav";
import CasinoMedFreeSpins from "./pages/CasinoMedFreeSpins";
import CasinoMedFreeSpinsUtanKrav from "./pages/CasinoMedFreeSpinsUtanKrav";
import CasinoMedBankId from "./pages/CasinoMedBankId";
import BotOptimized from "./pages/BotOptimized";
import CasinoContent from "./pages/CasinoContent";
import Hotels from "./pages/Hotels";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Hotels />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="/nya-casinon" element={<NyaCasinon />} />
        <Route path="/casino-content" element={<CasinoContent />} />
        <Route path="/casino-med-swish" element={<CasinoMedSwish />} />
        <Route path="/casino-med-bonus" element={<CasinoMedBonus />} />
        <Route path="/casino-med-bonus-utan-omsattningskrav" element={<CasinoMedBonusUtanOmsattningskrav />} />
        <Route path="/casino-med-free-spins" element={<CasinoMedFreeSpins />} />
        <Route path="/casino-med-free-spins-utan-omsattningskrav" element={<CasinoMedFreeSpinsUtanKrav />} />
        <Route path="/casino-med-bankid" element={<CasinoMedBankId />} />
        <Route path="/bot-optimized" element={<BotOptimized />} />
        {/* <Route path="/casino/:slug" element={<CasinoReview />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default App;
