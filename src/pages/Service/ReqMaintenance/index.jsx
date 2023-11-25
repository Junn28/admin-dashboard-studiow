import HeaderSection from "../../../components/utils/headerSection";
import Table from "../../../components/utils/table";
import Pagination from "../../../components/utils/pagination";
import ModalConfirmation from "../../../components/utils/modalConfirmation";
import iPlus from "../../../assets/plus.svg";
import dataBody from "./data";
import { useState } from "react";

export default function ReqMaintenance() {
  const tableHead = [
    "Nama Lengkap",
    "Nama Produk",
    "Subjek",
    "Whatsapp",
    "View Detail",
    "Action",
  ];
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
            title={"Request Maintenance"}
            btnName={"Add"}
            btnIcon={iPlus}
            filter={true}
            search={true}
          />
        </div>

        <div className="px-5 mb-5">
          <Table tBody={dataBody} tHead={tableHead} confirm={openConfirm} />
        </div>

        <div className="flex justify-end px-5">
          <Pagination />
        </div>
      </div>

      <ModalConfirmation
        text={"Are you sure want to archive this requst maintenance ?"}
        open={confirm}
        send={openConfirm}
        idData={id}
        data={dataBody}
      />
    </div>
  );
}
