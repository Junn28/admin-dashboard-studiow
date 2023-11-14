import AddTemplate from "../../AddTemplate";
import { useParams } from "react-router-dom";
import data from "../../data";
import { useState } from "react";

export default function EditTemplate() {
  const { id } = useParams();
  const [edit, setEdit] = useState(true);
  const dataTemplate = data[id];

  const toggleEdit = () => {
    setEdit(!edit);
  };

  return (
    <AddTemplate
      title={"Edit"}
      edit={edit}
      data={dataTemplate}
      send={toggleEdit}
    />
  );
}
