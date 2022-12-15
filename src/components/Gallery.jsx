import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import arrow from "../img/svg/arrow-left.svg";
import PhotoGallery from "./PhotoGallery";

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
    top: 100px;
    left: 5vw;
    display: flex;
    align-items: center;
    gap: 5px;
    color: var(--primary-color);
    font-size: 16px;
    font-family: var(--Branding-sf-medium);
  }
`;
const Gallery = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="back" onClick={() => navigate(-1)}>
        <img src={arrow} alt="" />
        <p>Back</p>
      </div>
      <PhotoGallery />
    </Container>
  );
};

export default Gallery;
