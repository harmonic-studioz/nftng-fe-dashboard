import React from "react";
import styled from "styled-components";

import Merch from "./Merch";

const MerchandiseSection = ({
  checkAvailability,
  handleAddToCart,
  admin,
  handleSelect,
  data,
}) => {
  return (
    <Container>
      <Wrap>
        <GridWrapper>
          {data.map((data) => (
            <Merch
              onAdd={handleAddToCart}
              key={data.id}
              data={data}
              checkAvailability={checkAvailability}
              admin={admin}
              handleSelect={handleSelect}
            />
          ))}
        </GridWrapper>
      </Wrap>
    </Container>
  );
};

export default MerchandiseSection;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrap = styled.div`
  width: 100%;
  height: fit-content;
  margin: 0 auto;
  background-color: #0000004f;
`;

const GridWrapper = styled.div`
  padding: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(auto);
  gap: 3vw;
  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    padding: 32px;
    gap: 16px;
  }
`;
