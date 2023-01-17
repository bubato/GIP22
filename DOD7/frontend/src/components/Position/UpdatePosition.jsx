import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineDiff } from 'react-icons/ai';
const UpdatePosition = ({ positionList, setPositionList }) => {
  const navigate = useNavigate();

  const [lever, setLever] = useState();
  const [name, setName] = useState();
  const leverPosition = [
    { id: 1, name: 1 },
    { id: 2, name: 2 },
    { id: 3, name: 3 },
    { id: 4, name: 4 },
    { id: 5, name: 5 } 
  ]
  
  const { id } = useParams();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getPosition = () => {
    const position = positionList.find((position) => position.id === id);
    setLever(position?.lever)
    setName(position?.name)
  };
  useEffect(() => {
    getPosition();
  }, [id]);

  const handleSubmit = (e) => {  
    e.preventDefault();
    const positionUpdate = positionList.filter((position) => position.id !== id)
    setPositionList([...positionUpdate, { id, name, lever }])
    navigate("/positions");
  }
  return (
    <Wrapper>
      <div className="container">
        <form>
          <label>Position_name</label>
          <br />
          <input type="text" value={name} className="input_name" minLength={5} required onChange={(e) => setName(e.target.value)} />
          <br />
          <label>Lever Position</label>
          <br />
          <select className="select_lever" onChange={(e) => setLever(e.target.value)} required>
            <option value={''} disabled>Choose lever</option>
            {leverPosition.map((lv) => {
              return (
                <option key={lv?.id} value={lv?.name} selected={lv?.name === lever ? true : false}>{lv.name}</option>
              )
            })}
          </select>
          <br />
          <button className="btn_update" onClick={handleSubmit}> <AiOutlineDiff /> Update</button>
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

export default UpdatePosition