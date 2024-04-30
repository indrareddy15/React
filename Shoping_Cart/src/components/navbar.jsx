import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ cartItemsCount, isLogged }) => {
  const navigate = useNavigate();
  return (
    <nav>
      <div className="nav-cont-1">
        <h2 className="nav-h2" onClick={() => navigate("/")}>
          Tee-<span style={{ fontWeight: "400" }}>store</span>
        </h2>
        <ul className="nav-ul">
          <Link to={"/products"}>Products</Link>
          <span className="about-span">Shop</span>
          <Link to={"/about"}>About</Link>
        </ul>
      </div>

      <div className="nav-cont-2">
        {!isLogged && <button className="login-nav">Login</button>}
        <AiOutlineSearch size={25} />
        <a href="##" className="cart-icon-cont">
          <span className="nav-cart-count">{cartItemsCount}</span>
          <HiShoppingCart
            size={25}
            style={{
              marginRight: "10px",
              marginLeft: "15px",
              marginBottom: "-5px",
            }}
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
