import React, { useState } from 'react'
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

function Adddocs({listDocs, setListDocs}) {
    const navigate = useNavigate()
    const [doc, setDoc] = useState({name:'',author:'', releaseDay:'' ,id:new Date().toISOString()});
    const handleSubmit = (e)=>{
        e.preventDefault();
        // const id = new Date().toISOString()

        setListDocs([...listDocs, doc])
        navigate('/docs')
        // setDoc
    }
    
    return (
        <div>
            <div className="container">
                <form>
                    <label className='label_info'>Name</label>
                    <br/>
                    <input className='input_info' onChange={(e) => setDoc({...doc, name:e.target.value})}/>
                    <br/>
                    <label className='label_info'>Author</label>
                    <br/>
                    <input className='input_info' onChange={(e) => setDoc({...doc, author:e.target.value})}/>
                    <br/>
                    <label className='label_info'>Release Day</label>
                    <br/>
                    <input className='input_info' type="date" onChange={(e) => setDoc({...doc, releaseDay:e.target.value})}/>
                    <br/>
                    <button className='btn_add' onClick={handleSubmit}> Create</button>
                </form>
            </div>
        </div>
    )
}

export default Adddocs;