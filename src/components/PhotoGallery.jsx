import React from "react";
import styled from "styled-components";
import { gallery } from "../data/photos";
import add from "../img/svg/gallery-add.svg";

const Container = styled.div`
  padding-top: 80px;
`;

const Wrapper = styled.div`
  padding: 0 5vw;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  .item {
    width: 100%;
    height: 45vh;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    button {
      position: absolute;
      top: 10px;
      right: 10px;
      border: 1px solid var(--primary-color);
      background-color: #0000003f;
      color: #ffffffcf;
      font-family: var(--Branding-sf-bold);
    }
  }

  .add-item {
    border: 1px solid var(--primary-color);
    width: 100%;
    height: 100%;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    img {
      width: 80px;
    }
    p {
      font-family: var(--Branding-sf-meduim);
      font-size: 20px;
      opacity: 0.8;
    }
  }
`;

const PhotoGallery = () => {
  return (
    <Container>
      <Wrapper>
        <Grid>
          <div className="add-item">
            <img src={add} alt="" />
            <p>Add Photo</p>
          </div>
          {gallery.map((i) => (
            <div className="item" key={i.id}>
              <button>Delete</button>
              <img src={i.img} alt="" />
            </div>
          ))}
        </Grid>
      </Wrapper>
    </Container>
  );
};

export default PhotoGallery;
