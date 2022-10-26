import React from "react";
import styled from "styled-components";

const Successful = ({ setToggle, setSuccess }) => {
  const handller = () => {
    setToggle(false);
    setSuccess(false);
  };
  return (
    <Container>
      <Wrapper>
        <p className="calculator">SUCCESSFUL</p>
        <button onClick={handller}>Yes, take me back</button>
      </Wrapper>
    </Container>
  );
};

export default Successful;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Wrapper = styled.div`
  width: fit-content;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .calculator {
    font-size: 30px;
    color: white;
    margin-bottom: 18=px;
  }
  .img-wrap {
    img {
      width: 60px;
      height: 60px;
    }
  }
  .desc {
    color: white;
    font-size: 22px;
    font-family: var(--Branding-sf-bold);
    margin: 12px 0 18px;
  }
  button {
    width: 330px;
    padding: 14px;
    border-radius: 6px;
    font-size: 14px;
  }

  @media screen and (max-width: 900px) {
    .calculator {
      font-size: 20px;
    }
    .img-wrap {
      img {
        width: 45px;
        height: 45px;
      }
    }
    .desc {
      font-size: 16px;
    }
    button {
      border-radius: 0;
      width: 260px;
    }
  }
`;
