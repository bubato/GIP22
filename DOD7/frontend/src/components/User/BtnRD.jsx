import React from "react";
import { Link } from "react-router-dom";
import { FaTrash, FaEdit } from "react-icons/fa";

function BtnRD({ id, data, setData }) {
  const handleDelete = (e) => {
    e.preventDefault();
    const newData = data?.filter((item) => item.id !== id);
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
