import React from "react";
import styled from "styled-components";
import pic from "../images/hero.png";
import { CiSearch } from "react-icons/ci";

const Hero = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Texts>
            <div>
              <SmallTexts>In this season, find the best 🔥</SmallTexts>
              <BigTexts>Exclusive collection for everyone</BigTexts>
              <Search>
                <div>Explore now</div>
                <Icon>
                  <CiSearch />
                </Icon>
              </Search>
            </div>
          </Texts>
          <Image>
            <img src={pic} />
          </Image>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Hero;

const Container = styled.div`
  width: 100vw;
  background-color: #d0ebfa;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Texts = styled.div`
  width: 55%;
  display: flex;
  align-items: center;
  z-index: 1;
`;
const Image = styled.div`
  width: 45%;
  img {
    height: 100%;
    width: 520px;
    object-fit: cover;
    object-position: center;
  }
`;
const Wrapper = styled.div`
  width: calc(100vw - 100px);
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
const SmallTexts = styled.div`
  font-size: 19px;
  font-weight: 500;
  margin-bottom: 20px;
  color: #072331;
`;
const BigTexts = styled.div`
  font-size: 60px;
  color: #072331;
  font-weight: bold;
`;
const Search = styled.div`
  width: 140px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 30px;
  padding: 10px;
  background-color: #072331;
  margin-top: 20px;
  div {
    font-size: 14px;
    margin-left: 5px;
    margin-right: 5px;
  }
`;
const Icon = styled.label`
  display: flex;
  align-items: center;
  font-size: 20px;
`;
