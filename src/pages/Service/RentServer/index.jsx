import HeaderSection from "../../../components/utils/headerSection";
import Table from "../../../components/utils/table";
import Pagination from "../../../components/utils/pagination";
import ModalConfirmation from "../../../components/utils/modalConfirmation";
import iPlus from "../../../assets/plus.svg";
import iDanger from "../../../assets/danger.svg";
import dataBody from "./data";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function RentServer() {
  const tableHead = ["Nama Paket", "Status", "View Detail", "Action"];
  const navigate = useNavigate();
  const [inputSearch, setInputSearch] = useState("");

  const filteredRows = dataBody.filter(
    (item) =>
      item.packet.toLowerCase().includes(inputSearch.toLowerCase()) ||
      item.status.toLowerCase().includes(inputSearch.toLowerCase())
  );

  const handleSearch = ({ target: { value } }) => {
    setInputSearch(value);
  };

  const addServer = () => {
    navigate("/service/server/add");
  };

  const [confirm, setConfirm] = useState(false);
  const [id, setId] = useState(null);

  const openConfirm = (id) => {
    setConfirm(!confirm);
    setId(id);
  };

  return (
    <div className="w-full">
      <div className="container mt-8">
        <div className="px-5">
          <HeaderSection
            title={"Sewa Server"}
            btnName={"Add"}
            btnIcon={iPlus}
            btnAction={addServer}
            search={true}
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
        text={"Are you sure want to archive this server data ?"}
        open={confirm}
        send={openConfirm}
        idData={id}
        data={dataBody}
        iconDelete={iDanger}
      />
    </div>
  );
}
