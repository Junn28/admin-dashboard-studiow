import HeaderSection from "../../../components/utils/headerSection";
import iPlus from "../../../assets/plus.svg";
import iCheck from "../../../assets/check.svg";
import iCross from "../../../assets/cross.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import questions from "./data";
import ItemQuestion from "../../../components/utils/itemQuestion";
import ModalConfirmation from "../../../components/utils/modalConfirmation";

export default function Faq() {
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();
  const [inputSearch, setInputSearch] = useState("");
  const [sortedRows, setSortedRows] = useState(questions);

  const filteredRows = sortedRows.filter((item) =>
    item.question.toLowerCase().includes(inputSearch.toLowerCase())
  );

  const handleSearch = ({ target: { value } }) => {
    setInputSearch(value);
  };

  const handleFilter = () => {
    const sort = filteredRows.sort((a, b) =>
      a["question"].localeCompare(b["question"])
    );
    setSortedRows(sort);
  };

  const toggle = () => {
    if (visible)
      document.querySelector(".btn-question .circle").style.transform =
        "translateX(-20px)";
    else
      document.querySelector(".btn-question .circle").style.transform = "none";

    setVisible(!visible);
  };

  const addFaq = () => {
    navigate("/support/faq/add");
  };

  const [confirm, setConfirm] = useState(false);
  const [id, setId] = useState(null);

  const openConfirm = (id) => {
    setConfirm(!confirm);
    setId(id);
  };

  return (
    <div className="w-full">
      <div className="container mt-8 px-5">
        <HeaderSection
          title={"Frequently Asked Questions"}
          btnName={"Add"}
          btnIcon={iPlus}
          btnAction={addFaq}
          search={true}
          filter={true}
          handleFilter={handleFilter}
          handleSearch={handleSearch}
        />
      </div>

      <div className="container mt-8 px-5">
        <div
          className="flex flex-col gap-4 p-3 rounded-md"
          style={{ backgroundColor: "#D8E3FF" }}
        >
          <div className="box-question flex bg-white">
            <div className="box-drag flex items-center">
              <div
                className="box-line rounded-l-lg"
                style={{ backgroundColor: "#1EB57F" }}
              ></div>

              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 16C9.53043 16 10.0391 16.2107 10.4142 16.5858C10.7893 16.9609 11 17.4696 11 18C11 18.5304 10.7893 19.0391 10.4142 19.4142C10.0391 19.7893 9.53043 20 9 20C8.46957 20 7.96086 19.7893 7.58579 19.4142C7.21071 19.0391 7 18.5304 7 18C7 17.4696 7.21071 16.9609 7.58579 16.5858C7.96086 16.2107 8.46957 16 9 16ZM9 10C9.53043 10 10.0391 10.2107 10.4142 10.5858C10.7893 10.9609 11 11.4696 11 12C11 12.5304 10.7893 13.0391 10.4142 13.4142C10.0391 13.7893 9.53043 14 9 14C8.46957 14 7.96086 13.7893 7.58579 13.4142C7.21071 13.0391 7 12.5304 7 12C7 11.4696 7.21071 10.9609 7.58579 10.5858C7.96086 10.2107 8.46957 10 9 10ZM9 4C9.53043 4 10.0391 4.21071 10.4142 4.58579C10.7893 4.96086 11 5.46957 11 6C11 6.53043 10.7893 7.03914 10.4142 7.41421C10.0391 7.78929 9.53043 8 9 8C8.46957 8 7.96086 7.78929 7.58579 7.41421C7.21071 7.03914 7 6.53043 7 6C7 5.46957 7.21071 4.96086 7.58579 4.58579C7.96086 4.21071 8.46957 4 9 4Z"
                  fill="#1EB57F"
                />
                <path
                  d="M15 16C15.5304 16 16.0391 16.2107 16.4142 16.5858C16.7893 16.9609 17 17.4696 17 18C17 18.5304 16.7893 19.0391 16.4142 19.4142C16.0391 19.7893 15.5304 20 15 20C14.4696 20 13.9609 19.7893 13.5858 19.4142C13.2107 19.0391 13 18.5304 13 18C13 17.4696 13.2107 16.9609 13.5858 16.5858C13.9609 16.2107 14.4696 16 15 16ZM15 10C15.5304 10 16.0391 10.2107 16.4142 10.5858C16.7893 10.9609 17 11.4696 17 12C17 12.5304 16.7893 13.0391 16.4142 13.4142C16.0391 13.7893 15.5304 14 15 14C14.4696 14 13.9609 13.7893 13.5858 13.4142C13.2107 13.0391 13 12.5304 13 12C13 11.4696 13.2107 10.9609 13.5858 10.5858C13.9609 10.2107 14.4696 10 15 10ZM15 4C15.5304 4 16.0391 4.21071 16.4142 4.58579C16.7893 4.96086 17 5.46957 17 6C17 6.53043 16.7893 7.03914 16.4142 7.41421C16.0391 7.78929 15.5304 8 15 8C14.4696 8 13.9609 7.78929 13.5858 7.41421C13.2107 7.03914 13 6.53043 13 6C13 5.46957 13.2107 4.96086 13.5858 4.58579C13.9609 4.21071 14.4696 4 15 4Z"
                  fill="#1EB57F"
                />
              </svg>
            </div>

            <div className="box-item w-full p-5">
              <div className="box-head flex justify-between">
                <p>General Questions</p>

                <div className="btn-question flex items-center">
                  <span className="text-sm me-3">
                    {visible ? "Visible" : "Hidden"}
                  </span>

                  <button
                    className="btn-toggle flex items-center justify-end p-1 me-3 transition-all duration-300"
                    style={
                      visible
                        ? { backgroundColor: "#64DD94" }
                        : { backgroundColor: "#E85861" }
                    }
                    onClick={toggle}
                  >
                    <div className="circle flex items-center justify-center transition-all duration-300 shadow-lg">
                      <img src={visible ? iCheck : iCross} alt="icon" />
                    </div>
                  </button>

                  <button className="flex items-center px-3 py-1 bg-sws-yellow rounded me-3">
                    <svg
                      width="13"
                      height="12"
                      viewBox="0 0 13 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="me-2"
                    >
                      <path
                        d="M12.3285 2.80139C12.58 2.54989 12.58 2.13071 12.3285 1.89211L10.8195 0.383093C10.5809 0.13159 10.1617 0.13159 9.91022 0.383093L8.72365 1.56322L11.1419 3.98152M0.907715 9.3856V11.8039H3.32601L10.4584 4.66509L8.04007 2.24679L0.907715 9.3856Z"
                        fill="white"
                      />
                    </svg>
                    <p className="text-sm text-white">Edit</p>
                  </button>

                  <button className="flex items-center px-3 py-1 bg-sws-red rounded">
                    <svg
                      width="11"
                      height="12"
                      viewBox="0 0 11 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="me-2"
                    >
                      <path
                        d="M10.0237 0.823534H7.75896L7.1119 0.176476H3.87661L3.22955 0.823534H0.964844V2.11765H10.0237M1.6119 10.5294C1.6119 10.8726 1.74825 11.2018 1.99094 11.4445C2.23364 11.6872 2.5628 11.8235 2.90602 11.8235H8.08249C8.42571 11.8235 8.75488 11.6872 8.99757 11.4445C9.24026 11.2018 9.37661 10.8726 9.37661 10.5294V2.76471H1.6119V10.5294Z"
                        fill="white"
                      />
                    </svg>
                    <p className="text-sm text-white">Delete</p>
                  </button>
                </div>
              </div>

              {filteredRows.map((value, index) => (
                <ItemQuestion
                  data={value}
                  key={index}
                  idQuestion={index}
                  confirm={openConfirm}
                />
              ))}

              <button
                className="w-full flex items-center justify-center p-4 mt-4 border-dashed border-2 border-[#AAAAAA] rounded"
                onClick={addFaq}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.4166 7.91666H7.91658V13.4167H6.08325V7.91666H0.583252V6.08333H6.08325V0.583328H7.91658V6.08333H13.4166V7.91666Z"
                    fill="#A0A0A0"
                  />
                </svg>

                <span className="text-sm text-[#A0A0A0] ms-3">Add New FAQ</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <ModalConfirmation
        text={"Are you sure want to archive this FAQ ?"}
        open={confirm}
        send={openConfirm}
        idData={id}
        data={questions}
      />
    </div>
  );
}
