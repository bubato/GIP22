import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { read, update } from "../../apis/doc";
import { getListUser } from "../../apis/user";
import {successAlert, errorAlert} from '../../utils/alert'
import 'react-toastify/dist/ReactToastify.css';
function UpdateDoc() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [owner, setOwner] = useState("");
  const [thumbnailLink, setThumbnailLink] = useState("");
  const [type, setType] = useState("");
  const [listUser, setListUser] = useState([]);

  const { id } = useParams();
  const getDoc = async () => {
    const res = await read(id);
    setName(res?.data?.name);
    setLink(res?.data?.link);
    setOwner(res?.data?.owner);
    setThumbnailLink(res?.data?.thumbnailLink);
    setType(res?.data?.type);
  };
  useEffect(() => {
    getDoc();
  }, [id]);

  useEffect(() => {
    async function fetchData() {
      const res = await getListUser();
      setListUser(res?.data);
    }
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = {
        _id: id,
        name,
        link,
        owner,
        thumbnailLink,
        type,
      };
      await update(data);
      successAlert('Sửa thành công!')
      navigate("/docs");
    } catch (error) {
      errorAlert('Sửa không thành công!')
    }
  };

  return (
    <Wrapper>
      <div className="container">
        <form>
          <label className="label_info">Name :</label>
          <input
            className="input_info"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label className="label_info">Link :</label>
          <input
            className="input_info"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <br />
          <div>
            <label htmlFor="" className="label_info">
              Owner :
            </label>
            <select
              name=""
              id=""
              className="input_info"
              onChange={(e) => setOwner(e.target.value)}
            >
              {listUser?.map((item,index) => {
                console.log(item);
                return (
                  <option value={item?._id} key={item?._id}>
                    {item?.fullName}
                  </option>
                );
              })}
            </select>
          </div>
          <br />
          <label className="label_info">ThumbnailLink :</label>
          <input
            className="input_info"
            value={thumbnailLink}
            onChange={(e) => setThumbnailLink(e.target.value)}
          />
          <br />
          <label className="label_info">Type :</label>
          <input
            type="number"
            className="input_info"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
          <br />
          <button className="btn_add" onClick={handleSubmit}>
            {" "}
            Update
          </button>
        </form>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin: 50px 0 0 100px;

  button {
    margin: 0 240px;
  }
  .label_info {
    display:inline-block;
    padding: 10px;
  }
  input {
    margin-bottom: 10px;
  }
`;
export default UpdateDoc;
