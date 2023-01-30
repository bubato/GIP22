import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserInput from "./UserInput";
import { getUser } from "../../apis/user";
function UserDetail({ type }) {
  const { id } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const res = await getUser(id);
      console.log(res?.data);
      setData(res?.data);
    }
    fetchData();
  }, [id]);
  return <UserInput type={type} user={data} id={id} />;
}

export default UserDetail;
