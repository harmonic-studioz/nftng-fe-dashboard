import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectViewOrder } from "../slices/viewOrderSlice";

const ViewOrder = () => {
  const viewOrder = useSelector(selectViewOrder);
  const product = viewOrder;
  const detail = viewOrder[0];
  return (
    <Container>
      <Wrapper>
        {product.map((i) => {
          const merch = i?.merchandiseItems.filter(
            (m) => m.merchandiseId === i.id
          );
          console.log(merch);
          return (
            <LeftWrapper key={i.id}>
              <img src={i.images.length ? i.images[0].url : null} alt="" />
              <LeftDetail>
                <div className="context">
                  <p className="title">Merch Name</p>
                  <p className="c-detail">{i.name}</p>
                </div>

                <div className="context size">
                  <p className="title">Size & QTY </p>
                  <div className="size-list">
                    <p>
                      {merch[0].size} <span>{merch[0].quantity}PC</span>
                    </p>
                  </div>
                </div>
              </LeftDetail>
            </LeftWrapper>
          );
        })}

        <RightWrapper>
          <div className="context">
            <p className="title">Total Amount (Delivery Inclusive)</p>
            <p className="c-detail">NGN{detail.totalAmount}</p>
          </div>
          <p className="r-header">Address Details</p>
          <p>
            {detail.firstName} {detail.lastName}
          </p>
          <p>
            {detail.town}, {detail.state} <br /> +234{detail.phoneNumber}
          </p>
          <p>{detail.email}</p>
        </RightWrapper>
      </Wrapper>
    </Container>
  );
};

export default ViewOrder;

const Container = styled.div`
  padding: 20px 30px;
`;
const Wrapper = styled.div`
  padding: 30px;
  border-radius: 14px;
  padding-right: 35%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  background-color: rgba(161, 210, 131, 0.04);
`;

const LeftWrapper = styled.div`
  padding: 25px;
  border: 1px solid var(--primary-color);
  display: flex;
  flex: 1;
  gap: 25px;
  img {
    width: 130px;
    max-height: 100%;
    object-fit: cover;
  }
`;

const LeftDetail = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 20px;
  .context {
    .title {
      font-size: 12px;
      font-family: var(--Branding-sf-light);
    }

    .c-detail {
      font-size: 18px;
      font-family: var(--Branding-sf-bold);
      color: var(--primary-color);
    }
  }
  .context:nth-child(3) {
    margin-top: 20px;
  }
  .size-list {
    display: flex;
    font-size: 10px;
    margin-top: 6px;
    font-family: var(--Branding-sf-light);
    gap: 10px;

    p {
      padding: 10px 16px;
      border: 1px solid var(--primary-color);
      span {
        font-family: var(--Branding-sf-bold);
        margin-left: 4px;
      }
    }
  }
`;

const RightWrapper = styled.div`
  padding: 25px;
  border: 1px solid var(--primary-color);
  font-size: 12px;
  font-family: var(--Branding-sf-light);
  display: flex;
  flex-direction: column;
  gap: 14px;
  p {
    max-width: 250px;
  }
  .r-header {
    font-family: var(--Branding-sf-bold);
  }
  .context {
    .title {
      font-size: 12px;
      font-family: var(--Branding-sf-light);
    }

    .c-detail {
      font-size: 18px;
      font-family: var(--Branding-sf-bold);
      color: var(--primary-color);
    }
  }
  .context:nth-child(3) {
    margin-top: 20px;
  }
`;
