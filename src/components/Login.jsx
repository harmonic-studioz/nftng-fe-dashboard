import React, { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setIsAuth } from "../slices/isAuthSlice";
import { setIsLoading } from "../slices/isLoaderSlice";

import baseApi from "../api/baseApi";
import Footer from "./Footer";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");

  const handleLog = async () => {
    dispatch(setIsLoading(true));
    try {
      const res = await baseApi.post("/admin/login", {
        email,
        password,
      });
      dispatch(setIsAuth(res.data));
      dispatch(setIsLoading(false));
      navigate("/admin");
      // console.log(res.data);
    } catch (error) {
      console.log(error);
      dispatch(setIsLoading(false));
    }
  };

  return (
    <Container>
      <Wrapper>
        <Form>
          <h1>Admin</h1>
          <div className="f-wrap">
            <div className="i-wrap">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassWord(e.target.value)}
              />
            </div>
            <button
              disabled={email === "" && password === ""}
              onClick={handleLog}
            >
              login
            </button>
          </div>
        </Form>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Login;

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  padding: 65px 0;
`;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.div`
  width: 520px;
  padding: 80px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 1);
  border-radius: 12px;
  .f-wrap {
    width: 100%;
  }
  .i-wrap {
    display: flex;
    flex-direction: column;
    gap: 18px;
    width: 100%;
  }
  h1 {
    font-size: 30px;
    font-family: var(--Branding-sf-bold);
    color: var(--primary-color);
  }
  button {
    width: 100%;
    margin-top: 30px;
    border-radius: 6px;
    height: 55px;
  }
  input {
    padding: 9px 12px;
    background: transparent;
    border-radius: 5px;
    font-size: 14px;
    font-family: var(--Branding-sf-light);
  }
`;
