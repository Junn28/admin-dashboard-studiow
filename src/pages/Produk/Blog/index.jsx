import HeaderPage from "../../../components/utils/headerPage";
import Pagination from "../../../components/utils/pagination";
import Table from "../../../components/utils/table";
import ModalConfirmation from "../../../components/utils/modalConfirmation";
import iDanger from "../../../assets/danger.svg";
import dataBody from "./data";
import { useState } from "react";

export default function Blog() {
  const tableHead = [
    "Nama Project",
    "Kategori",
    "Tanggal Rilis",
    "Status",
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
          <HeaderPage title="Blog" />
        </div>

        <div className="px-5 mb-5">
          <Table tBody={dataBody} tHead={tableHead} confirm={openConfirm} />
        </div>

        <div className="flex justify-end px-5">
          <Pagination />
        </div>
      </div>

      <ModalConfirmation
        text={"Are you sure want to archive this blog ?"}
        open={confirm}
        send={openConfirm}
        idData={id}
        data={dataBody}
        iconDelete={iDanger}
      />
    </div>
  );
}
