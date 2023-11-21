import { useState } from "react";
import Modal from "./modal";

export default function ModalConfirmation({
  text,
  open,
  send,
  idData,
  data,
  csv,
}) {
  const [openModal, setOpenModal] = useState(false);

  const sendData = () => {
    send(!open);
  };

  const sendDataModal = () => {
    setOpenModal(!openModal);
    sendData();
  };

  const deleteData = () => {
    setOpenModal(!openModal);
    return data.splice(idData, 1);
  };

  const exportCsv = () => {
    setOpenModal(!openModal);
  };

  return (
    <div id="myModal" className={`${open ? "block" : "hidden"} modal`}>
      <div className="modal-content text-end">
        <span className="close text-lg px-2" onClick={sendData}>
          &times;
        </span>
        <p className="text-2xl font-medium text-center mt-5">{text}</p>

        <div className="btn-confirm text-center my-12">
          <button
            className="btn-no text-xl font-medium me-8"
            onClick={sendData}
          >
            No
          </button>
          <button
            className="btn-yes text-xl font-medium ms-8"
            onClick={() => {
              if (csv) {
                exportCsv();
              } else deleteData();
            }}
          >
            Yes
          </button>
        </div>
      </div>

      <Modal open={openModal} send={sendDataModal} />
    </div>
  );
}
