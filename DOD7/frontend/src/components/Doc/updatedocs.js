import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import {read, update} from '../../apis/doc'


function UpdateDocs() {

const navigate = useNavigate()

    const [name, setName] = useState("");
    const [link, setLink] = useState("");
    const [owner, setOwner] = useState("");
    const [thumbnailLink, setThumbnailLink] = useState("");
    const [type, setType] = useState("");


    const {id} = useParams()
    const getDoc =async() =>{
        const res = await read(id);
        setName(res?.data?.name);
        setLink(res?.data?.link);
        setOwner(res?.data?.owner);
        setThumbnailLink(res?.data?.thumbnailLink);
        setType(res?.data?.type)

    }
    useEffect(() =>{
        getDoc()
    },[id])

    const handleSubmit = async(e) =>{
        e.preventDefault();
        const data = {
            _id:id,
            name,
            link,
            owner,
            thumbnailLink,
            type
        }
        await update(data);
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
                    <label className='label_info'>Link</label>
                    <br/>
                    <input className='input_info'  value={link}  onChange={(e) => setLink(e.target.value)}/>
                    <br/>
                    <label className='label_info'>Owner</label>
                    <br/>
                    <input className='input_info'  value={owner}  onChange={(e) => setOwner(e.target.value)}/>
                    <br/>
                    <label className='label_info'>ThumbnailLink</label>
                    <br/>
                    <input className='input_info'  value={thumbnailLink}  onChange={(e) => setThumbnailLink(e.target.value)}/>
                    <br/>
                    <label className='label_info'>Type</label>
                    <br/>
                    <input type='number' className='input_info'  value={type}  onChange={(e) => setType(e.target.value)}/>
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