import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { read, update } from "../../apis/doc";
import { getListUser } from "../../apis/user";
import { successAlert, errorAlert } from "../../utils/alert";
import Loading from "../Loading";
import { ErrorMessage } from "@hookform/error-message";
import { notification, validate, docTranslation } from "../../translation/vn";

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
      successAlert(notification.updateDocSuccess);
      navigate("/docs");
    } catch (error) {
      errorAlert(notification.updateDocError);
    }
  };
  if (loading) {
    return <Loading />;
  }

  return (
    <Wrapper>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="label_info">{docTranslation.name}</label>
          <input
            className="input_info"
            {...register("name", {
              required: validate.requiredInput,
              minLength: {
                value: 5,
                message: validate.minInput,
              },
            })}
          />
          <ErrorMessage
            errors={errors}
            name="name"
            render={({ message }) => <p className="err-mess">{message}</p>}
          />
          <br />
          <label className="label_info">{docTranslation.link} :</label>
          <input
            className="input_info"
            {...register("link", {
              required: validate.requiredInput,
              minLength: {
                value: 5,
                message: validate.minInput,
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
              {docTranslation.owner} :
            </label>
            <select
              className="input_info"
              {...register("owner", { required: validate.requiredInput })}
              key={id}
              // defaultValue={}
            >
              {owner ? (
                <>
                  {listUser?.map((item, index) => {
                    return (
                      <option
                        value={item?._id}
                        key={item?._id}
                        selected={
                          owner
                            ? owner === item?._id
                              ? true
                              : ""
                            : index === 0
                            ? true
                            : ""
                        }
                      >
                        {item?.fullName}
                      </option>
                    );
                  })}
                </>
              ) : (
                <>
                  <option value="">{docTranslation.chooseOwner}</option>
                  {listUser?.map((item) => {
                    return (
                      <option value={item?._id} key={item?._id}>
                        {item?.fullName}
                      </option>
                    );
                  })}
                </>
              )}
            </select>
            <ErrorMessage
              errors={errors}
              name="owner"
              render={({ message }) => <p className="err-mess">{message}</p>}
            />
          </div>
          <br />
          <label className="label_info">{docTranslation.thumbnailLink} :</label>
          <input
            className="input_info"
            {...register("thumbnailLink", {
              required: validate.requiredInput,
              minLength: {
                value: 5,
                message: validate.minInput,
              },
            })}
          />
          <ErrorMessage
            errors={errors}
            name="thumbnailLink"
            render={({ message }) => <p className="err-mess">{message}</p>}
          />
          <br />
          <label className="label_info">{docTranslation.type} :</label>
          <input
            type="number"
            className="input_info"
            {...register("type", {
              required: validate.requiredInput,
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
            {docTranslation.update}
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
