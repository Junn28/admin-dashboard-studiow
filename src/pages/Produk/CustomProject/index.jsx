import HeaderSection from "../../../components/utils/headerSection";
import Table from "../../../components/utils/table";
import Pagination from "../../../components/utils/pagination";
import ModalConfirmation from "../../../components/utils/modalConfirmation";
import iPlus from "../../../assets/plus.svg";
import dataBody from "./data";
import { useState } from "react";

export default function CustomProject() {
  const tableHead = [
    "Tanggal Permintaan",
    "Nama Pesanan",
    "Nama Project",
    "Kategori Project",
    "View Detail",
    "Action",
  ];
  const [confirm, setConfirm] = useState(false);
  const [custom, setCustom] = useState(false);
  const [id, setId] = useState(null);
  const [inputSearch, setInputSearch] = useState("");
  const [sortedRows, setSortedRows] = useState(dataBody);

  const filteredRows = sortedRows.filter(
    (item) =>
      item.name.toLowerCase().includes(inputSearch.toLowerCase()) ||
      item.project.toLowerCase().includes(inputSearch.toLowerCase()) ||
      item.category.toLowerCase().includes(inputSearch.toLowerCase())
  );

  const handleSearch = ({ target: { value } }) => {
    setInputSearch(value);
  };

  const handleFilter = () => {
    const sort = filteredRows.sort((a, b) =>
      a["name"].localeCompare(b["name"])
    );
    setSortedRows(sort);
  };

  const openConfirm = (id) => {
    setConfirm(!confirm);
    setId(id);
  };

  const openCustom = () => {
    setCustom(!custom);
  };

  return (
    <div className="w-full">
      <div className="container mt-8">
        <div className="px-5">
          <HeaderSection
            title={"Custom Project"}
            btnName={"Add"}
            btnIcon={iPlus}
            filter={true}
            search={true}
            handleSearch={handleSearch}
            handleFilter={handleFilter}
          />
        </div>

        <div className="px-5 mb-5">
          <Table
            tBody={filteredRows}
            tHead={tableHead}
            custom={openCustom}
            confirm={openConfirm}
          />
        </div>

        <div className="flex justify-end px-5">
          <Pagination />
        </div>
      </div>

      <ModalConfirmation
        text={"Konfirmasi custom Project"}
        open={custom}
        send={openCustom}
        custom={custom}
      />

      <ModalConfirmation
        text={"Are you sure want to archive this custom project ?"}
        open={confirm}
        send={openConfirm}
        idData={id}
        data={dataBody}
      />
    </div>
  );
}
