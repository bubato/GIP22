import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BtnRD from "./BtnRD";
import Loading from "../Loading";
import { userTrans, noData } from "../../translation/vn";
import { getListUser } from "../../apis/user";
function UserList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const res = await getListUser();
      setData(res?.data);
      setLoading(false);
    }
    fetchData();
  }, []);

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
        <div className="list">
          <table>
            <tr>
              <th>{userTrans.stt}</th>
              <th>{userTrans.fullName}</th>
              <th>{userTrans.gender}</th>
              <th>{userTrans.position}</th>
            </tr>
            {data?.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item?.fullName}</td>
                  <td>{item?.gender}</td>
                  <td>{item?.email}</td>
                  <td>{item?.position?.name}</td>
                  <BtnRD id={item?._id} data={data} setData={setData} />
                </tr>
              );
            })}
          </table>
        </div>
      )}
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
