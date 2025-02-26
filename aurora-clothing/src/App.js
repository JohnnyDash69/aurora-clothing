import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import LandingPage from "./LandingPage";
import Product from "./Product";
import Legal from "./Legal";
import InterestCalculator from "./InterestCalculator";

const Home = () => <LandingPage />;
const Shop = () => {
  const products = [
    { name: "T-Shirt", price: 20, image: "shirt.png" },
    { name: "Jeans", price: 50, image: "jean.png" },
    { name: "Jacket", price: 80, image: "jacket.png" },
  ];

  return (
    <section className="product-list">
      {products.map((product, index) => (
        <Product key={index} {...product} />
      ))}
    </section>
  );
};

const Profile = () => {
  const handleLogout = () => {
    alert("User has logged out");
  };

  return (
    <div className="profile">
      <h2>User Profile</h2>
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/interest-calculator" element={<InterestCalculator />} />
      </Routes>
    </Router>
  );
};

export default App;
