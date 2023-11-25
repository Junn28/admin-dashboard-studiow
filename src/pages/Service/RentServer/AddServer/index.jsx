import { useState } from "react";
import Modal from "../../../../components/utils/modal";
import iSave from "../../../../assets/save.svg";

export default function AddServer({ title, edit, data }) {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(!modal);
  };

  return (
    <div className="w-full">
      <div className="mt-5 px-5">
        <div className="flex justify-between">
          <h1 className="text-2xl font-medium">{title || "Add"} Sewa Server</h1>

          <button
            className="bg-pws-purple py-2 px-12 flex items-center text-white rounded-md"
            onClick={openModal}
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
            required
          />
        </form>
      </div>

      <Modal open={modal} send={openModal} />
    </div>
  );
}
