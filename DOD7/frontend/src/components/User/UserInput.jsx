import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Input from "./Input";
import { useNavigate } from "react-router-dom";
import { successAlert, errorAlert } from "../../utils/alert";
import { notification } from "../../translation/vn";

import { createUser, updateUser } from "../../apis/user";
import { list } from "../../apis/position";
import { userTrans } from "../../translation/vn";
function UserInput({ type, user }) {
  const { register, handleSubmit, reset } = useForm();

  const [listPosition, setListPosition] = useState([]);

  const navigate = useNavigate();
  const arrSex = [
    { id: 1, value: userTrans.male },
    { id: 2, value: userTrans.female },
  ];

  const onSubmit = async (data) => {
    if (type === "new") {
      try {
        await createUser(data);
        navigate("/users");
        successAlert(notification.addUserSuccess);
      } catch (error) {
        errorAlert(notification.addUserError);
      }
    }
    if (type === "detail") {
      try {
        await updateUser(data, data?._id);
        navigate("/users");
        successAlert(notification.updateUserSuccess);
      } catch (error) {
        errorAlert(notification.updateUserError);
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
      <h1>{type === "new" ? userTrans.titleAdd : userTrans.titleUpdate}</h1>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <Input
          label={userTrans.fullName}
          value="fullName"
          register={register}
        />
        <Input label={userTrans.code} value="code" register={register} />
        <div>
          <label htmlFor="" className="label_info">
            {userTrans.position}
          </label>
          <select
            name=""
            id=""
            className="input_info"
            {...register("position", { required: true })}
            required
          >
            {type === "new" && (
              <option value="" selected={true}>
                {userTrans.chosePosition}
              </option>
            )}
            {listPosition?.map((item) => {
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
          label={userTrans.email}
          value="email"
          register={register}
          typeInput="email"
        />
        <Input
          label={userTrans.telephone}
          value="telephone"
          register={register}
        />
        <Input label={userTrans.address} value="address" register={register} />

        <div>
          <label htmlFor="" className="label_info">
            {userTrans.gender}
          </label>
          <select
            name=""
            id=""
            className="input_info"
            {...register("gender", { required: true })}
            required
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
          {type === "new" ? userTrans.addUser : userTrans.updateUser}
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
