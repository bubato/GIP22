import React from "react";
import SwitchPageBox from "./SwitchPageBox";
import styled from "styled-components";
function Pagination({ maxPage, setPage, page }) {
  return (
    <PaginationWrapper>
      <button
        className={page === 1 ? "box disabled" : "box"}
        onClick={() => setPage(page - 1)}
      >
        Prev
      </button>
      <button className="box" onClick={() => setPage(1)}>
        1
      </button>
      <button className={page < 4 ? `none` : "box dot"}>...</button>

      <SwitchPageBox maxPage={maxPage} setPage={setPage} page={page} />

      <button className={page >= maxPage - 2 ? `none` : "box dot"}>...</button>

      <button className="box" onClick={() => setPage(maxPage)}>
        {maxPage}
      </button>
      <button
        className={page >= maxPage ? "box disabled" : "box"}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </PaginationWrapper>
  );
}
const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  .none {
    display: none;
  }
  .box {
    cursor: pointer;
    color: white;
    background: brown;
    padding: 0.5rem;
    display: flex;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    border-radius: 0.25rem;
    border: none;
  }
  .disabled {
    cursor: not-allowed;
    pointer-events: none;
    background-color: #27272a;
    color: #ccc;
  }
  .dot {
    cursor: not-allowed;
    pointer-events: none;
  }
  .red {
    color: red;
  }
`;
export default Pagination;
