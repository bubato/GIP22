import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { menus } from "../utils/menu";
import logo from "../assets/logo.png";
function Navbar() {
  const [active, setActive] = useState(1);
  return (
    <Wrapper>
      <Link to="/">
        <img src={logo} alt="" className="img" />
      </Link>
      <div className="menu_list">
        {menus.map((menu) => {
          return (
            <Link
              to={menu.link}
              className={active === menu.id ? "menu_item active" : "menu_item"}
              key={menu.id}
              onClick={() => setActive(menu.id)}
            >
              <div className="menu_icon">{menu.icon}</div>
              <div className="menu_title">{menu.title}</div>
            </Link>
          );
        })}
      </div>
      <div className="flex"></div>
      <button className="btn-logout">Logout</button>
    </Wrapper>
  );
}
const Wrapper = styled.nav`
  border-right: 0.5px solid #ccc;
  position: fixed;
  height: 100vh;
  padding: 1.25rem 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15rem;
  .img {
    width: 5rem;
  }
  .menu_list {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    gap: 0.5rem;
  }
  .menu_item {
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 0.8);
    padding: 0.75rem 3rem 0.75rem 0.5rem;
    transition: all 0.25s linear;
    border-radius: 0.25rem;
    font-size: 1.15rem;
    :hover {
      color: white;
      background-color: #435ebe;
      opacity: 0.8;
    }
  }
  .active {
    color: white;
    background-color: #435ebe;
  }
  .menu_icon {
    width: 2rem;
    transform: translateY(0.15rem);
  }
  .flex {
    flex: 1;
  }
  .btn-logout {
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    border-radius: 0.5rem;
    background-color: #435ebe;
    color: white;
    cursor: pointer;
    transition: all 0.25s linear;
    :hover {
      transform: translateY(-0.25rem);
    }
  }
`;
export default Navbar;
