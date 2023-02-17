import React from "react";
import styled from "styled-components";

interface iProps {
  pic: any;
  color: string;
  title: string;
  content: string;
}

const DiscoverCard: React.FC<iProps> = ({ pic, color, title, content }) => {
  return (
    <div>
      <Container color={color}>
        <Wrapper>
          <Text>
            <Title> {title} </Title>
            <Content> {content} </Content>
            <Option>
              <Show>Show me all</Show>
            </Option>
          </Text>
          <Pic bac={color}>
            <img src={pic} />
          </Pic>
        </Wrapper>
      </Container>
    </div>
  );
};

export default DiscoverCard;

const Container = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
  height: 200px;
  width: 400px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 87%;
  height: 83%;
  display: flex;
`;
const Text = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  font-size: 14px;
  margin-bottom: 20px;
`;
const Content = styled.div`
  font-weight: bold;
  font-size: 21px;
`;
const Option = styled.div`
  margin-top: 30px;
`;
const Pic = styled.div<{ bac: string }>`
  width: 40%;
  background-color: ${(props) => props.bac};
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;
const Show = styled.div`
  padding: 14px;
  border-radius: 25px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85px;
  font-size: 12px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
`;
