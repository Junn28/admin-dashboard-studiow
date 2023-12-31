import { useState } from "react";
import iImg from "../../../../assets/img.svg";
import iUnorderList from "../../../../assets/unorder-list.svg";
import iOrderList from "../../../../assets/order-list.svg";
import iSave from "../../../../assets/save.svg";
import Modal from "../../../../components/utils/modal";
import dataPortofolio from "../data";

export default function AddPortofolio({ title, edit, data, idData }) {
  const [modal, setModal] = useState(false);
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("");
  const [userInput, setUserInput] = useState({
    project: "",
    category: "",
    releases_date: "",
    status: "",
    description: "",
    tools: "",
    language: "",
    link: "",
  });

  const openModal = () => {
    setModal(!modal);
  };

  const addNewData = () => {
    const newData = {
      project: userInput.project,
      category: userInput.category,
      releases_date: "2023/03/23",
      status: "Publish",
      description: userInput.description,
      tools: userInput.tools,
      language: userInput.language,
      link: userInput.link,
    };

    openModal();
    return dataPortofolio.push(newData);
  };

  const editData = () => {
    openModal();

    return dataPortofolio.map((item, index) => {
      if (index == idData) {
        item.project = userInput.project || data.project;
        item.category = userInput.category || data.category;
        item.releases_date = data.releases_date;
        item.status = data.status;
        item.description = userInput.description || data.description;
        item.link = userInput.link || data.link;
        item.tools = userInput.tools || data.tools;
      }
    });
  };

  return (
    <div className="w-full">
      <div className="mt-5 px-5">
        <h1 className="text-2xl font-medium">{title || "Add"} Portofolio</h1>

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
                onChange={({ target: { files } }) => {
                  files[0] && setFileName(files[0].name);
                  if (files) setImage(URL.createObjectURL(files[0]));
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
            htmlFor="project"
            className="block text-base font-semibold mb-2"
          >
            Project Name<span>*</span>
          </label>
          <input
            type="text"
            name="project"
            placeholder="Field Description"
            className="block w-full border-2 p-2 rounded mb-3"
            defaultValue={edit && data.project}
            onChange={(e) => {
              setUserInput((prevState) => {
                return { ...prevState, project: e.target.value };
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

          <label htmlFor="tools" className="block text-base font-semibold mb-2">
            Tools<span>*</span>
          </label>
          <input
            type="text"
            name="tools"
            placeholder="Field Description"
            className="block w-full border-2 p-2 rounded mb-3"
            defaultValue={edit && data.tools}
            onChange={(e) => {
              setUserInput((prevState) => {
                return { ...prevState, tools: e.target.value };
              });
            }}
            required
          />

          <label
            htmlFor="language"
            className="block text-base font-semibold mb-2"
          >
            Language<span>*</span>
          </label>
          <input
            type="text"
            name="language"
            placeholder="Field Description"
            className="block w-full border-2 p-2 rounded mb-3"
            defaultValue={edit && data.language}
            onChange={(e) => {
              setUserInput((prevState) => {
                return { ...prevState, language: e.target.value };
              });
            }}
            required
          />

          <label
            htmlFor="link-preview"
            className="block text-base font-semibold mb-2"
          >
            Link Preview (optional)
          </label>
          <input
            type="url"
            name="link-preview"
            placeholder="Field Description"
            className="block w-full border-2 p-2 rounded mb-3"
            defaultValue={edit && data.link}
            onChange={(e) => {
              setUserInput((prevState) => {
                return { ...prevState, link: e.target.value };
              });
            }}
          />
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
