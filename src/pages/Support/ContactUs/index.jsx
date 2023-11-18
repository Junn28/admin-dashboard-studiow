import HeaderSection from "../../../components/utils/headerSection";
import Table from "../../../components/utils/table";
import Pagination from "../../../components/utils/pagination";

export default function ContactUs() {
  const tableBody = [
    {
      name: "Eduardo",
      whatsapp: "079 8761 9681",
      subject: "Customer",
    },
    {
      name: "Leslie Alexander",
      whatsapp: "079 8761 9681",
      subject: "Customer",
    },
    {
      name: "Miles Esther",
      whatsapp: "079 8761 9681",
      subject: "Customer",
    },
    {
      name: "Audrey",
      whatsapp: "079 8761 9681",
      subject: "Customer",
    },
    {
      name: "Brooklyn Simmons",
      whatsapp: "079 8761 9681",
      subject: "Customer",
    },
    {
      name: "Jacob Jones",
      whatsapp: "079 8761 9681",
      subject: "Customer",
    },
    {
      name: "Brooklyn Simmons",
      whatsapp: "079 8761 9681",
      subject: "Customer",
    },
    {
      name: "Jerome Bell",
      whatsapp: "079 8761 9681",
      subject: "Customer",
    },
    {
      name: "Eleanor Pena",
      whatsapp: "079 8761 9681",
      subject: "Customer",
    },
  ];
  const tableHead = ["Nama", "WhatsApp", "Subjek", "View Detail", "Action"];
  return (
    <div className="w-full">
      <div className="container mt-8">
        <div className="px-5">
          <HeaderSection title={"Contact Us"} btnName={"Cari"} search={true} />
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
