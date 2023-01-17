import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { UserDetail, UserList, UserInput } from "../components/User";
function User() {
  const [userList, setUserList] = useState([
    {
      id: "1",
      name: "Huy Hiep",
      sex: "Nam",
      email: "hiepnh.fk@gmail.com",
      position: "Boss",
    },
  ]);

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<UserList userList={userList} setUserList={setUserList} />}
      />
      <Route
        exact
        path="/:id"
        element={
          <UserDetail
            userList={userList}
            setUserList={setUserList}
            type="detail"
          />
        }
      />
      <Route
        exact
        path="/new"
        element={
          <UserInput type="new" userList={userList} setUserList={setUserList} />
        }
      />
    </Routes>
  );
}

export default User;
