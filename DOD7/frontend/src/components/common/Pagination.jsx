import React, { useState } from "react";
import SwitchPageBox from "./SwitchPageBox";
import styled from "styled-components";
function Pagination({ length, setPage, page }) {
  const [maxPage, setMaxPage] = useState(Math.ceil(length / 1));
  return (
    <PaginationWrapper>
      <button
        className={page === 1 ? "none" : "box"}
        onClick={() => setPage(1)}
      >
        {/* Frist */}1
      </button>
      <button className={page >= 3 ? `box` : "none"}>...</button>
      <button
        className={page <= 2 ? "none" : "box"}
        onClick={() => setPage(page - 1)}
      >
        Prev
      </button>
      <SwitchPageBox maxPage={maxPage} setPage={setPage} page={page} />
      <button
        className={page > maxPage - 4 ? "none" : `box`}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
      <button
        className={page >= maxPage + 1 ? "none" : `box`}
        onClick={() => setPage(maxPage)}
      >
        {maxPage}
        {/* Last */}
      </button>
    </PaginationWrapper>
  );
}
const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  margin-right: -0.25rem;

  .none {
    display: none;
  }
  .box {
    color: white;
    cursor: pointer;
    background: brown;
    padding: 0.5rem;
    /* width: 1.5rem; */
    /* height: 1.5rem; */
    display: flex;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    border-radius: 0.25rem;
    margin-right: 0.25rem;
    border: none;
  }
  .active {
    color: brown;
    background-color: #ccc;
  }
`;
export default Pagination;
