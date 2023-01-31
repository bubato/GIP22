import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserInput from "./UserInput";
import Loading from "../Loading";
import { getUser } from "../../apis/user";
function UserDetail({ type }) {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const res = await getUser(id);
      setData(res?.data);
      setLoading(false);
    }
    fetchData();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!data) {
    return <h2 style={{ padding: "2rem" }}>Cant find user with id 😥</h2>;
  }

  return <UserInput type={type} user={data} id={id} />;
}

export default UserDetail;
