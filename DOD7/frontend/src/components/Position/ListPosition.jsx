import React, { useEffect, useState } from "react";
import Loading from "../Loading";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line, RiFolderAddLine } from "react-icons/ri";
import { RxUpdate } from "react-icons/rx";
import { list, remove } from "../../apis/position";
import { successAlert } from "../../utils/alert";
import {noData, notification, positionTranslation} from "../../translation/vn";
const ListPosition = ({ positionList, setPositionList }) => {
  const [loading, setLoading] = useState(false);
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
      successAlert(notification.deletePositionSuccess)
    }
  };
  const getListPosition = async () => {
    setLoading(true);
    const res = await list();
    setPositionList(res.data);
    setLoading(false);
  };
  useEffect(() => {
    getListPosition();
  }, []);

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
                    <td>{++index}</td>
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
`;
export default ListPosition;
