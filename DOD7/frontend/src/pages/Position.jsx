import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { CreatePosition, ListPosition, UpdatePosition } from "../components/Position/index";
function Position() {
  const [positionList, setPositionList] = useState([]);
  return <div>
    <Routes>
      <Route exact path=""  element={<ListPosition positionList={positionList} setPositionList={setPositionList} />} />
      <Route exact path="/:id" element={<UpdatePosition positionList={positionList} setPositionList={setPositionList} />} />
      <Route exact path="/add" element={<CreatePosition positionList={positionList} setPositionList={setPositionList} />} />
    </Routes>
  </div>;
}

export default Position;
