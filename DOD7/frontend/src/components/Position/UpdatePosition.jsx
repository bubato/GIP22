import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import { Await, useNavigate, useParams } from "react-router-dom";
import { AiOutlineDiff } from 'react-icons/ai';
import { readPosition, updatePosition } from '../../apis/position';
import Loading from '../Loading';
const UpdatePosition = ({ positionList, setPositionList }) => {
  const navigate = useNavigate();

  const [level, setLevel] = useState(1);
  const [name, setName] = useState("");
  const [dataPosition, setDataPosition] = useState([]);
  const [loading, setLoading] = useState(false)

  const leverPosition = [
    { id: 1, name: 1 },
    { id: 2, name: 2 },
    { id: 3, name: 3 },
    { id: 4, name: 4 },
    { id: 5, name: 5 }
  ]

  const { id } = useParams();
  useEffect(() => {
    const getPosition = async () => {
      setLoading(true)
      const position = await readPosition(id)
      if (position) {
        setDataPosition(position.data)
      }
      setLoading(false)
    };
    getPosition()
  }, [id]);

  useEffect(() => {
    if (dataPosition) {
      setName(dataPosition.name)
      setLevel(dataPosition.level)
    }
  }, [dataPosition]);
  if (loading === true) {
    return <Loading />
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === "") {
      document.getElementById('warning').innerHTML = 'Tên không được để trống';
    } else if (name.length < 5) {
      document.getElementById('warning').innerHTML = 'Tên phải dài hơn 5 ký tự';
    } else {
      await updatePosition(id, { name, level });
      navigate("/position");
    }
  }
  return (
    <Wrapper>
      <div className="container">
        <form>
          <label>Position_name</label>
          <br />
          <input type="text" value={name} className="input_name" minLength={5} required onChange={(e) => setName(e.target.value)} />
          <p id='warning'></p>
          <br />
          <label>Lever Position</label>
          <br />
          <select className="select_lever" onChange={(e) => setLevel(e.target.value)} required>
            <option value={''} disabled>Choose lever</option>
            {leverPosition.map((lv) => {
              return (
                <option key={lv?.id} value={lv?.name} selected={lv?.name == level ? true : false}>{lv.name}</option>
              )
            })}
          </select>
          <br />
          <button className="btn" onClick={handleSubmit}> <AiOutlineDiff /> Update</button>
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
.btn{
  margin:1rem;
  border: none;
  color: white;
  background-color: gray;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
}
p{
  color:red;
  margin-left:1rem;
}
`

export default UpdatePosition