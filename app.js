import React from "react";
import ReactDOM from "react-dom/client";

// Components of Our Food-Order App
// Header
// - Logo
// - Nav Items
// Body
// - Search Bar
// - Restaurant-Container
//  - Restaurant-Card
//    - Img
//    - Name of Res, Star Rating, cuisine, delivery time.
// Footer
// - Copyright
// - Links
// - Address
// - Contact

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://png.pngtree.com/png-clipart/20220903/ourmid/pngtree-chef-restaurant-logo-png-image_6136204.png"
          alt="App Logo"
          className="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
