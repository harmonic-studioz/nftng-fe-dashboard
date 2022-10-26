import React from "react";
import styled from "styled-components";
import { MutatingDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <Container>
      <Wrapper>
        <MutatingDots
          height="100"
          width="100"
          color="#a1d283"
          secondaryColor="#a1d283"
          radius="12.5"
          ariaLabel="mutating-dots-loading"
          visible={true}
        />
      </Wrapper>
    </Container>
  );
};

export default Loader;

const Container = styled.div`
  position: fixed;
  z-index: 50;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  -webkit-sbackdrop-filter: blur(5px);
`;

const Wrapper = styled.div``;
