import HeaderSection from "../../../components/utils/headerSection";
import Table from "../../../components/utils/table";
import Pagination from "../../../components/utils/pagination";
import iPlus from "../../../assets/plus.svg";
import dataBody from "./data";
import { useNavigate } from "react-router-dom";

export default function Portofolio() {
  const tableHead = [
    "Nama Project",
    "Kategori",
    "Tanggal Rilis",
    "Status",
    "Action",
  ];
  const navigate = useNavigate();

  const addPortofolio = () => {
    navigate("/produk/portofolio/add");
  };

  return (
    <div className="w-full">
      <div className="container mt-8">
        <div className="px-5">
          <HeaderSection
            title={"Portofolio"}
            btnName={"Add"}
            btnIcon={iPlus}
            filter={true}
            search={true}
            btnAction={addPortofolio}
          />
        </div>

        <div className="px-5 mb-5">
          <Table tBody={dataBody} tHead={tableHead} />
        </div>

        <div className="flex justify-end px-5">
          <Pagination />
        </div>
      </div>
    </div>
  );
}
