import iUnorderList from "../../../../assets/unorder-list.svg";
import iOrderList from "../../../../assets/order-list.svg";
import iSave from "../../../../assets/save.svg";
import Modal from "../../../../components/utils/modal";
import dataQuestion from "../data";
import { useState } from "react";

export default function AddFaq({ title, edit, data, idData }) {
  const [modal, setModal] = useState(false);
  const [userInput, setUserInput] = useState({
    question: "",
    category: "",
    answer: "",
  });

  const openModal = () => {
    setModal(!modal);
  };

  const addNewData = () => {
    const newData = {
      question: userInput.question,
      category: userInput.category,
      answer: userInput.answer,
    };

    openModal();
    return dataQuestion.push(newData);
  };

  const editData = () => {
    openModal();

    return dataQuestion.map((item, index) => {
      if (index == idData) {
        item.question = userInput.question || data.question;
        item.category = userInput.category || data.category;
        item.answer = userInput.answer || data.answer;
      }
    });
  };

  return (
    <div className="w-full">
      <div className="mt-5 px-5">
        <h1 className="text-2xl font-medium">{title || "Add"} FAQs</h1>
      </div>

      <div className="mt-5 px-5">
        <form action="" className="p-8 shadow-xl">
          <label
            htmlFor="question"
            className="block text-base font-semibold mb-2"
          >
            Pertanyaan<span>*</span>
          </label>
          <input
            type="text"
            name="question"
            placeholder="Insert question here"
            className="block w-full border-2 p-2 rounded mb-3"
            defaultValue={edit && data.question}
            onChange={(e) => {
              setUserInput((prevState) => {
                return { ...prevState, question: e.target.value };
              });
            }}
            required
          />

          <label
            htmlFor="category"
            className="block text-base font-semibold mb-2"
          >
            Kategori<span>*</span>
          </label>
          <select
            name="category"
            id="category"
            className="text-xs font-light mb-3"
            defaultValue={edit && data.category}
            onChange={(e) => {
              setUserInput((prevState) => {
                return { ...prevState, category: e.target.value };
              });
            }}
          >
            <option>Choose</option>
            <option value="Game">Game</option>
            <option value="Website">Website</option>
          </select>

          <label
            htmlFor="answer"
            className="block text-base font-semibold mb-2"
          >
            Jawaban
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
              name="answer"
              placeholder="Describe the answer"
              className="block w-full p-2"
              defaultValue={edit && data.answer}
              onChange={(e) => {
                setUserInput((prevState) => {
                  return { ...prevState, answer: e.target.value };
                });
              }}
            ></textarea>
          </div>
        </form>

        <div className="flex justify-end mt-5 mb-5">
          <button
            className="bg-[#4c7fff] py-2 px-12 flex items-center text-white rounded-md"
            onClick={edit ? editData : addNewData}
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
