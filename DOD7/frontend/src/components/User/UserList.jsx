import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BtnRD from "./BtnRD";
function UserList({ userList, setUserList }) {
  return (
    <Wrapper>
      <div className="heading">
        <h1 className="title">Users</h1>
        <Link to="/users/new" className="btn btn_add">
          Add new user
        </Link>
      </div>

      <div className="list">
        <table>
          <tr>
            <th>STT</th>
            <th>Full Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Posision</th>
          </tr>
          {userList.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item?.fullname}</td>
                <td>{item?.gender}</td>
                <td>{item?.email}</td>
                <td>{item?.posision}</td>
                <BtnRD id={item?.id} data={userList} setData={setUserList} />
              </tr>
            );
          })}
        </table>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding: 2rem;
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
export default UserList;
