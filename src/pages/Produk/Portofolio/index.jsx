import HeaderSection from "../../../components/utils/headerSection";
import Table from "../../../components/utils/table";
import Pagination from "../../../components/utils/pagination";
import ModalConfirmation from "../../../components/utils/modalConfirmation";
import iPlus from "../../../assets/plus.svg";
import iDanger from "../../../assets/danger.svg";
import dataBody from "./data";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Portofolio() {
  const tableHead = [
    "Nama Project",
    "Kategori",
    "Tanggal Rilis",
    "Status",
    "Action",
  ];
  const navigate = useNavigate();
  const [confirm, setConfirm] = useState(false);
  const [id, setId] = useState(null);
  const [inputSearch, setInputSearch] = useState("");
  const [sortedRows, setSortedRows] = useState(dataBody);

  const filteredRows = sortedRows.filter(
    (item) =>
      item.project.toLowerCase().includes(inputSearch.toLowerCase()) ||
      item.category.toLowerCase().includes(inputSearch.toLowerCase()) ||
      item.status.toLowerCase().includes(inputSearch.toLowerCase())
  );

  const handleSearch = ({ target: { value } }) => {
    setInputSearch(value);
  };

  const handleFilter = () => {
    const sort = filteredRows.sort((a, b) =>
      a["status"].localeCompare(b["status"])
    );
    setSortedRows(sort);
  };

  const addPortofolio = () => {
    navigate("/produk/portofolio/add");
  };

  const openConfirm = (id) => {
    setConfirm(!confirm);
    setId(id);
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
            handleFilter={handleFilter}
            handleSearch={handleSearch}
          />
        </div>

        <div className="px-5 mb-5">
          <Table tBody={filteredRows} tHead={tableHead} confirm={openConfirm} />
        </div>

        <div className="flex justify-end px-5">
          <Pagination />
        </div>
      </div>

      <ModalConfirmation
        text={"Are you sure want to archive this portfolio ?"}
        open={confirm}
        send={openConfirm}
        idData={id}
        data={dataBody}
        iconDelete={iDanger}
      />
    </div>
  );
}
