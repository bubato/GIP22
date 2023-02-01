import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { read, update } from "../../apis/doc";
import { getListUser } from "../../apis/user";
import { successAlert, errorAlert } from "../../utils/alert";
import Loading from "../Loading";
import { ErrorMessage } from "@hookform/error-message";

function UpdateDoc() {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({});

  const [listUser, setListUser] = useState([]);
  const [owner, setOwner] = useState("");
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const getDoc = async () => {
    setLoading(true);
    const res = await read(id);
    reset(res?.data);
    setOwner(res?.data?.owner?._id);
    setLoading(false);
  };

  useEffect(() => {
    async function fetchData() {
      await getDoc();
      const res = await getListUser();
      setListUser(res?.data);
    }
    fetchData();
  }, []);

  const onSubmit = async (data) => {
    try {
      await update(data);
      successAlert("Sửa thành công!");
      navigate("/docs");
    } catch (error) {
      errorAlert("Sửa không thành công!");
    }
  };
  if (loading) {
    return <Loading />;
  }

  return (
    <Wrapper>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="label_info">Name :</label>
          <input
            className="input_info"
            {...register("name", { required: "Vui lòng nhập", minLength: 5 })}
          />
          <ErrorMessage
            errors={errors}
            name="name"
            render={({ message }) => <p className="err-mess">{message}</p>}
          />
          <br />
          <label className="label_info">Link :</label>
          <input
            className="input_info"
            {...register("link", { required: "Vui lòng nhập", minLength: 5 })}
          />
          <ErrorMessage
            errors={errors}
            name="link"
            render={({ message }) => <p className="err-mess">{message}</p>}
          />
          <br />
          <div>
            <label htmlFor="" className="label_info">
              Owner :
            </label>
            <select className="input_info" {...register("owner")} key={id}>
              {listUser?.map((item) => {
                return (
                  <option
                    value={item?._id}
                    key={item?._id}
                    selected={owner === item?._id ? true : false}
                  >
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
            {...register("thumbnailLink", {
              required: "Vui lòng nhập",
              minLength: 5,
            })}
          />
          <ErrorMessage
            errors={errors}
            name="thumbnailLink"
            render={({ message }) => <p className="err-mess">{message}</p>}
          />
          <br />
          <label className="label_info">Type :</label>
          <input
            type="number"
            className="input_info"
            {...register("type", {
              required: "Vui lòng nhập",
              min: 1,
              max: 99,
            })}
          />
          <ErrorMessage
            errors={errors}
            name="type"
            render={({ message }) => <p className="err-mess">{message}</p>}
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
    display: inline-block;
    padding: 10px;
  }
  input {
    margin-bottom: 10px;
  }
  .err-mess {
    margin-left: 250px;
    color: #e74c3c;
    max-height: 50px;
  }
`;
export default UpdateDoc;
