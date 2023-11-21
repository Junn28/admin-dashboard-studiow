import AddBlog from "../../AddBlog";
import data from "../../data";
import { useParams } from "react-router-dom";

export default function EditBlog() {
  const { id } = useParams();
  const dataBlog = data[id];

  return <AddBlog title={"Edit"} data={dataBlog} />;
}
