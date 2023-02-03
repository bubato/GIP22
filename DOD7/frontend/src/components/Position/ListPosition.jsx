import React, { useEffect, useState } from "react";
import Loading from "../Loading";
import styled from "styled-components";
import { Link, useSearchParams } from "react-router-dom";
import { RiDeleteBin6Line, RiFolderAddLine } from "react-icons/ri";
import { RxUpdate } from "react-icons/rx";
import { list, remove } from "../../apis/position";
import { successAlert } from "../../utils/alert";
import {
  noData,
  notification,
  positionTranslation,
} from "../../translation/vn";
import Pagination from "../common/Pagination";

const ListPosition = ({ positionList, setPositionList }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(5)
  const [length, setLength] = useState(0);
  const removePosition = async (id) => {
    // eslint-disable-next-line no-restricted-globals
    const cf = confirm(notification.confirmDelete);
    if (cf) {
      await remove(id);
      getListPosition();
      const newPosition = positionList?.filter(
        (position) => position._id !== id
      );
      setPositionList(newPosition);
      successAlert(notification.deletePositionSuccess);
    }
  };
  const getListPosition = async () => {
    setLoading(true);
    const res = await list(page,pageSize);
    setPositionList(res.data.positions);
    setLength(res.data.length)
    setLoading(false);
  };
  useEffect(() => {
    getListPosition();
    setSearchParams({
      pageIndex: page,
      pageSize: pageSize,
    });
  }, [page,pageSize]);

  if (loading === true) {
    return <Loading />;
  }
  return (
    <Wrapper>
      <div className="container">
        <div className="title">
          <h1>Position</h1>
          <Link to={`/position/add`}>
            <button className="btn_add">
              <RiFolderAddLine /> {positionTranslation.create}
            </button>
          </Link>
        </div>
        {positionList?.length === 0 ? (
          <h1 className="fill">{noData.list}</h1>
        ) : (
          <div>
            <table>
              <thead>
                <tr>
                  <th>{positionTranslation.index}</th>
                  <th>{positionTranslation.name}</th>
                  <th>{positionTranslation.level}</th>
                  <th>{positionTranslation.action}</th>
                </tr>
              </thead>
              <tbody>
                {positionList?.map((item, index) => {
                  return (
                    <tr key={item._id}>
                      <td>{(page -1 )*pageSize +index +1}</td>
                      <td>{item?.name}</td>
                      <td>{item?.level}</td>
                      <td>
                        <button
                          className="btn_delete"
                          onClick={() => removePosition(item?._id)}
                        >
                          <RiDeleteBin6Line /> {positionTranslation.delete}
                        </button>
                        <Link to={`/position/${item?._id}`}>
                          <button className="btn">
                            <RxUpdate /> {positionTranslation.update}
                          </button>
                        </Link>
                      </td>
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
          </div>
        )}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .container {
    width: 100%;
  }
  .fill {
    margin: 2rem;
    display: flex;
    justify-content: center;
  }
  .title {
    margin: 2rem;
    display: flex;
    justify-content: space-between;
  }
  .btn_add {
    margin-right: 2rem;
  }
  .btn {
    border: none;
    color: white;
    background-color: gray;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    cursor: pointer;
  }
  table {
    border: 1px solid black;
    width: 100%;
  }
  tbody td {
    margin: 0 auto;
    border: 1px solid black;
  }
  .btn_delete {
    margin-right: 2rem;
  }
  p {
    text-align: center;
    margin-top:1rem;
    margin-bottom: 1rem;
    color: brown;
    font-weight: bold;
  }
`;
export default ListPosition;
