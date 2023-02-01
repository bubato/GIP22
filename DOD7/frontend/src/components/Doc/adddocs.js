import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { create } from "../../apis/doc";
import { getListUser } from "../../apis/user";
import styled from "styled-components";
import { successAlert, errorAlert } from "../../utils/alert";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

function AddDoc() {
  const navigate = useNavigate();
  const [listUser, setListUser] = useState([]);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({});
  const onSubmit = async (data) => {
    console.log(data);
    try {
      await create(data);
      successAlert("Tạo Doc thành công!");
      navigate("/docs");
    } catch (error) {
      errorAlert("Tạo Doc không thành công!");
    }
  };
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="label_info">Name :</label>
          <input
            className="input_info"
            {...register("name", {
              required: "Vui lòng nhập!",
              minLength: {
                value: 5,
                message: "Vui lòng nhập đủ 5 ký tự!",
              },
            })}
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
            {...register("link", {
              required: "Vui lòng nhập!",
              minLength: {
                value: 5,
                message: "Vui lòng nhập đủ 5 ký tự!",
              },
            })}
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
            <select
              name=""
              id=""
              className="input_info"
              {...register("owner", { required: "Vui lòng chọn!" })}
            >
              <option value="">Chọn owner</option>
              {listUser?.map((item) => {
                return (
                  <option value={item?._id} key={item?._id}>
                    {item?.fullName}
                  </option>
                );
              })}
            </select>
            <ErrorMessage
              errors={errors}
              name="owner"
              render={({ message }) => <p className="err-mess">{message}</p>}
            />
          </div>
          <label className="label_info">Thumbnail Link :</label>
          <input
            className="input_info"
            {...register("thumbnailLink", {
              required: "Vui lòng nhập!",
              minLength: {
                value: 5,
                message: "Vui lòng nhập đủ 5 ký tự!",
              },
            })}
          />
          {/* {errors.thumbnailLink && <p>Không được trống</p>} */}
          <ErrorMessage
            errors={errors}
            name="thumbnailLink"
            render={({ message }) => <p className="err-mess">{message}</p>}
          />
          <br />
          <label className="label_info">Type :</label>
          <input
            type="number"
            defaultValue={"1"}
            className="input_info"
            {...register("type", {
              required: "Vui lòng nhập số!",
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
            Create
          </button>
        </form>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .container {
    margin: 50px;
  }
  .label_info {
    display: inline-block;
    margin-top: 15px;
  }
  .btn_add {
    margin: 25px auto auto 240px;
  }
  .err-mess {
    margin-left: 250px;
    color: #e74c3c;
    max-height: 50px;
  }
`;
export default AddDoc;
