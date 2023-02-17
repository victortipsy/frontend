import React from "react";
import styled from "styled-components";
import pic from "../images/logovic.png";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Container>
        <Div1>
          <img src={pic} />
        </Div1>
        <Div2>
          <div>Men</div>
          <div>Women</div>
          <div>Beauty</div>
          <div>Sport</div>
          <div>Templates</div>
          <div>Explore</div>
        </Div2>
        <Div3>
          <div>
            <CiSearch />
          </div>
          <div>
            <CiUser />
          </div>
          <div
            onClick={() => {
              navigate("/cart");
            }}>
            <CiShoppingCart />
          </div>
        </Div3>
        <Div4>
          <button>Get Started</button>
        </Div4>
      </Container>
    </div>
  );
};

//home, product, cart

export default Header;

const Container = styled.div`
  width: 100vw;
  height: 70px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  background-color: white;
  z-index: 2;
`;
const Div1 = styled.div`
  height: 110px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
const Div4 = styled.div`
  button {
    height: 35px;
    padding: 10px;
    border: none;
    outline: none;
    border-radius: 4px;
    background-color: #2ca7ea;
    color: white;
    transition: all 350ms;
    :hover {
      background-color: #2897d2;
    }
  }
`;
const Div2 = styled.div`
  display: flex;
  font-size: 14px;
  font-weight: 600;
  color: #5c5b5b;
  div {
    margin-left: 13px;
    margin-right: 13px;
    padding: 12px;
    border-radius: 20px;
    cursor: pointer;
    transition: all 350ms;
    :hover {
      background-color: #f4f4f4;
    }
  }
`;
const Div3 = styled.div`
  display: flex;
  color: #5c5b5b;
  font-size: 27px;
  div {
    margin-left: 9px;
    margin-right: 9px;
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
    transition: all 350ms;
    display: flex;
    justify-content: center;
    align-items: center;
    :hover {
      background-color: #f4f4f4;
    }
  }
`;
