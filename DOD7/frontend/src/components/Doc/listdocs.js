import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useSearchParams } from "react-router-dom";
import { list, remove } from "../../apis/doc";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { successAlert } from "../../utils/alert";
import Loading from "../Loading";
import { notification, docTranslation, noData } from "../../translation/vn";
import Pagination from "../common/Pagination";

function ListDoc() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5)
  const [length, setLength] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();

  const getData = async () => {
    setLoading(true);
    const res = await list(page, pageSize);
    setData(res?.data?.documents);
    setLoading(false);
    setLength(res?.data?.length);
  };
  useEffect(() => {
    getData();
  }, [page, pageSize]);
  const removeListDocs = async (id) => {
    // eslint-disable-next-line no-restricted-globals
    const cf = confirm(notification.confirmDelete);
    if (cf) {
      await remove(id);
      const arrList = data.filter((item) => item._id !== id);
      setData(arrList);
      successAlert(notification.deleteDocSuccess);
    }
  };
  useEffect(() => {
    setSearchParams({
      pageIndex: page,
      pageSize: pageSize,
    });
    // eslint-disable-next-line
  }, [page, pageSize]);
  if (loading) {
    return <Loading />;
  }
  return (
    <Wrapper>
      <Link to={`/docs/add`} className="add-btn">
        {docTranslation.create}
      </Link>

      {data.length === 0 ? (
        <h1>{noData.list}</h1>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>{docTranslation.stt}</th>
                <th>{docTranslation.name}</th>
                <th>{docTranslation.link}</th>
                <th>{docTranslation.owner}</th>
                <th>{docTranslation.thumbnailLink}</th>
                <th>{docTranslation.type}</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, index) => {
                return (
                  <tr key={item?.id}>
                    <td>{(page - 1) * pageSize + (index + 1)}</td>
                    <td>{item?.name}</td>
                    <td>{item?.link}</td>
                    <td>{item?.owner?.fullName}</td>
                    <td>{item?.thumbnailLink}</td>
                    <td>{item?.type}</td>
                    <button className="btn_click" onClick={() => removeListDocs(item?._id)}>
                      <AiOutlineDelete />
                    </button>
                    <Link to={`/docs/${item?._id}`}>
                      <button className="btn_click">
                        <AiOutlineEdit />
                      </button>
                    </Link>
                  </tr>
                );
              })}
            </tbody>
          </table>
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
        </>
      )}
      {/* <Pagination
        maxPage={Math.ceil(length / 5)}
        setPage={setPage}
        page={page}
      /> */}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  min-width: 100%;
  flex-direction: column;
  padding: 80px 50px;
  position: relative;
  table {
    border: 1px solid #000;
    min-width: 80%;
    margin-top: 15px;
    margin-bottom: 1rem;
  }

  .add-btn {
    padding: 10px;
    margin: 10px 0;
    max-width: 150px;
    background-color: #435ebe;
    border-radius: 10px;
    color: #fff;
    text-align: center;
    position: absolute;
    right: 50px;
    top: 30px;
  }
  .btn_click {
    margin: 0 10px;
    padding: 5px;
    min-width: 30px;
    min-height: 30px;
    background-color: #435ebe;
    color: #fff;
    border: none;
    border-radius: 2px;
    cursor: pointer;
  }
  p {
    text-align: center;
    margin-bottom: 1rem;
    color: brown;
    font-weight: bold;
  }
`;
export default ListDoc;
