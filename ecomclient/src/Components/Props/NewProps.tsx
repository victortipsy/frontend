import React from "react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";

interface iProps {
  title: string;
  picture: any;
  name: string;
  variation: string;
  price: number;
  rating: number;
  review: number;
  icon: any;
}

const NewProps: React.FC<iProps> = ({
  title,
  picture,
  name,
  variation,
  price,
  rating,
  review,
  icon,
}) => {
  return (
    <div>
      <Container>
        <ImagePart>
          <Titles>
            <Title disp={title === "" ? "" : "white"}>
              <div>{icon}</div>
              <div>{title}</div>
            </Title>
            <Like>
              <CiHeart />
            </Like>
          </Titles>
          <img src={picture} />
        </ImagePart>
        <DetailPart>
          <Decorations>
            <Selectors bd="1px solid #272f3a">
              <Selector cl="#272f3a" />
            </Selectors>
            <Selectors bd="">
              <Selector cl="#33273a" />
            </Selectors>
            <Selectors bd="">
              <Selector cl="#3a272d" />
            </Selectors>
            <Selectors bd="">
              <Selector cl="#2e3a27" />
            </Selectors>
            <Selectors bd="">
              <Selector cl="#3a2827" />
            </Selectors>
          </Decorations>
          <Text>
            <Name> {name} </Name>
            <Vary> {variation} </Vary>
          </Text>
          <Info>
            <PriceBox> ${price} </PriceBox>
            <RateBox>
              {" "}
              <div>
                <Star>
                  <AiFillStar />
                </Star>{" "}
              </div>
              <div>{rating}</div>
              <Div> {`  (${review} reviews)`}</Div>
            </RateBox>
          </Info>
        </DetailPart>
      </Container>
      <br />
      <br />
    </div>
  );
};

export default NewProps;

const Container = styled.div`
  margin-left: 20px;
  margin-right: 20px;
`;
const ImagePart = styled.div`
  background-color: #e4e4ece1;
  height: 300px;
  width: 270px;
  border-radius: 25px;
  padding-top: 10px;
  position: relative;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
  }
`;
const Titles = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 15px;
  margin-right: 15px;
`;
const Title = styled.div<{ disp: string }>`
  width: 120px;
  height: 25px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 500;
  color: #4e4d4d;
  background-color: ${(props) => props.disp};
  z-index: 2;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const Like = styled.div`
  padding: 8px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  font-size: 22px;
`;
const DetailPart = styled.div``;
const Decorations = styled.div`
  margin-top: 10px;
  display: flex;
`;
const Text = styled.div`
  color: #4a4a4a;
`;
const Name = styled.div`
  font-size: 17px;
  font-weight: bold;
  margin-top: 8px;
`;
const Vary = styled.div`
  margin-top: 8px;
  font-size: 14px;
  font-weight: 500;
`;
const Info = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: center;
  justify-content: space-between;
`;
const PriceBox = styled.div`
  border: 2px solid #1ac022;
  padding: 8px;
  max-height: 9px;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1ac022;
  font-weight: bold;
  font-size: 14px;
`;
const RateBox = styled.div`
  display: flex;
  align-items: center;
  color: gray;
  font-weight: 500;
`;
const Selectors = styled.div<{ bd: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 18px;
  border-radius: 10px;
  margin-left: 5px;
  border: ${(props) => props.bd};
`;
const Selector = styled.div<{ cl: string }>`
  width: 36px;
  height: 14px;
  border-radius: 10px;
  background-color: ${(props) => props.cl};
`;
const Div = styled.div`
  margin-left: 7px;
  margin-right: 7px;
`;
const Star = styled.div`
  color: gold;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
`;
