import React, {useState} from "react";
import {Routes, Route} from "react-router-dom";
import { AddDoc,ListDoc, UpdateDoc } from "../components/Doc";

function Doc() {

  return (<div>
    <Routes>
      <Route path="" element= {<ListDoc/>}></Route>
      <Route path="/add" element= {<AddDoc/>}></Route>
      <Route path="/:id" element= {<UpdateDoc/>}></Route>
    </Routes>

   
  </div>);
  
}

export default Doc;
