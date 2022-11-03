import "./App.css";
import { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { selectIsAuth } from "./slices/isAuthSlice";
import { selectIsLoading } from "./slices/isLoaderSlice";

import { Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Loader from "./components/Loader";
import PrivateRoute from "./components/PrivateRoute";
const Login = lazy(() => import("./components/Login"));
const DashBoard = lazy(() => import("./components/DashBoard"));
const AdminDetail = lazy(() => import("./components/AdminDetail"));

function App() {
  const isAuth = useSelector(selectIsAuth);
  const isLoading = useSelector(selectIsLoading);
  return (
    <main className="App">
      <Nav />
      {isLoading && <Loader />}
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={""}>
              <Login isAuth={isAuth} />
            </Suspense>
          }
        />
        <Route element={<PrivateRoute isAuth={isAuth} />}>
          <Route
            path="/admin"
            element={
              <Suspense fallback={""}>
                <DashBoard />
              </Suspense>
            }
          />
          <Route
            path="/admin/:id"
            element={
              <Suspense fallback={""}>
                <AdminDetail />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
