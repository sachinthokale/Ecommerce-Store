import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Register from "./components/Authentication/Register.jsx";
import Home from "./Pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Login from "./components/Authentication/Login.jsx";
import Account from "./components/Authentication/Account.jsx";
import ProductOverview from "./Pages/ProductOverview.jsx";
import Cart from "./Pages/Cart.jsx";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productId" element={<ProductOverview />} />
          <Route path="/account" element={<Account />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
