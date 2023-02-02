import React from "react";

function SwitchPageBox({ maxPage, setPage, page }) {
  const arr = Array.from(Array(3).keys());
  return (
    <>
      {arr?.map((item) => {
        return (
          <>
            {page + item <= maxPage && item === 2 ? (
              <>
                <button
                  className={page + item > maxPage - 1 ? `none` : "box"}
                  key={item}
                  onClick={() => setPage(page + item)}
                >
                  {page + item}
                </button>
                <button className={page + item >= maxPage - 1 ? `none` : "box"}>
                  ...
                </button>
              </>
            ) : (
              <button
                className={page + item > maxPage - 1 ? `none` : "box"}
                key={item}
                onClick={() => setPage(page + item)}
              >
                {page + item}
              </button>
            )}
          </>
        );
      })}
    </>
  );
}

export default SwitchPageBox;
