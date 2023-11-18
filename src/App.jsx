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
import AddPromo from "./pages/Keuangan/Promo/AddPromo";
import EditPromo from "./pages/Keuangan/Promo/EditPromo/[id]";
import Blog from "./pages/Produk/Blog";
import AddBlog from "./pages/Produk/Blog/AddBlog";
import Portofolio from "./pages/Produk/Portofolio";
import AddPortofolio from "./pages/Produk/Portofolio/AddPortofolio";
import CustomProject from "./pages/Produk/CustomProject";
import ContactUs from "./pages/Support/ContactUs";

function App() {
  return (
    <>
      <Header />
      <main className="flex">
        <Sidebar />

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="domain" element={<Domain />} />
          <Route path="template" element={<Template />} />
          <Route path="template/add" element={<AddTemplate />} />
          <Route path="template/edit/:id" element={<EditTemplate />} />
          <Route path="keuangan/pesanan" element={<Pesanan />} />
          <Route path="keuangan/pesanan/:id" element={<DetailPesanan />} />
          <Route path="keuangan/promo" element={<Promo />} />
          <Route path="keuangan/promo/add" element={<AddPromo />} />
          <Route path="keuangan/promo/edit/:id" element={<EditPromo />} />
          <Route path="produk/custom-project" element={<CustomProject />} />
          <Route path="produk/portofolio" element={<Portofolio />} />
          <Route path="produk/portofolio/add" element={<AddPortofolio />} />
          <Route path="produk/blog" element={<Blog />} />
          <Route path="produk/blog/add" element={<AddBlog />} />
          <Route path="support/contact" element={<ContactUs />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
