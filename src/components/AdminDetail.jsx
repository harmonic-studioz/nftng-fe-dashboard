import React from "react";
import ProductPass from "./ProductPass";
import ProductDetail from "./ProductDetail";
import OrderList from "./OrderList";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "./Footer";

const AdminDetail = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <Container>
      {pathname === "/admin/add-products" ? (
        <ProductPass />
      ) : pathname === "/admin/edit-products" ? (
        <ProductDetail />
      ) : pathname === "/admin/orders" ? (
        <OrderList />
      ) : (
        navigate("/not-found")
      )}
      {pathname !== "/admin/edit-products" && <Footer />}
    </Container>
  );
};

export default AdminDetail;

const Container = styled.div`
  padding-bottom: 8vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;
