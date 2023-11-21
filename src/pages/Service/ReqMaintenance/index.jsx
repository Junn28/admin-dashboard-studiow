import HeaderSection from "../../../components/utils/headerSection";
import Table from "../../../components/utils/table";
import Pagination from "../../../components/utils/pagination";
import iPlus from "../../../assets/plus.svg";

export default function ReqMaintenance() {
  const tableBody = [
    {
      name: "Rahma Sari",
      product: "Landing Page",
      subject: "Ganti card",
      whatsapp: "0812-3456-7890",
    },
    {
      name: "Rahma Sari",
      product: "Landing Page",
      subject: "Ganti card",
      whatsapp: "0812-3456-7890",
    },
    {
      name: "Rahma Sari",
      product: "Landing Page",
      subject: "Ganti card",
      whatsapp: "0812-3456-7890",
    },
    {
      name: "Rahma Sari",
      product: "Landing Page",
      subject: "Ganti card",
      whatsapp: "0812-3456-7890",
    },
    {
      name: "Rahma Sari",
      product: "Landing Page",
      subject: "Ganti card",
      whatsapp: "0812-3456-7890",
    },
    {
      name: "Rahma Sari",
      product: "Landing Page",
      subject: "Ganti card",
      whatsapp: "0812-3456-7890",
    },
    {
      name: "Rahma Sari",
      product: "Landing Page",
      subject: "Ganti card",
      whatsapp: "0812-3456-7890",
    },
    {
      name: "Rahma Sari",
      product: "Landing Page",
      subject: "Ganti card",
      whatsapp: "0812-3456-7890",
    },
  ];
  const tableHead = [
    "Nama Lengkap",
    "Nama Produk",
    "Subjek",
    "Whatsapp",
    "View Detail",
    "Action",
  ];
  return (
    <div className="w-full">
      <div className="container mt-8">
        <div className="px-5">
          <HeaderSection
            title={"Request Maintenance"}
            btnName={"Add"}
            btnIcon={iPlus}
            filter={true}
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
