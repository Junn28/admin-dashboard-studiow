import AddPortofolio from "../../AddPortofolio";
import data from "../../data";
import { useParams } from "react-router-dom";

export default function EditPortofolio() {
  const { id } = useParams();
  const dataPortofolio = data[id];

  return (
    <AddPortofolio
      title={"Edit"}
      data={dataPortofolio}
      edit={true}
      idData={id}
    />
  );
}
