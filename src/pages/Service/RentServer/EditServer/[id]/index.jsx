import { useParams } from "react-router-dom";
import AddServer from "../../AddServer";
import data from "../../data";

export default function EditServer() {
  const { id } = useParams();
  const dataServer = data[id];

  return <AddServer title={"Edit"} edit={true} data={dataServer} />;
}
