import iImg from "../../../assets/img.svg";
import iUnorderList from "../../../assets/unorder-list.svg";
import iOrderList from "../../../assets/order-list.svg";
import iSave from "../../../assets/save.svg";
import Modal from "../../../components/utils/modal";
import dataTemplate from "../data";
import { useState } from "react";

export default function AddTemplate({ title, edit, data, idData }) {
  const [modal, setModal] = useState(false);
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("");
  const [userInput, setUserInput] = useState({
    template: "",
    url_template: "",
    title: "",
    billing_date: "",
    description: "",
  });

  const openModal = () => {
    setModal(!modal);
  };

  const addNewData = () => {
    const newData = {
      template: userInput.template,
      url_template: userInput.url_template,
      title: userInput.title,
      plan: "Premium",
      status: "Active",
      billing_date: userInput.billing_date,
      description: userInput.description,
      price: "Rp200.000",
    };

    openModal();
    return dataTemplate.push(newData);
  };

  const editData = () => {
    openModal();

    return dataTemplate.map((item, index) => {
      if (index == idData) {
        item.template = userInput.template || data.template;
        item.url_template = userInput.url_template || data.url_template;
        item.title = userInput.title || data.title;
        item.plan = data.plan;
        item.status = data.status;
        item.billing_date = userInput.billing_date || data.billing_date;
        item.description = userInput.description || data.description;
        item.price = data.price;
      }
    });
  };

  return (
    <div className="w-full">
      <div className="mt-5 px-5">
        <h1 className="text-2xl font-medium">{title || "Add"} Template</h1>

        <div className="upload-image w-1/2 p-3 shadow-xl">
          <p>Upload Image (Preview)</p>

          <div className="file-image text-center mt-3">
            <div className="p-12">
              {image ? (
                <img
                  src={image}
                  width={250}
                  height={150}
                  alt={fileName}
                  className="mx-auto"
                />
              ) : (
                <>
                  <img src={iImg} alt="upload image" className="mx-auto mb-5" />

                  <p className="text-sm font-light color-nws-grey mb-3">
                    Choose image or drag it here
                  </p>
                  <p className="text-xs font-light color-nws-grey">
                    The image has to be 800x600 or 1200x900, and no larger that
                    10 MB. Our site supports jpg, gif, and png files.
                  </p>
                </>
              )}
            </div>

            <button
              className="bg-pws-purple py-2 px-8 mb-5 text-white text-base font-medium rounded-md"
              onClick={() => {
                document.getElementById("file-upload").click();
              }}
            >
              Choose Image
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                accept="image/*"
                onChange={({ target: { files, value } }) => {
                  files[0] && setFileName(files[0].name);
                  if (files) setImage(URL.createObjectURL(files[0]));

                  setUserInput((prevState) => {
                    return { ...prevState, template: value };
                  });
                }}
                hidden
              />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-5 px-5">
        <h1 className="text-2xl font-medium">Submission</h1>

        <form action="" className="p-8 shadow-xl">
          <label
            htmlFor="url-template"
            className="block text-base font-semibold mb-2"
          >
            Url template<span>*</span>
          </label>
          <input
            type="url"
            name="url-template"
            placeholder="https://example.com"
            className="block w-full border-2 p-2 rounded mb-3"
            defaultValue={edit && data.url_template}
            onChange={(e) => {
              setUserInput((prevState) => {
                return { ...prevState, url_template: e.target.value };
              });
            }}
            required
          />

          <label
            htmlFor="category"
            className="block text-base font-semibold mb-2"
          >
            Category<span>*</span>
          </label>
          <select
            name="category"
            id="category"
            className="text-xs font-light mb-3"
          >
            <option value="category">Category</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>

          <label htmlFor="title" className="block text-base font-semibold mb-2">
            Title<span>*</span>
          </label>
          <input
            type="text"
            name="title"
            placeholder="Field Description"
            className="block w-full border-2 p-2 rounded mb-3"
            defaultValue={edit && data.title}
            onChange={(e) => {
              setUserInput((prevState) => {
                return { ...prevState, title: e.target.value };
              });
            }}
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
              onChange={(e) => {
                setUserInput((prevState) => {
                  return { ...prevState, description: e.target.value };
                });
              }}
            ></textarea>
          </div>

          <label
            htmlFor="billing-date"
            className="block text-base font-semibold mb-2"
          >
            Billing Date<span>*</span>
          </label>

          <div className="flex">
            <label className="flex me-4">
              <input
                type="radio"
                name="billing-date"
                className="me-2"
                defaultChecked={edit && data.billing_date === "Monthly"}
                value="Monthly"
                onChange={(e) => {
                  setUserInput((prevState) => {
                    return { ...prevState, billing_date: e.target.value };
                  });
                }}
              />
              Monthly
            </label>

            <label className="flex">
              <input
                type="radio"
                name="billing-date"
                className="me-2"
                defaultChecked={edit && data.billing_date === "Annually"}
                value="Annually"
                onChange={(e) => {
                  setUserInput((prevState) => {
                    return { ...prevState, billing_date: e.target.value };
                  });
                }}
              />
              Annually
            </label>
          </div>
        </form>

        <div className="flex justify-end mt-5 mb-5">
          <button
            className="bg-pws-purple py-2 px-12 flex items-center text-white rounded-md"
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
