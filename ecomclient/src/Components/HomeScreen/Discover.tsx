import React from "react";
import styled from "styled-components";
import DiscoverCard from "../Props/DiscoverCard";
import pro from "../images/hero.png";

const Discover = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Head>
            Discover more. <span>Good things are waiting for you</span>
          </Head>
          <Cards>
            <DiscoverCard
              pic={pro}
              color="#f6f3d3"
              title="Explore new arrivals"
              content="Shop the latest from top brands"
            />
            <DiscoverCard
              pic={pro}
              color="#d6eaf4fe"
              title="Digital gift cards"
              content="Give the gift of choice"
            />
            <DiscoverCard
              pic={pro}
              color="#e4c9f6fd"
              title="Digital gift cards"
              content="Give the gift of choice"
            />
          </Cards>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Discover;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Head = styled.div`
  font-size: 33px;
  font-weight: 600;
  margin-bottom: 40px;
  margin-top: 40px;
  margin-left: 10px;
  span {
    color: grey;
  }
`;
const Cards = styled.div`
  display: flex;
`;
const Wrapper = styled.div`
  width: calc(100vw - 100px);
  display: flex;
  flex-direction: column;
`;
