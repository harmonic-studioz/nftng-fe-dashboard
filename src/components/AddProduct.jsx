import React, { useState, useEffect } from "react";
import styled from "styled-components";
import add from "../img/svg/gallery-add.svg";
import Successful from "./Successful";
import BaseApi from "../api/baseApi";
import { useSelector, useDispatch } from "react-redux";
import { selectIsAuth } from "../slices/isAuthSlice";
import { setIsLoading } from "../slices/isLoaderSlice";

const AddProduct = ({ setToggle }) => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const [number, setNumber] = useState("");
  const [sizeslist, setSizesList] = useState([]);
  const [productName, setProductName] = useState("");
  const [productQuatity, setProductQuatity] = useState("");
  const [priceFocus, setPriceFocus] = useState(false);
  const [quatityFocus, setQuatityFocus] = useState(false);
  const [addImage, setAddImage] = useState("");
  const [urlImage, setUrlImage] = useState("");
  const [upLoadedImg, setUpLoadedImg] = useState(null);
  const [successs, setSuccess] = useState(false);

  const handleAdd = (data) => {
    const exist = sizeslist.some((d) => d === data);
    if (exist) {
      setSizesList(sizeslist.filter((d) => d !== data));
    } else {
      setSizesList([...sizeslist, data]);
    }
  };

  const checkAvailability = (val) => {
    return sizeslist.some((arrVal) => val === arrVal);
  };

  const handleAddImage = (e) => {
    let reader = new FileReader();
    setAddImage(e.target.files[0]);
    reader.readAsDataURL(e.target.files[0] || null);

    reader.onload = () => {
      setUrlImage(reader.result);
    };
  };

  const handleAddMerch = async () => {
    dispatch(setIsLoading(true));
    const headers = { Authorization: `Bearer ${isAuth.token}` };
    try {
      await BaseApi.post(
        `/merchandise`,
        {
          name: productName || "",
          quantity: Number(productQuatity) || 0,
          price: Number(number) || 0,
          sizes: sizeslist || [],
          merchandiseImages: upLoadedImg ? [upLoadedImg[0].id] : [],
        },
        { headers }
      );
      dispatch(setIsLoading(false));
      setSuccess(true);
    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    if (addImage) {
      const upLoadImg = async () => {
        dispatch(setIsLoading(true));
        try {
          const formData = new FormData();
          formData.append("images", addImage);
          const res = await BaseApi.post("/uploads", formData);
          setUpLoadedImg(res.data);
          dispatch(setIsLoading(false));
        } catch (error) {
          console.log(error.message);
          dispatch(setIsLoading(false));
        }
      };
      upLoadImg();
    }
  }, [addImage, dispatch]);

  return (
    <Container>
      {successs ? (
        <Successful setToggle={setToggle} setSuccess={setSuccess} />
      ) : (
        <Wrapper>
          {urlImage ? (
            <AddImg>
              <div className="img-wrap">
                <img src={urlImage} alt="" />
              </div>
              <label htmlFor="add-image">
                <input
                  type="file"
                  id="add-image"
                  onChange={handleAddImage}
                  accept="image/*"
                />
                <img src={add} alt="" />
                <p>Change Image</p>
              </label>
            </AddImg>
          ) : (
            <AddCard priceFocus={priceFocus} quatityFocus={quatityFocus}>
              <label htmlFor="add-image">
                <input
                  type="file"
                  id="add-image"
                  onChange={handleAddImage}
                  accept="image/*"
                />
                <img src={add} alt="" />
                <p>Add Product Image</p>
              </label>
            </AddCard>
          )}
          <AddDesc>
            <input
              type="text"
              placeholder="Product Name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
            <div className={`number ${priceFocus ? "active-border" : null}`}>
              <span>NGN</span>
              <input
                type="number"
                placeholder="Price"
                onFocus={() => {
                  setPriceFocus(true);
                }}
                onBlur={() => setPriceFocus(false)}
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className={`number ${quatityFocus ? "active-border" : null}`}>
              <span>Quantity</span>
              <input
                type="number"
                placeholder="Add numbers"
                onFocus={() => {
                  setQuatityFocus(true);
                }}
                onBlur={() => setQuatityFocus(false)}
                value={productQuatity}
                onChange={(e) => setProductQuatity(e.target.value)}
              />
            </div>
            <Sizes>
              <p className="label">Size Available</p>
              <div className="sizes-wrap">
                <div
                  className={`select ${
                    checkAvailability("M") && "active-select"
                  } `}
                  onClick={() => handleAdd("M")}
                >
                  <p>M</p>
                </div>
                <div
                  className={`select ${
                    checkAvailability("L") && "active-select"
                  } `}
                  onClick={() => handleAdd("L")}
                >
                  <p>L</p>
                </div>
                <div
                  className={`select ${
                    checkAvailability("XL") && "active-select"
                  } `}
                  onClick={() => handleAdd("XL")}
                >
                  <p>XL</p>
                </div>
                <div
                  className={`select ${
                    checkAvailability("XXL") && "active-select"
                  } `}
                  onClick={() => handleAdd("XXL")}
                >
                  <p>XXL</p>
                </div>
              </div>
            </Sizes>
            <div className="btn-wrap">
              <button onClick={handleAddMerch}>Add Product</button>
            </div>
          </AddDesc>
        </Wrapper>
      )}
    </Container>
  );
};

export default AddProduct;

const Container = styled.div`
  margin: 27px 0;
  flex: 1;
`;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  gap: 30px;
  input[type="file"] {
    display: none;
  }
  label {
    cursor: pointer;
  }
`;

const AddCard = styled.div`
  width: 16vw;
  background-color: rgba(255, 255, 255, 0.06);
  height: 100%;

  cursor: pointer;
  img {
    width: 46px;
    height: 46px;
  }
  p {
    color: rgba(255, 255, 255, 0.41);
    font-family: var(--Branding-sf-light);
    font-size: 16px;
  }

  label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
`;

const AddImg = styled.div`
  width: 16vw;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .img-wrap {
    width: 100%;
    height: 16vw;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  label {
    display: flex;
    margin-top: 13px;
    align-items: center;
    justify-content: center;
    padding: 14px;
    gap: 10px;
    width: 100%;
    border: 1px solid var(--primary-color);
    img {
      width: 23px;
    }
    p {
      font-size: 13px;
      font-family: var(--inter);
      font-weight: 700;
      color: var(--primary-color);
    }
  }
`;

const AddDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  min-height: 100%;
  flex: 1;
  input {
    background-color: transparent;
    padding: 16px;
    font-size: 14px;
    border-radius: 5px;

    &::placeholder {
      font-size: 16px;
    }
  }
  .number {
    display: flex;
    align-items: center;

    height: fit-content;
    padding: 0 9px;
    border-radius: 6px;
    transition: all 0.3s ease-in;
    border: 1px solid rgba(161, 210, 131, 0.34);
    span {
      display: inline-block;
      font-size: 16px;
      font-family: var(--Branding-sf-medium);
    }
    input {
      border: none;
      margin: 0;
    }
  }

  .active-border {
    border: 1px solid rgba(185, 243, 149, 0.6);
  }

  .btn-wrap {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    button {
      font-size: 16px;
      padding: 14px 23px;
      font-weight: 700;
    }
  }
`;

const Sizes = styled.div`
  font-family: var(--Branding-sf-medium);
  input {
    display: none;
  }
  .sizes-wrap {
    display: flex;
    gap: 5px;
    margin-top: 5px;
  }

  p {
    font-size: 0.8rem;
  }

  .select {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 38px;
    height: 30px;
    border: 1px solid #a1d28338;
    font-size: 8px;
    cursor: pointer;
  }
  .active-select {
    border: 1px solid var(--primary-color);
  }
`;
