import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import UserTable from "./UserTable";
import Pagination from "../common/Pagination";
import { getListUser } from "../../apis/user";
function UserList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [length, setLength] = useState(0);
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const res = await getListUser(page, 5);
      setData(res?.data?.users);
      setLength(res?.data?.length);
      setLoading(false);
    }
    fetchData();
  }, [page]);

  useEffect(() => {
    setSearchParams({
      pageIndex: page,
      pageSize: 5,
    });
    // eslint-disable-next-line
  }, [page]);
  return (
    <Wrapper>
      <UserTable loading={loading} data={data} setData={setData} page={page} />
      <p>
        Current {page} / {Math.ceil(length / 5)}
      </p>
      <Pagination
        maxPage={Math.ceil(length / 5)}
        setPage={setPage}
        page={page}
      />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  p {
    text-align: center;
    margin-bottom: 1rem;
    color: brown;
    font-weight: bold;
  }
`;
export default UserList;
