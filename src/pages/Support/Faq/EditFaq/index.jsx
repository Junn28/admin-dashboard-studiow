import { useParams } from "react-router-dom";
import data from "../data";
import AddFaq from "../AddFaq";

export default function EditFaq() {
  const { id } = useParams();
  const dataQuestion = data[id];

  return <AddFaq title={"Edit"} edit={true} data={dataQuestion} />;
}
