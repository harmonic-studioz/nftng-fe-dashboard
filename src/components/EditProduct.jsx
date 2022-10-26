import React, { useState, useEffect } from "react";
import styled from "styled-components";
import add from "../img/svg/gallery-add.svg";
import BaseApi from "../api/baseApi";
import { useSelector, useDispatch } from "react-redux";
import { selectIsAuth } from "../slices/isAuthSlice";
import { setIsLoading } from "../slices/isLoaderSlice";

const EditProduct = ({ selectedEdit, setToggleEdit }) => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  const { image, name, price, quantity, images, id, sizes } = selectedEdit;
  const [number, setNumber] = useState(price);
  const [sizeslist, setSizesList] = useState(sizes || []);
  const [productName, setProductName] = useState(name);
  const [productQuatity, setProductQuatity] = useState(quantity);
  const [priceFocus, setPriceFocus] = useState(false);
  const [quatityFocus, setQuatityFocus] = useState(false);
  const [addImage, setAddImage] = useState("");
  const [urlImage, setUrlImage] = useState(image || "");
  const [upLoadedImg, setUpLoadedImg] = useState([]);

  console.log(selectedEdit);

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

  const handleEdit = async () => {
    const headers = { Authorization: `Bearer ${isAuth.token}` };
    dispatch(setIsLoading(true));
    try {
      if (upLoadedImg.length) {
        const res = await BaseApi.patch(
          `/merchandise/${id}`,
          {
            name: productName,
            quantity: Number(productQuatity) || 0,
            price: Number(number),
            sizes: sizeslist,
            images: [upLoadedImg[0].id],
          },
          { headers }
        );

        setUpLoadedImg(false);
        setToggleEdit(false);
        dispatch(setIsLoading(false));
      }
      const res = await BaseApi.patch(
        `/merchandise/${id}`,
        {
          name: productName,
          quantity: Number(productQuatity) || 0,
          price: Number(number),
          sizes: sizeslist,
        },
        { headers }
      );
      console.log(res.data);
      setToggleEdit(false);
      dispatch(setIsLoading(false));
    } catch (error) {
      console.log(error);
      dispatch(setIsLoading(false));
    }
  };

  const handleDelete = async () => {
    const headers = { Authorization: `Bearer ${isAuth.token}` };
    dispatch(setIsLoading(true));
    try {
      await BaseApi.delete(`/merchandise/${id}`, { headers });
      setToggleEdit(false);
      dispatch(setIsLoading(false));
    } catch (error) {
      console.log(error);
      dispatch(setIsLoading(false));
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
          console.log(res.data);
          setUpLoadedImg(res.data);
          dispatch(setIsLoading(false));
        } catch (error) {
          console.log(error);
          dispatch(setIsLoading(false));
        }
      };

      upLoadImg();
    }
  }, [addImage]);

  return (
    <Container>
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
              type="text"
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
              type="text"
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
            <button onClick={handleEdit}>Save</button>
            <button className="del" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </AddDesc>
      </Wrapper>
    </Container>
  );
};

export default EditProduct;

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
  min-height: 100%;
  background-color: rgba(255, 255, 255, 0.06);

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
  display: flex;
  min-height: 100%;
  flex-direction: column;
  justify-content: space-between;
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
  width: 100%;
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
    gap: 20px;
    justify-content: flex-end;
    button {
      font-size: 16px;
      padding: 14px 23px;
      font-weight: 700;
    }
    .del {
      border: 1px solid var(--primary-color);
      background: transparent;
      color: rgba(255, 255, 255, 0.8);
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
  }

  .active-select {
    border: 1px solid var(--primary-color);
  }
`;
