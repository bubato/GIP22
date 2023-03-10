import React, { useState } from 'react'
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { AiOutlineDiff } from 'react-icons/ai';
import { create } from '../../apis/position';
import { errorAlert, successAlert } from '../../utils/alert';
import { notification, positionTranslation, validate } from '../../translation/vn';
const CreatePosition = () => {
    const navigate = useNavigate();
    const leverPosition = [
        { id: 1, name: 1 },
        { id: 2, name: 2 },
        { id: 3, name: 3 },
        { id: 4, name: 4 },
        { id: 5, name: 5 }
    ]
    const [level, setLevel] = useState(1);
    const [name, setName] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (name === "") {
            document.getElementById('warning').innerHTML = validate.requiredInput;
        } else if (name.length < 5) {
            document.getElementById('warning').innerHTML = validate.minInput;
        } else {
            try {
                const data = ({ name, level })
                await create(data)
                successAlert(notification.addPositionSuccess)
                navigate("/position");
            } catch (error) {
                errorAlert(notification.addPositionError)
            }
        }
    }
    return (
        <Wrapper>
            <div className="container">
                <form>
                    <label>{positionTranslation.name}</label>
                    <br />
                    <input type="text" className="input_name" minLength={5} required onChange={(e) => setName(e.target.value)} />
                    <p id='warning'></p>
                    <br />
                    <label>{positionTranslation.level}</label>
                    <br />
                    <select className="select_lever" onChange={(e) => setLevel(e.target.value)}>
                        <option value={''} disabled>{positionTranslation.choseLevel}</option>
                        {leverPosition.map((item) => {
                            return (
                                <option key={item.id} value={item.name} >{item.name}</option>
                            )
                        })}
                    </select>
                    <br />
                    <button className="btn_update" onClick={handleSubmit}> <AiOutlineDiff /> {positionTranslation.create}</button>
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
p{
    color:red;
    margin-left:1rem;
}
`
export default CreatePosition