import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Domain from "./pages/Domain";
import Template from "./pages/Template";
import AddTemplate from "./pages/Template/AddTemplate";
import EditTemplate from "./pages/Template/EditTemplate/[id]";
import Pesanan from "./pages/Keuangan/Pesanan";
import DetailPesanan from "./pages/Keuangan/Pesanan/[id]";
import Promo from "./pages/Keuangan/Promo";

function App() {
  return (
    <>
      <Header />
      <main className="flex">
        <Sidebar />

        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="domain" element={<Domain />} />
          <Route path="template" element={<Template />} />
          <Route path="template/add" element={<AddTemplate />} />
          <Route path="template/edit/:id" element={<EditTemplate />} />
          <Route path="keuangan/pesanan" element={<Pesanan />} />
          <Route path="keuangan/pesanan/:id" element={<DetailPesanan />} />
          <Route path="keuangan/promo" element={<Promo />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
