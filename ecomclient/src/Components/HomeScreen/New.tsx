import React from "react";
import styled from "styled-components";
import pro from "../images/hero.png";
import NewProps from "../Props/NewProps";
import NewProps2 from "../Props/NewProps2";

const New = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Head>
            New Arrivals. <span>REY backpacks and bags</span>
          </Head>
          <Cards>
            <NewProps2
              title=""
              picture={pro}
              name="Leather Gloves"
              variation="Perfect mint green"
              price={44}
              rating={4.4}
              review={44}
              icon=""
            />
            <NewProps
              title=""
              picture={pro}
              name="Manhattan Toy WRT"
              variation="New design 2023"
              price={555}
              rating={3.9}
              review={555}
              icon=""
            />
            <NewProps2
              title="limited edition"
              picture={pro}
              name="Jump Rope Kids"
              variation="Classic green"
              price={666}
              rating={2.9}
              review={666}
              icon="#"
            />
            <NewProps
              title="50% Discount"
              picture={pro}
              name="Wool Cashmere Jacket"
              variation="Matte Black"
              price={7777}
              rating={4.7}
              review={7777}
              icon="@"
            />
          </Cards>
        </Wrapper>
      </Container>
    </div>
  );
};

export default New;

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
  flex-wrap: wrap;
`;
const Wrapper = styled.div`
  width: calc(100vw - 100px);
  display: flex;
  flex-direction: column;
`;
