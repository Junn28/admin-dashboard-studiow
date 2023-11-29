import { useState } from "react";
import Modal from "../../../../components/utils/modal";
import iSave from "../../../../assets/save.svg";
import dataServer from "../data";

export default function AddServer({ title, edit, data, idData }) {
  const [modal, setModal] = useState(false);
  const [userInput, setUserInput] = useState({
    packet: "",
    status: "",
    name: "",
    fitur: "",
    price: "",
    time: "",
    company: "",
  });

  const openModal = () => {
    setModal(!modal);
  };

  const addNewData = () => {
    const newData = {
      packet: "premium",
      status: userInput.status,
      name: userInput.name,
      fitur: userInput.fitur,
      price: userInput.price,
      time: userInput.time,
      company: "PT. Jaya Mandiri",
    };

    openModal();
    return dataServer.push(newData);
  };

  const editData = () => {
    openModal();

    return dataServer.map((item, index) => {
      if (index == idData) {
        item.packet = data.packet;
        item.status = userInput.status || data.status;
        item.name = userInput.name || data.name;
        item.fitur = userInput.fitur || data.fitur;
        item.price = userInput.price || data.price;
        item.time = userInput.time || data.time;
        item.company = data.company;
      }
    });
  };

  return (
    <div className="w-full">
      <div className="mt-5 px-5">
        <div className="flex justify-between">
          <h1 className="text-2xl font-medium">{title || "Add"} Sewa Server</h1>

          <button
            className="bg-[#4c7fff] py-2 px-12 flex items-center text-white rounded-md"
            onClick={edit ? editData : addNewData}
          >
            <img src={iSave} alt="save" />
            <p className="text-lg font-edium ms-5">Save</p>
          </button>
        </div>

        <form action="" className="p-8 shadow-xl">
          <label htmlFor="name" className="block text-base font-semibold mb-2">
            Nama<span>*</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Field Description"
            className="block w-full border-2 p-2 rounded mb-3"
            defaultValue={edit && data.name}
            onChange={(e) => {
              setUserInput((prevState) => {
                return { ...prevState, name: e.target.value };
              });
            }}
            required
          />

          <label htmlFor="fitur" className="block text-base font-semibold mb-2">
            Fitur<span>*</span>
          </label>
          <input
            type="text"
            name="fitur"
            placeholder="Field Description"
            className="block w-full border-2 p-2 rounded mb-3"
            defaultValue={edit && data.fitur}
            onChange={(e) => {
              setUserInput((prevState) => {
                return { ...prevState, fitur: e.target.value };
              });
            }}
            required
          />

          <label htmlFor="price" className="block text-base font-semibold mb-2">
            Harga<span>*</span>
          </label>
          <input
            type="text"
            name="price"
            placeholder="Rp0"
            className="block w-full border-2 p-2 rounded mb-3"
            defaultValue={edit && data.price}
            onChange={(e) => {
              setUserInput((prevState) => {
                return { ...prevState, price: e.target.value };
              });
            }}
            required
          />

          <label htmlFor="time" className="block text-base font-semibold mb-2">
            Jangka Waktu<span>*</span>
          </label>
          <input
            type="text"
            name="time"
            placeholder="Field Description"
            className="block w-full border-2 p-2 rounded mb-3"
            defaultValue={edit && data.time}
            onChange={(e) => {
              setUserInput((prevState) => {
                return { ...prevState, time: e.target.value };
              });
            }}
            required
          />

          <label
            htmlFor="status"
            className="block text-base font-semibold mb-2"
          >
            Status<span>*</span>
          </label>
          <input
            type="text"
            name="status"
            placeholder="Field Description"
            className="block w-full border-2 p-2 rounded mb-3"
            defaultValue={edit && data.status}
            onChange={(e) => {
              setUserInput((prevState) => {
                return { ...prevState, status: e.target.value };
              });
            }}
            required
          />
        </form>
      </div>

      <Modal open={modal} send={openModal} />
    </div>
  );
}
