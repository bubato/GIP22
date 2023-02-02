import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineDiff } from 'react-icons/ai';
import { readPosition, updatePosition } from '../../apis/position';
import Loading from '../Loading';
import { errorAlert, successAlert } from '../../utils/alert';
import { notification, positionTranslation, validate } from '../../translation/vn';
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
      const po = await readPosition(id)
      if (po) {
        setDataPosition(po.data)
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
      document.getElementById('warning').innerHTML = validate.requiredInput;
    } else if (name.length < 5) {
      document.getElementById('warning').innerHTML = validate.minInput;
    } else {
      try {
        await updatePosition(id, { name, level });
        successAlert(notification.updatePositionSuccess)
        navigate("/position");
      } catch (error) {
        errorAlert(notification.updatePositionError)
      }
    }
  }
  return (
    <Wrapper>
      <div className="container">
        <form>
          <label>{positionTranslation.name}</label>
          <br />
          <input type="text" value={name} className="input_name" minLength={5} required onChange={(e) => setName(e.target.value)} />
          <p id='warning'></p>
          <br />
          <label>{positionTranslation.level}</label>
          <br />
          <select className="select_lever" onChange={(e) => setLevel(e.target.value)} required>
            <option value={''} disabled>{positionTranslation.choseLevel}</option>
            {leverPosition.map((lv) => {
              return (
                <option key={lv?.id} value={lv?.name} selected={lv?.name === level ? true : false}>{lv.name}</option>
              )
            })}
          </select>
          <br />
          <button className="btn" onClick={handleSubmit}> <AiOutlineDiff /> {positionTranslation.update}</button>
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