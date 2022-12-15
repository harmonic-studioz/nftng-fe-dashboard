import React, { lazy, Suspense } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "./Footer";
const ProductPass = lazy(() => import("./ProductPass"));
const ProductDetail = lazy(() => import("./ProductDetail"));
const OrderList = lazy(() => import("./OrderList"));
const Gallery = lazy(() => import("./Gallery"));

const AdminDetail = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <Container>
      <Suspense fallback={<>...</>}>
        {pathname === "/admin/add-products" ? (
          <ProductPass />
        ) : pathname === "/admin/edit-products" ? (
          <ProductDetail />
        ) : pathname === "/admin/orders" ? (
          <OrderList />
        ) : pathname === "/admin/gallery" ? (
          <Gallery />
        ) : (
          navigate("/not-found")
        )}
      </Suspense>
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
