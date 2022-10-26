import React, { useState } from "react";
import styled from "styled-components";
import AddProduct from "./AddProduct";
import { useNavigate } from "react-router-dom";
import arrow from "../img/svg/arrow-left.svg";
import add from "../img/svg/gallery-add.svg";

const ProductPass = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  return (
    <Container>
      <div
        className="back"
        onClick={() => (toggle ? setToggle(false) : navigate(-1))}
      >
        <img src={arrow} alt="" />
        <p>Back</p>
      </div>
      <Wrapper>
        <div className="nav">
          {toggle ? (
            <h1>
              Add Products/ <span>merchandise</span>
            </h1>
          ) : (
            <h1>
              Products/ <span>NFT Pass</span>
            </h1>
          )}
        </div>
        {toggle ? (
          <AddProduct setToggle={setToggle} />
        ) : (
          <EmptyList>
            <AddCard onClick={() => setToggle(true)}>
              <img src={add} alt="" />
              <p>Add Product</p>
            </AddCard>
          </EmptyList>
        )}
      </Wrapper>
    </Container>
  );
};

export default ProductPass;

const Container = styled.div`
  padding: 10vh 5vw 8vh;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  flex: 1;
  background-color: #252525;

  .back {
    position: absolute;
    cursor: pointer;
    top: 18vh;
    left: 5vw;
    display: flex;
    align-items: center;
    gap: 5px;
    color: var(--primary-color);
    font-size: 16px;
    font-family: var(--Branding-sf-medium);
  }
`;

const EmptyList = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.31);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex: 1;
`;
const AddCard = styled.div`
  width: 14vw;
  height: 16vw;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.06);
  border: 1px solid var(--primary-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  img {
    width: 46px;
    height: 46px;
  }
  p {
    color: rgba(255, 255, 255, 0.41);
    font-family: var(--Branding-sf-light);
    font-size: 16px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 70vh;
  padding: 14vh 15vw 0;

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }
  h1 {
    font-size: 24px;
    text-transform: uppercase;
    width: 100%;
    span {
      font-size: 20px;
      text-transform: lowercase;
      font-family: var(--Branding-sf-light);
      color: var(--primary-color);
    }
  }
`;
