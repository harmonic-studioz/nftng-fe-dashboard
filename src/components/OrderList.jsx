import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import arrow from "../img/svg/arrow-left.svg";
import search from "../img/svg/search-normal.svg";
import ListOrder from "./ListOrder";
import { useNavigate } from "react-router-dom";
import baseApi from "../api/baseApi";
import { useSelector } from "react-redux";
import { selectIsAuth } from "../slices/isAuthSlice";
import { selectViewOrder } from "../slices/viewOrderSlice";
import ViewOrder from "./ViewOrder";

const OrderList = () => {
  const isAuth = useSelector(selectIsAuth);
  const viewOrder = useSelector(selectViewOrder);
  const [toggleView, setToggleView] = useState(false);
  const [isSearch, setIsSearch] = useState("");
  const [inputFocus, setInputFocus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const onFocus = () => setInputFocus(true);
  const onBlur = () => setInputFocus(false);
  const [itemList, setItemList] = useState([]);
  const [orderDetail, setOrderDetail] = useState({});
  const [pageCount, setPageCount] = useState(1);

  const loadMore = () => {
    setIsLoading(true);
    setPageCount((prev) => prev + 1);
  };

  const hideBtn = () => {
    if (Object.keys(orderDetail).length) {
      if (pageCount >= orderDetail?.totalPages) {
        return false;
      } else {
        return true;
      }
    }
  };

  const handleItem = useCallback(
    (data) => {
      if (pageCount > 1) {
        setItemList((prev) => [...prev, ...data]);
      }
    },
    [pageCount]
  );

  useEffect(() => {
    const headers = { Authorization: `Bearer ${isAuth.token}` };
    const getOrderContent = async () => {
      try {
        const res = await baseApi.get(
          `/order?page=${pageCount}&limit=6&reference=${isSearch}`,
          {
            headers,
          }
        );
        if (pageCount <= 1) {
          setOrderDetail(res.data);
          setItemList(res.data.results);
        } else {
          handleItem(res.data.results);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getOrderContent();
  }, [pageCount, isSearch, handleItem, isAuth]);

  return (
    <Container>
      <div
        className="back"
        onClick={() => (toggleView ? setToggleView(false) : navigate(-1))}
      >
        <img src={arrow} alt="" />
        <p>Back</p>
      </div>

      <Wrapper>
        <div className="nav">
          <h1>Products</h1>
        </div>
        <ListWrap>
          <ListHeader>
            <h2>{toggleView ? "Customer & Order details" : "All Orders"}</h2>
          </ListHeader>
          {toggleView && Object.keys(viewOrder).length ? (
            <ViewOrder />
          ) : (
            <ListWrapper>
              <ListDetail>
                <Search inputFocus={inputFocus}>
                  <div className="number">
                    <img src={search} alt="" />
                    <input
                      type="text"
                      placeholder="Filter Reference ID"
                      onFocus={onFocus}
                      onBlur={onBlur}
                      value={isSearch}
                      onChange={(e) => setIsSearch(e.target.value)}
                    />
                  </div>
                </Search>
                {itemList.length ? (
                  <ListOrder
                    setToggleView={setToggleView}
                    itemList={itemList}
                  />
                ) : (
                  <p className="no-item">No item found</p>
                )}
              </ListDetail>
              {isLoading && <p className="loading"> Loading...</p>}
              {hideBtn() && (
                <div className="obsevser">
                  <button onClick={loadMore}>See More</button>
                </div>
              )}
            </ListWrapper>
          )}
        </ListWrap>
      </Wrapper>
    </Container>
  );
};

export default OrderList;

const Container = styled.div`
  padding: 6vh 5vw 6vh;
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
    top: 14vh;
    left: 14vw;
    display: flex;
    align-items: center;
    gap: 5px;
    color: var(--primary-color);
    font-size: 16px;
    font-family: var(--Branding-sf-medium);
  }

  .no-item {
    margin-top: 8px;
    margin-left: 30px;
    font-family: var(--Branding-sf-light);
    font-size: 16px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 14vh 9vw 0vh;
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    width: 100%;
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

const ListWrap = styled.div`
  background-color: rgba(0, 0, 0, 1);
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 16px;
  overflow-x: none;
  overflow-y: hidden;
`;

const ListHeader = styled.div`
  height: 50px;
  display: flex;
  align-items: flex-end;
  padding: 0 30px;
  h2 {
    font-size: 16px;
    position: relative;
    font-family: var(--poppins);
    font-weight: 500;
    color: var(--primary-color);
    padding-bottom: 6px;

    &::before {
      position: absolute;
      content: "";
      bottom: 0;
      left: 0;
      border-bottom: 1px solid var(--primary-color);
      right: 0;
    }
  }

  border-bottom: 1px solid rgba(255, 255, 255, 0.13);
`;

const ListDetail = styled.div`
  background-color: #a1d2830a;
  height: 100%;
  border-radius: 14px;
`;

const ListWrapper = styled.div`
  padding: 20px;
  flex: 1;
  .loading {
    margin-top: 8px;
    text-align: center;
    font-family: var(--Branding-sf-light);
    color: var(--primary-color);
    font-size: 16px;
  }
  .obsevser {
    display: flex;
    width: 100%;
    justify-content: center;
    button {
      margin-top: 12px;
      font-size: 14px;
      padding: 6px 12px;
      border-radius: 6px;
    }
  }
`;

const Search = styled.div`
  padding: 30px 30px 0;
  margin-bottom: 30px;
  .number {
    max-width: 35vw;

    display: flex;
    align-items: center;
    border: ${(p) =>
      p.inputFocus
        ? "1px solid rgba(185, 243, 149, 0.6)"
        : "1px solid rgba(161, 210, 131, 0.34)"};
    height: fit-content;
    margin-bottom: 12px;
    padding: 8px;
    border-radius: 6px;
    transition: all 0.3s ease-in;
    gap: 10px;
    input {
      border: none;

      margin: 0;
      background-color: transparent;
    }
  }
`;
