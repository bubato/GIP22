import React from "react";
import SwitchPageBox from "./SwitchPageBox";
import styled from "styled-components";
import OptionPageSize from "./OptionPageSize";
function Pagination({ maxPage, setPage, page, setPageSize, pageSize }) {
  // const items = [2, 3, 4];
  return (
    <PaginationWrapper>
      <div className="page">
        <button
          className={page === 1 ? "box disabled" : "box"}
          onClick={() => setPage(page - 1)}
        >
          Prev
        </button>
        <button
          className={page === 1 ? "box active" : "box"}
          onClick={() => setPage(1)}
        >
          1
        </button>
        <button className={maxPage <= 6 || page < 4 ? `none` : "box dot"}>
          ...
        </button>
        {maxPage > 2 && (
          <SwitchPageBox maxPage={maxPage} setPage={setPage} page={page} />
        )}

        <button
          className={maxPage <= 6 || page >= maxPage - 2 ? `none` : "box dot"}
        >
          ...
        </button>
        {maxPage > 1 && (
          <button
            className={page === maxPage ? "active box" : "box"}
            onClick={() => setPage(maxPage)}
          >
            {maxPage}
          </button>
        )}

        <button
          className={page >= maxPage ? "box disabled" : "box"}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
      <OptionPageSize
        setPageSize={setPageSize}
        pageSize={pageSize}
        setPage={setPage}

      />
    </PaginationWrapper>
  );
}
const PaginationWrapper = styled.div`

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
.page{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

  }
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
  .active {
    background-color: #435ebe;
  }
  .none {
    display: none;
  }
  .option_size{
  padding: 0.5rem;
  font-size: 1.25rem;
  border: 2px solid #ccc;
  transition: all 0.25s linear;
  width: 10rem;
  margin: 1rem 0rem;
  border-radius: 0.5rem;
  }
`;
export default Pagination;
