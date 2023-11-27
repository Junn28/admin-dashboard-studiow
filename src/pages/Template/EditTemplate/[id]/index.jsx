import AddTemplate from "../../AddTemplate";
import { useParams } from "react-router-dom";
import data from "../../data";

export default function EditTemplate() {
  const { id } = useParams();
  const dataTemplate = data[id];

  return (
    <AddTemplate title={"Edit"} edit={true} data={dataTemplate} idData={id} />
  );
}
