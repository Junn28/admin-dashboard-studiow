import HeaderSection from "../../../components/utils/headerSection";
import iExport from "../../../assets/export.svg";
import Table from "../../../components/utils/table";
import Pagination from "../../../components/utils/pagination";
import ModalConfirmation from "../../../components/utils/modalConfirmation";
import data from "../Pesanan/data";
import { useState } from "react";

export default function Pesanan() {
  const tableHead = [
    "Customer",
    "Nomor Telepon",
    "Plan",
    "Billing Date",
    "Description",
    "Document",
  ];
  const [confirm, setConfirm] = useState(false);
  const [inputSearch, setInputSearch] = useState("");

  const filteredRows = data.filter(
    (item) =>
      item.name.toLowerCase().includes(inputSearch.toLowerCase()) ||
      item.plan.toLowerCase().includes(inputSearch.toLowerCase()) ||
      item.billing_date.toLowerCase().includes(inputSearch.toLowerCase()) ||
      item.description.toLowerCase().includes(inputSearch.toLowerCase())
  );

  const handleSearch = ({ target: { value } }) => {
    setInputSearch(value);
  };

  const openConfirm = () => {
    setConfirm(!confirm);
  };

  return (
    <div className="w-full">
      <div className="container mt-8">
        <div className="px-5 mb-5">
          <HeaderSection
            title={"Pesanan"}
            btnAction={openConfirm}
            btnName={"Export csv"}
            btnIcon={iExport}
            filter={false}
            search={true}
            handleSearch={handleSearch}
          />

          <Table tHead={tableHead} tBody={filteredRows} />
        </div>

        <div className="flex justify-end px-5">
          <Pagination />
        </div>
      </div>

      <ModalConfirmation
        text={"Are you sure want to export this data ?"}
        open={confirm}
        send={openConfirm}
        csv={true}
      />
    </div>
  );
}
