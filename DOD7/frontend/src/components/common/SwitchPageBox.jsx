import React from "react";
function SwitchPageBox({ maxPage, setPage, page }) {
  const arr = Array.from(Array(3).keys());
  const value = [-1, 0, 1];
  const b = [-3, -2, -1];
  return (
    <>
      {page < 4 && (
        <>
          {arr.map((item) => {
            return (
              <button className={"box"} onClick={() => setPage(item + 2)}>
                {item + 2}
              </button>
            );
          })}
        </>
      )}
      {page >= 4 && page <= maxPage - 3 && (
        <>
          {arr.map((item) => {
            return (
              <button
                className="box"
                onClick={() => setPage(page + value[item])}
              >
                {page + value[item]}
              </button>
            );
          })}
        </>
      )}
      {page >= maxPage - 2 && page <= maxPage && (
        <>
          {b.map((item) => {
            return (
              <button className={"box"} onClick={() => setPage(maxPage + item)}>
                {maxPage + item}
              </button>
            );
          })}
        </>
      )}
    </>
  );
}

export default SwitchPageBox;
