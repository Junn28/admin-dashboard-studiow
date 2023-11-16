import { useParams } from "react-router-dom";
import data from "../../data";
import AddPromo from "../../AddPromo";

export default function EditPromo() {
  const { id } = useParams();
  const dataPromo = data[id];

  return <AddPromo title={"Edit"} edit={true} data={dataPromo} />;
}
