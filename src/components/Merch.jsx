import React from "react";
import styled from "styled-components";

const Merch = ({ data, onAdd, checkAvailability, admin, handleSelect }) => {
  return (
    <Container image={data.images.length ? data.images[0].url : null}>
      <Wrapper>
        <div className="content">
          <div className="desc">
            <p className="name">{data.name}</p>
            <p className="price">${data.price}</p>
          </div>
          <button
            onClick={() =>
              admin
                ? handleSelect(
                    data,
                    data.images.length ? data.images[0].url : null
                  )
                : onAdd(data)
            }
          >
            {admin ? "Edit" : "Add to Cart"}
          </button>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Merch;

const Container = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.8) 100%
    ),
    ${(p) => `url("${p.image}")`};
  height: 45vh;
  border: 1px solid var(--primary-color);
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 900px) {
    height: 380px;
  }
`;

const Wrapper = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  .content {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
  .desc {
    font-family: var(--roboto);
    line-height: 25px;
    .name {
      font-size: 20px;
      font-weight: 500;
    }
    .price {
      font-size: 12px;
      color: var(--primary-color);
      font-weight: 700;
    }
  }
  button {
    font-size: 12px;
    font-family: var(--roboto);
    font-weight: 700;
    padding: 10px 14px;
  }
  @media screen and (max-width: 900px) {
    height: 380px;
  }
`;
