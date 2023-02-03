import React from "react";
function SwitchPageBox({ maxPage, setPage, page }) {
  const arr = Array.from(Array(3).keys());
  const value = [-1, 0, 1];
  const b = [-3, -2, -1];
  const defaultBox = [2, 3, 4, 5];
  return (
    <>
      {maxPage <= 6 && (
        <>
          {defaultBox.map((item) => {
            return (
              <button
                className={
                  item >= maxPage
                    ? "none"
                    : item === page
                    ? "active box"
                    : "box"
                }
                onClick={() => setPage(item)}
              >
                {item}
              </button>
            );
          })}
        </>
      )}

      {maxPage > 6 && (
        <>
          {page < 4 && (
            <>
              {arr.map((item) => {
                return (
                  <button
                    className={item + 2 === page ? "active box" : "box"}
                    onClick={() => setPage(item + 2)}
                  >
                    {item + 2}
                  </button>
                );
              })}
            </>
          )}
          {page >= 4 && page <= maxPage - 3 && (
            <>
              {arr.map((item, index) => {
                return (
                  <button
                    className={index === 1 ? "active box" : "box"}
                    onClick={() => setPage(page + value[item])}
                  >
                    {page + value[item]}
                  </button>
                );
              })}
            </>
          )}
          {page >= 4 && page >= maxPage - 2 && page <= maxPage && (
            <>
              {b.map((item) => {
                return (
                  <button
                    className={maxPage + item === page ? "active box" : "box"}
                    onClick={() => setPage(maxPage + item)}
                  >
                    {maxPage + item}
                  </button>
                );
              })}
            </>
          )}
        </>
      )}
    </>
  );
}

export default SwitchPageBox;
