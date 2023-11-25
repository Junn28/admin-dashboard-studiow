import HeaderSection from "../../../components/utils/headerSection";
import Table from "../../../components/utils/table";
import Pagination from "../../../components/utils/pagination";
import ModalConfirmation from "../../../components/utils/modalConfirmation";
import dataBody from "./data";
import { useState } from "react";

export default function ContactUs() {
  const tableHead = ["Nama", "WhatsApp", "Subjek", "View Detail", "Action"];
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
          <HeaderSection title={"Contact Us"} btnName={"Cari"} search={true} />
        </div>

        <div className="px-5 mb-5">
          <Table tBody={dataBody} tHead={tableHead} confirm={openConfirm} />
        </div>

        <div className="flex justify-end px-5">
          <Pagination />
        </div>
      </div>

      <ModalConfirmation
        text={"Are you sure want to archive this contact ?"}
        open={confirm}
        send={openConfirm}
        idData={id}
        data={dataBody}
      />
    </div>
  );
}
