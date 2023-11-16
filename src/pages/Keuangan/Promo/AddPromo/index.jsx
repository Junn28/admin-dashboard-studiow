import iUnorderList from "../../../../assets/unorder-list.svg";
import iOrderList from "../../../../assets/order-list.svg";
import iSave from "../../../../assets/save.svg";
import Modal from "../../../../components/utils/modal";
import { useState } from "react";

export default function AddPromo({ title, edit, data }) {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(!modal);
  };

  return (
    <div className="w-full">
      <div className="mt-5 px-5">
        <h1 className="text-2xl font-medium">{title || "Add"} Promo</h1>

        <form action="" className="p-8 shadow-xl">
          <label htmlFor="promo" className="block text-base font-semibold mb-2">
            Promo Code<span>*</span>
          </label>
          <input
            type="text"
            name="promo"
            placeholder="Field Description"
            className="block w-full border-2 p-2 rounded mb-3"
            defaultValue={edit && data.promo_code}
            required
          />
          <label htmlFor="title" className="block text-base font-semibold mb-2">
            Title<span>*</span>
          </label>
          <input
            type="text"
            name="title"
            placeholder="Field Description"
            className="block w-full border-2 p-2 rounded mb-3"
            defaultValue={edit && data.title}
            required
          />
          <label
            htmlFor="description"
            className="block text-base font-semibold mb-2"
          >
            Description
          </label>
          <div className="input-description rounded mb-3">
            <div className="btn-group-format flex bg-gray-300 p-2">
              <div className="btn-format-text me-3">
                <button className="text-xs font-semibold p-2">B</button>

                <button className="text-xs font-semibold p-2">
                  <i>I</i>
                </button>

                <button className="text-xs font-semibold p-2">
                  <u>U</u>
                </button>
              </div>

              <div className="btn-format-list">
                <button className="p-2">
                  <img src={iUnorderList} alt="unorder list" />
                </button>

                <button className="p-2">
                  <img src={iOrderList} alt="order list" />
                </button>
              </div>
            </div>

            <textarea
              name="description"
              id="description"
              placeholder="Field Description"
              className="block w-full p-2"
              defaultValue={edit && data.description}
            ></textarea>
          </div>

          <div className="mb-2">
            <label
              htmlFor="date"
              className="block text-base font-semibold mb-2"
            >
              Date<span>*</span>
            </label>
            <input type="date" name="date" className="me-5" />
            <input type="date" name="date" />
          </div>

          <label
            htmlFor="discount"
            className="block text-base font-semibold mb-2"
          >
            Discount<span>*</span>
          </label>
          <input
            type="number"
            name="discount"
            id="input-discount"
            defaultValue={edit && data.discount}
          />
          <span className="text-2xl font-medium ms-2">%</span>
        </form>

        <div className="flex justify-end mt-5 mb-5">
          <button
            className="bg-pws-purple py-2 px-12 flex items-center text-white rounded-md"
            onClick={openModal}
          >
            <img src={iSave} alt="save" />
            <p className="text-lg font-edium ms-5">Save</p>
          </button>
        </div>
      </div>

      <Modal open={modal} send={openModal} />
    </div>
  );
}
