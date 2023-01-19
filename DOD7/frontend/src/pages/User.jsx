import React from "react";
import { Routes, Route } from "react-router-dom";
import { UserDetail, UserList, UserInput } from "../components/User";
function User() {
  return (
    <Routes>
      <Route exact path="/" element={<UserList />} />
      <Route exact path="/:id" element={<UserDetail type="detail" />} />
      <Route exact path="/new" element={<UserInput type="new" />} />
    </Routes>
  );
}

export default User;
