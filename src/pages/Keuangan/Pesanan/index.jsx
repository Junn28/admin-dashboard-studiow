import HeaderSection from "../../../components/utils/headerSection";
import iExport from "../../../assets/export.svg";
import Table from "../../../components/utils/table";
import Pagination from "../../../components/utils/pagination";
import data from "../Pesanan/data";

export default function Pesanan() {
  const tableHead = [
    "Customer",
    "Nomor Telepon",
    "Plan",
    "Billing Date",
    "Description",
    "Document",
  ];

  return (
    <div className="w-full">
      <div className="container mt-8">
        <div className="px-5 mb-5">
          <HeaderSection
            title={"Pesanan"}
            btnName={"Export csv"}
            btnIcon={iExport}
            filter={false}
            search={true}
          />

          <Table tHead={tableHead} tBody={data} />
        </div>

        <div className="flex justify-end px-5">
          <Pagination />
        </div>
      </div>
    </div>
  );
}
