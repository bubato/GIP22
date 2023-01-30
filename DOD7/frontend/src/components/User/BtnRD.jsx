import React from "react";
import { Link } from "react-router-dom";
import { FaTrash, FaEdit } from "react-icons/fa";
import { removeUser } from "../../apis/user";
function BtnRD({ id, data, setData }) {
  const handleDelete = async (e) => {
    e.preventDefault();
    await removeUser(id);
    const newData = data?.filter((item) => item._id !== id);
    setData(newData);
  };

  return (
    <>
      <td>
        <button className="table_icon" onClick={handleDelete}>
          <FaTrash />
        </button>
      </td>
      <td>
        <Link to={`/users/${id}`} className="table_icon">
          <FaEdit />
        </Link>
      </td>
    </>
  );
}
export default BtnRD;
