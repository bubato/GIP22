import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Input from "./Input";
import { useNavigate } from "react-router-dom";

function UserInput({ type, user, id, userList, setUserList }) {
  const [name, setName] = useState(user?.name || "");
  const [sex, setSex] = useState(user?.sex || "");
  const [email, setEmail] = useState(user?.email || "");
  const [position, setPosition] = useState(user?.position || "");

  const navigate = useNavigate();

  const handeSubmit = (e) => {
    e.preventDefault();
    const user = { name, sex, email, position, id: new Date().toISOString() };
    if (type === "new") {
      setUserList([...userList, user]);
      navigate("/users");
    }
    if (type === "detail") {
      const newData = userList?.filter((item) => {
        return item?.id !== id;
      });
      newData.push(user);
      setUserList(newData);
      navigate("/users");
    }
  };

  useEffect(() => {
    setName(user?.name);
    setSex(user?.sex);
    setEmail(user?.email);
    setPosition(user?.position);
  }, [user?.email, user?.name, user?.position, user?.sex]);

  return (
    <Wrapper>
      <h1>{type === "new" ? "Add new user" : "Detail user"}</h1>
      <form action="">
        <Input label="Name" input={name} setInput={setName} />
        <Input label="Sex" input={sex} setInput={setSex} />
        <Input label="Email" input={email} setInput={setEmail} />
        <Input label="Postion" input={position} setInput={setPosition} />
      </form>
      <div className="btn_add" onClick={handeSubmit}>
        {type === "new" ? "Create new user" : "Update user"}
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding: 2rem;
  h1 {
    margin-bottom: 1rem;
  }
`;
export default UserInput;
