import React, { useState } from 'react'
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { AiOutlineDiff } from 'react-icons/ai';
const CreatePosition = ({positionList, setPositionList}) => {
    const navigate = useNavigate();
    const leverPosition = [
        {id:1, name: "Intern"},
        {id:2, name: "Fresher"},
        {id:3, name: "Junior"},
        {id:4, name: "Mid-level"},
        {id:5, name: "Senior"}
    ]
    const [lever,setLever] = useState('');
    const [position,setPosition] = useState('');
    const handleSubmit = () => {
        if(position.length > 5 && lever !== ''){
            const id = positionList.length + 1
            const data = ({id,position,lever})
            setPositionList([...positionList,data])
        }
        navigate("/positions");
    }
    return (
        <Wrapper>
            <div className="container">
                <form>
                    <label>Position_name</label>
                    <br/>
                    <input type="text" className="input_name" minLength={5} required  onChange={(e) => setPosition(e.target.value)}/>
                    <br/>
                    <label>Lever Position</label>
                    <br/>
                    <select className="select_lever" onChange={(e) => setLever(e.target.value)}>
                    <option value={''} disabled>Choose lever</option>
                        {leverPosition.map((item) => {
                            return(
                                <option key={item.id} value={item.name} >{item.name}</option>
                            )
                        })}
                    </select>
                    <br/>
                    <button className="btn_update" onClick={handleSubmit}> <AiOutlineDiff /> Create</button>
                </form>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.div`
.container{
    margin: 3rem 1rem;
}
.select_lever{
    padding: 0.5rem;
    font-size: 1rem;
    border: 2px solid #ccc;
    transition: all 0.25s linear;
    width: 10rem;
    border-radius: 0.5rem;
    margin:1rem;
}
.input_name{
    padding: 0.5rem;
    font-size: 1rem;
    border: 2px solid #ccc;
    transition: all 0.25s linear;
    width: 20rem;
    border-radius: 0.5rem;
    margin:1rem;
}
label{
    margin:1rem;
}
.btn_update{
    margin:1rem;
}
`
export default CreatePosition