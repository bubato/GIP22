import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserInput from "./UserInput";
function UserDetail({ userList, setUserList, type }) {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const getUser = () => {
    const user = userList.filter((user) => user.id === id);
    setData(user[0]);
  };
  useEffect(() => {
    getUser();
  }, [id]);
  return (
    <UserInput
      type={type}
      user={data}
      setUser={setData}
      userList={userList}
      setUserList={setUserList}
      id={id}
    />
  );
}

export default UserDetail;
