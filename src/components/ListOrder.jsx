import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import baseApi from "../api/baseApi";
import { useDispatch } from "react-redux";
import { setViewOrder } from "../slices/viewOrderSlice";

const ListOrder = ({ setToggleView, itemList }) => {
  return (
    <Container>
      <Wrapper>
        <Headers>
          {/* <div className="title">
            <input type="checkbox" name="" id="" />
          </div> */}

          <div className="title">
            <span>Products</span>
          </div>
          <div className="title">
            <span>Status</span>
          </div>
          <div className="title">
            <span>Inventory</span>
          </div>
          <div className="title">
            <span>Price</span>
          </div>
          <div className="title">
            <span></span>
          </div>
        </Headers>
        <Items>
          {itemList.length
            ? itemList.map(
                (item) =>
                  item && (
                    <OrderItem
                      key={item.id}
                      setToggleView={setToggleView}
                      item={item}
                    />
                  )
              )
            : null}
        </Items>
      </Wrapper>
    </Container>
  );
};

const OrderItem = ({ setToggleView, item }) => {
  const [newMerch, setNewMerch] = useState([]);

  const dispatch = useDispatch();
  const handler = () => {
    setToggleView(true);
    dispatch(setViewOrder(newMerch));
  };

  useEffect(() => {
    const getMerch = async () => {
      if (Object.keys(item).length) {
        try {
          let arr = [];

          for (let i = 0; i < item?.merchandiseItems.length; i++) {
            const res1 = await baseApi.get(
              `merchandise/${item?.merchandiseItems[i].merchandiseId}`
            );
            arr.push({ ...item, ...res1.data });
          }
          setNewMerch(arr);
        } catch (error) {
          console.log(error);
        }
      }
    };

    getMerch();
  }, [item]);
  return newMerch.length ? (
    <Item>
      {/* <div className="title">
          <input type="checkbox" name="" id="" />
        </div> */}

      <div className="title">
        <div className="t-wrap">
          {newMerch.length ? (
            <img src={newMerch[0].images[0].url} alt="" />
          ) : null}
          <span>
            {newMerch.length <= 1
              ? newMerch[0].name
              : newMerch[0].name + " & more "}
          </span>
        </div>
      </div>
      <div className="title">
        <span className="status">{item.reference ? "Paid" : "Pending"}</span>
      </div>
      <div className="title">
        <span>{newMerch[0].quantity} in stock</span>
      </div>
      <div className="title">
        <span>NGN{newMerch[0].totalAmount}</span>
      </div>
      <div className="title " onClick={() => handler()}>
        <span className="detail">View Details</span>
      </div>
    </Item>
  ) : null;
};
export default ListOrder;

const Container = styled.div`
  font-size: 12px;
  font-family: var(--poppins);
  font-weight: 500;
  display: flex;
  width: 100%;
  flex: 1;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  flex-direction: column;

  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    flex: 1;
  }

  .title:nth-child(1) {
    flex: 2;
    justify-content: flex-start;
    span {
      margin-left: 30px;
    }
  }
`;

const Headers = styled.div`
  width: 100%;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
`;

const Items = styled.div`
  overflow: auto;
  height: 100%;
  padding: 20px 0;
`;
const Item = styled.div`
  padding: 20px 30px;
  display: flex;
  align-items: center;
  border-top: 1px solid #ffffff12;
  .title:nth-child(1) {
    font-weight: 700;
    img {
      width: 55px;
      height: 55px;
      object-fit: cover;
      border-radius: 6px;
    }
    span {
      margin: 0;
    }
    .t-wrap {
      display: flex;
      gap: 20px;
      align-items: center;
      width: 100%;
      margin-left: 30px;
    }
  }

  .status {
    display: inline-block;
    padding: 5px 10px;
    border-radius: 30px;
    color: var(--primary-color);
    background-color: rgba(161, 210, 131, 0.19);
  }

  .detail {
    display: inline-block;
    width: 100%;
    text-align: center;
    border: 1px solid var(--primary-color);
    padding: 10px 0;
    border-radius: 6px;
    font-family: var(--inter);
    font-weight: 700;
    cursor: pointer;
  }
`;
