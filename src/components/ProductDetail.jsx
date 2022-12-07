import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Footer from "./Footer";
import arrow from "../img/svg/arrow-left.svg";
import EditProduct from "./EditProduct";
import { useNavigate, useLocation } from "react-router-dom";
import MerchandiseSection from "./MerchandiseSection";
import BaseApi from "../api/baseApi";

const ProductDetail = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [cartValue, setCartValue] = useState([]);
  const [toggleEdit, setToggleEdit] = useState(false);
  const [selectedEdit, setSelectedEdit] = useState(null);
  const [data, setData] = useState([]);

  const handleSelect = (data, image) => {
    const newData = Object.assign(data, { image: image });
    setSelectedEdit(newData);
    setToggleEdit(true);
  };

  const admin = pathname === "/admin/edit-products";

  const handleAddToCart = (data) => {
    const exist = cartValue.some((d) => d.id === data.id);
    if (exist) {
      setCartValue(cartValue.filter((d) => d !== data));
    } else {
      setCartValue([...cartValue, data]);
    }
  };

  const checkAvailability = (val) => {
    return cartValue.some((arrVal) => val === arrVal);
  };

  useEffect(() => {
    const handleGetMerch = async () => {
      try {
        const res = await BaseApi.get("/merchandise");
        setData(res.data.results);
        console.log(res.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    handleGetMerch();
  }, [data]);

  return (
    <Container>
      {pathname !== "/products/successful" && (
        <div
          className="back"
          onClick={() =>
            admin && toggleEdit ? setToggleEdit(false) : navigate(-1)
          }
        >
          <img src={arrow} alt="" />
          <p>Back</p>
        </div>
      )}
      <Wrapper>
        {pathname !== "/products/successful" && (
          <div className="nav">
            <h1>
              Products/ <span>merchandise</span>
            </h1>
          </div>
        )}
        {data.length ? (
          <Wrap toggleEdit={toggleEdit}>
            {toggleEdit ? (
              <EditProduct
                selectedEdit={selectedEdit}
                setToggleEdit={setToggleEdit}
              />
            ) : (
              <MerchandiseSection
                data={data}
                checkAvailability={checkAvailability}
                handleAddToCart={handleAddToCart}
                cartValue={cartValue}
                admin={admin}
                handleSelect={handleSelect}
              />
            )}
          </Wrap>
        ) : (
          <NoItems>
            <p>no item</p>
            <button onClick={() => navigate("/admin/add-products")}>
              Add Merchandise
            </button>
          </NoItems>
        )}
      </Wrapper>
      {pathname !== "/products/successful" && <Footer />}
    </Container>
  );
};

export default ProductDetail;

const Container = styled.div`
  padding: 10vh 8vw 8vh;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  min-height: 100vh;
  background-color: #252525;

  .back {
    position: absolute;
    cursor: pointer;
    top: 15vh;
    left: 8vw;
    display: flex;
    align-items: center;
    gap: 5px;
    color: var(--primary-color);
    font-size: 16px;
    font-family: var(--Branding-sf-medium);
  }
  @media screen and (max-width: 900px) {
    height: fit-content;
    padding: 10vh 0 8vh;
    .back {
      top: 10vh;
      left: 20px;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 14vh 0;
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    width: 100%;

    .cart {
      width: fit-content;
      padding: 11px;
      display: flex;
      gap: 12px;
      justify-content: center;
      align-items: center;
      background-color: #a1d2832e;
      border-radius: 23px;

      img {
        width: 24px;
        height: 24px;
      }
      p {
        color: var(--primary-color);
        font-family: var(--Branding-sf-medium);
        width: 160px;
        font-size: 14px;
      }
    }
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
  @media screen and (max-width: 900px) {
    margin: 5vh 0;
    padding: 0 20px;
    .nav {
      .cart {
        padding: 8px;
        img {
          width: 20px;
          height: 20px;
        }
        p {
          font-size: 10px;
          width: 80px;
        }
      }
    }
    h1 {
      font-size: 18px;
      span {
        font-size: 14px;
      }
    }
  }
`;

const Wrap = styled.div`
  width: ${(p) => (p.toggleEdit ? "60vw" : "100%")};
  height: 100%;
`;

const NoItems = styled(Wrap)`
  background-color: #0000004f;
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  p {
    font-size: 24px;
    text-transform: capitalize;
    font-family: var(--Branding-sf-medium);
  }
  button {
    font-size: 16px;
    padding: 16px;
    font-family: var(--Branding-sf-medium);
  }
`;
