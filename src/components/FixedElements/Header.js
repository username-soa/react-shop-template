import React, { useState, useRef, useEffect, useContext } from "react";
import styled from "styled-components";
import { Link, useLocation, useHistory } from "react-router-dom";
import { AnimatePresence } from "framer-motion/dist/framer-motion";
import HeaderSearchBar from "./HeaderSearchBar";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import { ReactComponent as Search } from "../../assets/loupe.svg";
import { ReactComponent as ChoppingCart } from "../../assets/shopping-cart.svg";
import ClientContext from "../../contexts/ClientContext";
import Button from "../elements/Button";

const Header = ({ sideMenu, setSideMenu }) => {
  let isMounted = true;
  // const cartItems = [];
  const history = useHistory();
  const location = useLocation();
  const { cartItems } = useContext(ClientContext);
  const [totalQte, setTotalQte] = useState(null);
  const [showSearch, setShowSearch] = useState(false);

  const getTotalQte = () => {
    let total = null;
    cartItems?.map((item) => {
      total += parseFloat(item?.qte);
    });
    return total;
  };

  useEffect(() => {
    if (isMounted) {
      const t = getTotalQte();
      if (t > 0) {
        setTotalQte(t);
      } else if (t <= 0) {
        setTotalQte(null);
      }
    }
    return () => {
      isMounted = false;
    };
  }, [cartItems]);

  return (
    <Container totalqte={totalQte}>
      <div className="menu-icon">
        <MenuIcon
          onClick={() => {
            setSideMenu(true);
          }}
        />
      </div>
      <div className="header-right">
        <Link to="/">
          <h2 className="header-right-h2">Digital Era.</h2>
        </Link>
        <div className="svgs-wrp">
          {!location.pathname.includes("/search/") && (
            <Search onClick={() => setShowSearch(true)} />
          )}
          <div className="cart-svg-wrp">
            <ChoppingCart onClick={() => history.push("/shopping-cart")} />
            <span>{totalQte ? totalQte : 0}</span>
          </div>

          {/* <ChoppingCart onClick={() => history.push("/shopping-cart")} /> */}
          <Link to="/account/login">
            <Button
              bg="#393d46"
              color="#fff"
              title="Login"
              margin="0"
              radius="12px"
            />
          </Link>
        </div>
      </div>
      <AnimatePresence>
        {showSearch && <HeaderSearchBar setState={setShowSearch} />}
      </AnimatePresence>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: grid;
  grid-template-columns: 150px auto;
  height: 150px;

  .menu-icon {
    background: #393d46;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      width: 30px;
      height: 30px;
    }
  }
  .cart-svg-wrp {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 0 0.5em;
    span {
      color: #fff;
      background: #000;
      position: absolute;
      text-align: center;
      white-space: normal;
      height: 20px;
      min-width: 20px;
      font-size: 10px;
      line-height: 22px;
      right: 7px;
      top: -12px;
      border-radius: 50%;
    }
  }

  .header-right {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1em;
  }
  .header-right-h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #393d46;
  }
  svg {
    cursor: pointer;
  }
  .svgs-wrp {
    margin: 0 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      margin: 0 1em;
      cursor: pointer;
      fill: #393d46 !important;
      g {
        fill: #393d46 !important;
      }
    }
  }
  @media only screen and (max-width: 1000px) {
    height: 100px;
    grid-template-columns: 100px auto !important;
    .header-right-h2 {
      font-size: 1.2rem;
    }
    .menu-icon {
      svg {
        width: 25px;
        height: 25px;
      }
    }
  }
  @media only screen and (max-width: 550px) {
    .svgs-wrp {
      display: none;
    }
  }
`;
