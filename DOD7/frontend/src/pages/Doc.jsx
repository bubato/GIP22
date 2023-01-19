import React, {useState} from "react";
import {Routes, Route} from "react-router-dom";
import { AddDocs,ListDocs, UpdateDocs } from "../components/Doc";

function Doc() {

  return (<div>
    <Routes>
      <Route path="" element= {<ListDocs/>}></Route>
      <Route path="/add" element= {<AddDocs/>}></Route>
      <Route path="/:id" element= {<UpdateDocs/>}></Route>
    </Routes>

   
  </div>);
  
}

export default Doc;
