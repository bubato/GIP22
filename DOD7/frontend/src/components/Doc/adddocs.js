import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { create } from '../../apis/doc';
import {getListUser} from '../../apis/user';
import styled from 'styled-components';

function Adddocs() {
    const navigate = useNavigate()
    const [doc, setDoc] = useState({name:'',link:'', owner:'' ,thumbnailLink:'' ,type:'' });
    const [listUser, setListUser] = useState([]);
    const handleSubmit = async(e)=>{       
        e.preventDefault();
        await create(doc)
        navigate('/docs')
    }
    useEffect(() => {
        async function fetchData() {
          const res = await getListUser();
          setListUser(res?.data);
        }
        fetchData();
      }, []);
    return (
      <Wrapper>
        <div className="container">
          <form>
            <label className="label_info">Name :</label>
            <input
              className="input_info"
              onChange={(e) => setDoc({ ...doc, name: e.target.value })}
            />
            <br />
            <label className="label_info">Link :</label>
            <input
              className="input_info"
              onChange={(e) => setDoc({ ...doc, link: e.target.value })}
            />
            <br />
            <div>
              <label htmlFor="" className="label_info">Owner :</label>
              <select
                name=""
                id=""
                className="input_info"
                onChange={(e) => setDoc({ ...doc, owner: e.target.value })}
              >
                {listUser?.map((item) => {
                  console.log(item);
                  return (
                    <option value={item?._id} key={item?._id}>
                      {item?.fullName}
                    </option>
                  );
                })}
              </select>
            </div>
            <label className="label_info">Thumbnail Link :</label>
            <input
              className="input_info"
              onChange={(e) =>
                setDoc({ ...doc, thumbnailLink: e.target.value })
              }
            />
            <br />
            <label className="label_info">Type :</label>
            <input
              type="number"
              className="input_info"
              onChange={(e) => setDoc({ ...doc, type: e.target.value })}
            />
            <br />
            <button className="btn_add" onClick={handleSubmit}>
              {" "}
              Create
            </button>
          </form>
        </div>
      </Wrapper>
    );
}

const Wrapper = styled.div`
.container{
  margin: 50px;
}
.label_info{
  display:inline-block;
  margin-top: 15px;
}
.btn_add{
  margin: 25px auto auto 240px;
}

`

export default Adddocs;