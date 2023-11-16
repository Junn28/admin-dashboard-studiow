import HeaderSection from "../../../components/utils/headerSection";
import Table from "../../../components/utils/table";
import Pagination from "../../../components/utils/pagination";
import iPlus from "../../../assets/plus.svg";

export default function CustomProject() {
  const tableBody = [
    {
      date: "2023/03/23",
      name: "Rahma Sari",
      project: "New Game 2023",
      category: "Game",
    },
    {
      date: "2023/03/23",
      name: "Rahma Sari",
      project: "New Game 2023",
      category: "Game",
    },
    {
      date: "2023/03/23",
      name: "Rahma Sari",
      project: "New Game 2023",
      category: "Game",
    },
    {
      date: "2023/03/23",
      name: "Rahma Sari",
      project: "New Game 2023",
      category: "Game",
    },
    {
      date: "2023/03/23",
      name: "Rahma Sari",
      project: "New Game 2023",
      category: "Game",
    },
    {
      date: "2023/03/23",
      name: "Rahma Sari",
      project: "New Game 2023",
      category: "Game",
    },
    {
      date: "2023/03/23",
      name: "Rahma Sari",
      project: "New Game 2023",
      category: "Game",
    },
    {
      date: "2023/03/23",
      name: "Rahma Sari",
      project: "New Game 2023",
      category: "Game",
    },
    {
      date: "2023/03/23",
      name: "Rahma Sari",
      project: "New Game 2023",
      category: "Game",
    },
  ];
  const tableHead = [
    "Tanggal Permintaan",
    "Nama Pesanan",
    "Nama Project",
    "Kategori Project",
    "View Detail",
    "Action",
  ];

  return (
    <div className="w-full">
      <div className="container mt-8">
        <div className="px-5">
          <HeaderSection
            title={"Portofolio"}
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
