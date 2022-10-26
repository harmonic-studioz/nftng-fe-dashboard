import React from "react";
import styled from "styled-components";
import logo from "../img/logo.png";

const Nav = () => {
  return (
    <NavStyled>
      <Container>
        <Wrapper>
          <img src={logo} alt="logo" />
        </Wrapper>
      </Container>
    </NavStyled>
  );
};

export default Nav;

const NavStyled = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: fit-content;
  background-color: black;
  font-family: var(--Branding-sf-medium);
  z-index: 100;
  @media screen and (max-width: 900px) {
    height: ${(p) => (p.toggle ? "100vh" : "fit-content")};
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  .active {
    padding: 50px 70px 30px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  width: 100%;
  background-color: black;
  transition: padding 0.3s ease-in-out;
  img {
    width: 50px;
  }

  .nav-btn {
    position: relative;
    z-index: 10;
  }

  .nav-footer {
    margin-bottom: 34px;
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 12px;
    font-family: var(--Branding-sf-light);
    gap: 14px;
  }

  @media screen and (min-width: 900px) {
    padding: 18px 5vw;
    img {
      width: 96px;
    }
    .nav-btn {
      display: none;
    }
    .nav-footer {
      display: none;
    }
  }
`;
