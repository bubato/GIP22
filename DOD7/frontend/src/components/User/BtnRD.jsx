import React from "react";
import { Link } from "react-router-dom";
import { FaTrash, FaEdit } from "react-icons/fa";
import { removeUser } from "../../apis/user";
import { successAlert, errorAlert } from "../../utils/alert";
import { notification } from "../../translation/vn";

function BtnRD({ id, data, setData }) {
  const handleDelete = async (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-restricted-globals
    const cf = confirm(notification.confirmDelete);
    if (cf) {
      try {
        await removeUser(id);
        const newData = data?.filter((item) => item._id !== id);
        setData(newData);
        successAlert(notification.deleteUserSuccess);
      } catch (error) {
        errorAlert(notification.deleteUserError);
      }
    }
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
