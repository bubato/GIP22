import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Input from "./Input";
import { useNavigate } from "react-router-dom";
import { createUser, updateUser } from "../../apis/user";
function UserInput({ type, user, id }) {
  const [fullName, setFullName] = useState(user?.fullName || "");
  const [code, setCode] = useState(user?.code || "");
  const [posision, setPosision] = useState(user?.posision || "");
  const [email, setEmail] = useState(user?.email || "");
  const [telephone, setTelephone] = useState(user?.telephone || "");
  const [gender, setGender] = useState(user?.gender || "Nam");
  const [address, setAddress] = useState(user?.address || "");

  const navigate = useNavigate();
  const arrSex = [
    { id: 1, value: "Nam" },
    { id: 2, value: "Nữ" },
  ];

  const handeSubmit = async (e) => {
    e.preventDefault();
    const user = {
      fullName,
      code,
      posision,
      email,
      telephone,
      gender,
      address,
    };
    if (type === "new") {
      await createUser(user);
      navigate("/users");
    }
    if (type === "detail") {
      await updateUser(user, id);
      navigate("/users");
    }
  };

  useEffect(() => {
    setFullName(user?.fullName);
    setCode(user?.code);
    setPosision(user?.posision);
    setEmail(user?.email);
    setTelephone(user?.telephone);
    setGender(user?.gender || "Nam");
    setAddress(user?.address);
  }, [user]);

  return (
    <Wrapper>
      <h1>{type === "new" ? "Add new user" : "Detail user"}</h1>
      <form action="">
        <Input label="Name" input={fullName} setInput={setFullName} />
        <Input label="Code" input={code} setInput={setCode} />
        <Input label="Posision" input={posision} setInput={setPosision} />
        <Input
          label="Email"
          input={email}
          setInput={setEmail}
          typeInput="email"
        />
        <Input label="Telephone" input={telephone} setInput={setTelephone} />
        <Input label="Address" input={address} setInput={setAddress} />

        <div>
          <label htmlFor="" className="label_info">
            Gender :
          </label>
          <select
            name=""
            id=""
            className="input_info"
            onChange={(e) => setGender(e.target.value)}
          >
            {arrSex.map((item) => {
              return (
                <option
                  value={item.value}
                  key={item.id}
                  selected={gender === item.value ? true : ""}
                >
                  {item.value}
                </option>
              );
            })}
          </select>
        </div>
        <button className="btn_add" onClick={handeSubmit}>
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
