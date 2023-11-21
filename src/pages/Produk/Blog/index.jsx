import HeaderPage from "../../../components/utils/headerPage";
import Pagination from "../../../components/utils/pagination";
import Table from "../../../components/utils/table";
import dataBody from "./data";

export default function Blog() {
  const tableHead = [
    "Nama Project",
    "Kategori",
    "Tanggal Rilis",
    "Status",
    "Action",
  ];

  return (
    <div className="w-full">
      <div className="container mt-8">
        <div className="px-5">
          <HeaderPage title="Blog" />
        </div>

        <div className="px-5 mb-5">
          <Table tBody={dataBody} tHead={tableHead} />
        </div>

        <div className="flex justify-end px-5">
          <Pagination />
        </div>
      </div>
    </div>
  );
}
