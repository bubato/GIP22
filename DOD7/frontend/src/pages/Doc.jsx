import React, {useState} from "react";
import {Routes, Route} from "react-router-dom";
import Docs, { AddDocs, UpdateDocs } from "../components/Doc";
import Listdocs from "../components/Doc/Listdocs";

function Doc() {



  return (<div>
    <Routes>
      <Route path="" element= {<Listdocs/>}></Route>
      <Route path="/add" element= {<AddDocs/>}></Route>
      <Route path="/:id" element= {<UpdateDocs/>}></Route>
    </Routes>

   
  </div>);
  
}

export default Doc;
