import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Input from "./Input";
import { useNavigate } from "react-router-dom";
import { successAlert, errorAlert } from "../../utils/alert";

import { createUser, updateUser } from "../../apis/user";
import { list } from "../../apis/position";
function UserInput({ type, user, id }) {
  const [listPosition, setListPosition] = useState([]);

  const navigate = useNavigate();
  const arrSex = [
    { id: 1, value: "Nam" },
    { id: 2, value: "Nữ" },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    if (type === "new") {
      try {
        await createUser(data);
        navigate("/users");
        successAlert("Add user successfully");
      } catch (error) {
        console.log(error);
        errorAlert("Add user false");
      }
    }
    if (type === "detail") {
      try {
        await updateUser(data, data?._id);
        navigate("/users");
        successAlert("Update user successfully");
      } catch (error) {
        errorAlert("Update user false");
      }
    }
  };

  useEffect(() => {
    reset(user);
  }, [user]);

  useEffect(() => {
    async function fetchData() {
      const res = await list();
      setListPosition(res?.data);
    }
    fetchData();
  }, []);

  return (
    <Wrapper>
      <h1>{type === "new" ? "Add new user" : "Detail user"}</h1>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <Input label="Name" value="fullName" register={register} />
        <Input label="Code" value="code" register={register} />
        <div>
          <label htmlFor="" className="label_info">
            Position :
          </label>
          <select
            name=""
            id=""
            className="input_info"
            {...register("position", { required: true })}
          >
            {type === "new" && (
              <option value="" selected={true}>
                Choose position
              </option>
            )}
            {listPosition?.map((item) => {
              console.log(item);
              return (
                <option
                  value={item?._id}
                  key={item?._id}
                  selected={user?.position?._id === item?._id ? true : ""}
                >
                  {item.name}
                </option>
              );
            })}
          </select>
        </div>
        <Input
          label="Email"
          value="email"
          register={register}
          typeInput="email"
        />
        <Input label="Telephone" value="telephone" register={register} />
        <Input label="Address" value="address" register={register} />

        <div>
          <label htmlFor="" className="label_info">
            Gender :
          </label>
          <select
            name=""
            id=""
            className="input_info"
            {...register("gender", { required: true })}
          >
            {arrSex.map((item) => {
              return (
                <option value={item.value} key={item.id}>
                  {item.value}
                </option>
              );
            })}
          </select>
        </div>
        <button className="btn_add">
          {type === "new" ? "Create new user" : "Update user"}
        </button>
      </form>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding: 2rem;
  h1 {
    margin-bottom: 1rem;
  }
  label {
    display: inline-block;
    margin-bottom: 2rem;
  }
`;
export default UserInput;
