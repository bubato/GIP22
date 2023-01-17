import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";


function UpdateDocs({listDocs, setListDocs}) {

const navigate = useNavigate()

    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");
    const [releaseDay, setReleaseDay] = useState("");


    const {id} = useParams()
    const getDoc =() =>{
        const data = listDocs.find(doc => doc.id === id)
        setName(data?.name);
        setAuthor(data?.author);
        setReleaseDay(data?.releaseDay);
        // setDataDoc(data)
    }
    useEffect(() =>{
        getDoc()
    },[id])

    // const [doc, setDoc] = useState({name:'',author:'', releaseDay:'' ,id:new Date().toISOString()})
    const handleSubmit = (e) =>{
        e.preventDefault();
        const docUpdate = listDocs.filter((doc) => doc.id !==id)
        docUpdate.push({name, author,releaseDay,id:new Date().toISOString()})
        setListDocs(docUpdate)
        navigate('/docs')
    }

    return (
        <Wrapper>
            <div className="container">
                <form>
                    <label className='label_info'>Name</label>
                    <br/>
                    <input className='input_info' value={name} onChange={(e) => setName(e.target.value)}/>
                    <br/>
                    <label className='label_info'>Author</label>
                    <br/>
                    <input className='input_info'  value={author}  onChange={(e) => setAuthor(e.target.value)}/>
                    <br/>
                    <label className='label_info'>Release Day</label>
                    <br/>
                    <input className='input_info' type="date" value={releaseDay?.slice(0,10)}  onChange={(e) => setReleaseDay(e.target.value)}/>
                    <br/>
                    <button className='btn_add' onClick={handleSubmit}> Update</button>
                </form>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.div`
margin: 50px 0 0 100px;

button {
    margin: 10px;
}
label {
    padding: 10px;
}
input{
    margin-bottom: 10px;
}
`
export default UpdateDocs;