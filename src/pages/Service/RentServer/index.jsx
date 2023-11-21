import HeaderSection from "../../../components/utils/headerSection";
import Table from "../../../components/utils/table";
import Pagination from "../../../components/utils/pagination";
import iPlus from "../../../assets/plus.svg";

export default function RentServer() {
  const tableBody = [
    {
      packet: "Premium",
      status: "Active",
    },
    {
      packet: "Basic",
      status: "Active",
    },
    {
      packet: "Premium",
      status: "Active",
    },
    {
      packet: "Basic",
      status: "Active",
    },
    {
      packet: "Premium",
      status: "Active",
    },
    {
      packet: "Basic",
      status: "Active",
    },
    {
      packet: "Premium",
      status: "Active",
    },
    {
      packet: "Basic",
      status: "Active",
    },
  ];
  const tableHead = ["Nama Paket", "Status", "View Detail", "Action"];
  return (
    <div className="w-full">
      <div className="container mt-8">
        <div className="px-5">
          <HeaderSection
            title={"Sewa Server"}
            btnName={"Add"}
            btnIcon={iPlus}
            search={true}
          />
        </div>

        <div className="px-5 mb-5">
          <Table tBody={tableBody} tHead={tableHead} />
        </div>

        <div className="flex justify-end px-5">
          <Pagination />
        </div>
      </div>
    </div>
  );
}
