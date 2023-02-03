import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";
import Loading from "../Loading";
import { removeUser } from "../../apis/user";
import { userTrans, noData, notification } from "../../translation/vn";
import { successAlert, errorAlert } from "../../utils/alert";

function UserTable({ loading, data = [], setData, page }) {
  const handleDelete = async (id) => {
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

  if (loading) {
    return <Loading />;
  }

  return (
    <Wrapper>
      <div className="heading">
        <h1 className="title">{userTrans.title}</h1>
        <Link to="/users/new" className="btn btn_add">
          {userTrans.addUser}
        </Link>
      </div>
      {data?.length === 0 ? (
        <h2>{noData.list}😥</h2>
      ) : (
        <div>
          <div className="list">
            <table>
              <tr>
                <th>{userTrans.stt}</th>
                <th>{userTrans.fullName}</th>
                <th>{userTrans.gender}</th>
                <th>{userTrans.email}</th>
                <th>{userTrans.position}</th>
              </tr>
              {data?.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{(page - 1) * 5 + (index + 1)}</td>
                    <td>{item?.fullName}</td>
                    <td>{item?.gender}</td>
                    <td>{item?.email}</td>
                    <td>{item?.position?.name}</td>
                    <td>
                      <button
                        className="table_icon"
                        onClick={() => handleDelete(item?._id)}
                      >
                        <FaTrash />
                      </button>
                    </td>
                    <td>
                      <Link to={`/users/${item?._id}`} className="table_icon">
                        <FaEdit />
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      )}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding: 2rem;
  padding-bottom: 1rem;
  .heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  .list,
  table {
    width: 100%;
    border: 1px solid red;
  }
`;
export default UserTable;
