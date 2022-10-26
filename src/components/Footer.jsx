import React from "react";
import styled from "styled-components";
import instagram from "../img/svg/instagram.svg";
import twitter from "../img/svg/twitter.svg";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <div className="social">
          <span>GET IN TOUCH</span>
          <div className="icon">
            <a
              href={`https://twitter.com/nft__ng?s=21&t=tX-uIhL0QEc0d4LWapKHqw`}
              target="_blank"
              rel="noreferrer"
            >
              <img src={twitter} alt="" />
            </a>

            <a
              href="https://www.instagram.com/nft__ng/?igshid=YmMyMTA2M2Y%3D"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagram} alt="" />
            </a>
          </div>
        </div>
        <p>Copyright © 2022 NFT Nigeria</p>
        <p>Powered by NFTNG</p>
      </Wrapper>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  font-family: var(--Branding-sf-medium);
  font-size: 16px;
  width: 100%;
  @media screen and (max-width: 900px) {
    padding: 0 20px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  gap: 160px;
  p,
  span {
    font-size: 18px;
  }
  .social {
    display: flex;
    align-items: center;
    gap: 8px;
    span {
      font-family: var(--Branding-sf-bold);
    }
  }
  .icon {
    display: flex;
    align-items: center;
    gap: 4px;
    a {
      width: 24px;
      height: 24px;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  @media screen and (max-width: 900px) {
    p,
    span {
      font-size: 14px;
    }
    flex-direction: column;
    align-items: center;
    border-radius: 14px;
    padding: 30px 0;
    width: 100%;
    background-color: black;
    gap: 30px;
  }
`;
