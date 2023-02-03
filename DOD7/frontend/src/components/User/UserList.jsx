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
  const [pageSize, setPageSize] = useState(5)
  const [length, setLength] = useState(0);
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const res = await getListUser(page, pageSize);
      setData(res?.data?.users);
      setLength(res?.data?.length);
      setLoading(false);
    }
    fetchData();
  }, [page,pageSize]);

  useEffect(() => {
    setSearchParams({
      pageIndex: page,
      pageSize: pageSize,
    });
    // eslint-disable-next-line
  }, [page,pageSize]);
  return (
    <Wrapper>
      <UserTable pageSize={pageSize} loading={loading} data={data} setData={setData} page={page} />
      <p>
        Current {page} / {Math.ceil(length / pageSize)}
      </p>
      <Pagination
        maxPage={Math.ceil(length / pageSize)}
        setPage={setPage}
        page={page}
        setPageSize={setPageSize}
        pageSize={pageSize}
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
