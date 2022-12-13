import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import hand from "../img/Waving Hand.png";
import profile from "../img/profile.png";
import gallery from "../img/svg/gallery.svg";
import plus from "../img/svg/add.svg";
import pen from "../img/svg/edit-2.svg";
import cart from "../img/svg/shopping-cart.svg";
import { useNavigate } from "react-router-dom";

const DashBoard = () => {
  const navigate = useNavigate();

  return (
    <ContainerWrapper>
      <Container>
        <Header>
          <div className="welcome">
            <div className="w-l">
              <p className="dashboard">Dashboard</p>
              <div className="profile">
                <img src={profile} alt="" />
                <p>Admin</p>
              </div>
            </div>
            <p className="w-m">
              Hello <span>Admin</span>
              <img src={hand} alt="" />
            </p>
          </div>
        </Header>
        <Wrapper>
          <Desc>
            <div className="d-wrap">
              <div
                className="label "
                onClick={() => navigate("/admin/add-products")}
              >
                <img src={plus} alt="" />
                <span>Add Products</span>
              </div>
            </div>
            <div className="d-wrap">
              <div
                className="label"
                onClick={() => navigate("/admin/edit-products")}
              >
                <img src={pen} alt="" />
                <span>Edit Products</span>
              </div>
            </div>
            <div className="d-wrap">
              <div className="label" onClick={() => navigate("/admin/orders")}>
                <img src={cart} alt="" />
                <span>Orders</span>
              </div>
            </div>
            <div className="d-wrap">
              <div className="label" onClick={() => navigate("/admin/orders")}>
                <img src={gallery} alt="" />
                <span>Gallery</span>
              </div>
            </div>
          </Desc>
        </Wrapper>
      </Container>
      <Footer />
    </ContainerWrapper>
  );
};

export default DashBoard;

const ContainerWrapper = styled.section`
  padding: 10vh 5vw 8vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  background-color: #252525;
`;

const Container = styled.div`
  padding: 30px 0 80px;
  flex: 1;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 6vh 0;
`;

const Desc = styled.div`
  background-color: rgba(0, 0, 0, 0.31);
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 8vw;
  width: 100%;
  .d-wrap {
    border: 1px solid var(--primary-color);
    width: 16vw;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.06);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 18vw;
  }
  .label {
    background-color: rgba(0, 0, 0, 0.35);
    display: flex;
    align-items: center;
    width: fit-content;
    padding: 18px;
    cursor: pointer;
    gap: 10px;
    border-radius: 10px;

    span {
      font-size: 18px;
      font-family: var(--Branding-sf-bold);
      color: var(--primary-color);
    }
    img {
      width: 40px;
    }
  }
`;

const Header = styled.div`
  .welcome {
    display: flex;
    flex-direction: column;
    gap: 25px;

    .w-l {
      display: flex;
      width: 100%;
      justify-content: space-between;
      font-family: 700;
    }
    .dashboard {
      font-family: var(--inter);
      font-family: 20px;
      font-weight: 700;
      color: var(--primary-color);
    }
    .profile {
      display: flex;
      gap: 6px;
      align-items: center;
      font-family: var(--poppins);
    }
    .w-m {
      display: flex;
      align-items: center;
      gap: 6px;
      font-family: var(--poppins);
      font-size: 15px;
      span {
        color: var(--primary-color);
      }
    }
  }
`;
