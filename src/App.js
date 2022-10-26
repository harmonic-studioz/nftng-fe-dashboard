import "./App.css";
import { useSelector } from "react-redux";
import { selectIsAuth } from "./slices/isAuthSlice";
import { selectIsLoading } from "./slices/isLoaderSlice";

import { Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Loader from "./components/Loader";
import Login from "./components/Login";
import DashBoard from "./components/DashBoard";
import AdminDetail from "./components/AdminDetail";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const isAuth = useSelector(selectIsAuth);
  const isLoading = useSelector(selectIsLoading);
  return (
    <main className="App">
      <Nav />
      {isLoading && <Loader />}
      <Routes>
        <Route path="/" element={<Login isAuth={isAuth} />} />
        <Route element={<PrivateRoute isAuth={isAuth} />}>
          <Route path="/admin" element={<DashBoard />} />
          <Route path="/admin/:id" element={<AdminDetail />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
