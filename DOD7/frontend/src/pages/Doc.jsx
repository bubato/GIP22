import React, {useState} from "react";
import {Routes, Route} from "react-router-dom";
import Docs, { AddDocs, UpdateDocs } from "../components/Doc";
import Listdocs from "../components/Doc/listdocs";

function Doc() {
  const [listDocs, setListDocs] = useState([
    {
    id: "1",
    name: "doraemon",
    number: 1,
    author: "author-name",
    releaseDay: "release-day",
    }
  ]);


  return (<div>
    <Routes>
      <Route path="" element= {<Listdocs listDocs={listDocs} setListDocs={setListDocs}/>}></Route>
      <Route path="/add" element= {<AddDocs listDocs={listDocs} setListDocs={setListDocs}/>}></Route>
      <Route path="/:id" element= {<UpdateDocs listDocs={listDocs} setListDocs={setListDocs}/>}></Route>
    </Routes>

   
  </div>);
  
}

export default Doc;
