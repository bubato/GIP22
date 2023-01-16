import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineDiff } from 'react-icons/ai';
const UpdatePosition = ({ positionList, setPositionList }) => {
  const navigate = useNavigate();
  const leverPosition = [
    { id: 1, name: 'Intern' },
    { id: 2, name: 'Fresher' },
    { id: 3, name: 'Junior' },
    { id: 4, name: 'Mid-level' },
    { id: 5, name: 'Senior' }
  ]

  const { id } = useParams();
  const [data, setData] = useState(null);
  const getPosition = () => {
    const position = positionList.find((position) => position.id === id);
    if (position) {
      setData(position);
    }
  };
  useEffect(() => {
    getPosition();
  }, [id, getPosition]);

  const [lever, setLever] = useState('');
  const [position, setPosition] = useState('');


  const handleSubmit = () => {
    const positionUpdate = positionList.filter((position) => position.id !== id)
    setPositionList([...positionUpdate, { id, position, lever }])
    navigate("/positions");
  }
  return (
    <Wrapper>
      <div className="container">
        <form>
          <label>Position_name</label>
          <br />
          <input type="text" defaultValue={data?.position} className="input_name" minLength={5} required onChange={(e) => setPosition(e.target.value)} />
          <br />
          <label>Lever Position</label>
          <br />
          <select className="select_lever" onChange={(e) => setLever(e.target.value)} required>
            <option value={''} disabled>Choose lever</option>
            {leverPosition.map((lv) => {
              return (
                <option key={lv?.id} value={lv?.name} selected={lv?.name === data?.lever ? true : ''}>{lv.name}</option>
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