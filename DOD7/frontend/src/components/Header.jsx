import React from "react";
import { BiLogOut } from "react-icons/bi";
import styled from "styled-components";

import img from "../assets/admin_img.jpg";
function Header() {
  return (
    <Wrapper>
      <div className="flex"></div>
      <div className="admin">
        <img src={img} alt="" className="img" />
        <BiLogOut className="icon" />
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
  background-color: #435ebe;
  padding: 0.75rem 2rem;
  display: flex;
  .flex {
    flex: 1;
  }
  .admin {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
  .img {
    width: 3rem;
    height: 3rem;
    border-radius: 3rem;
    cursor: pointer;
  }
  .icon {
    font-size: 1.5rem;
    color: white;
    cursor: pointer;
  }
`;
export default Header;
