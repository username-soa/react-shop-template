import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Link, useLocation, useHistory } from "react-router-dom";
import { AnimatePresence } from "framer-motion/dist/framer-motion";
import Button from "../elements/Button";
import HeaderSearchBar from "./HeaderSearchBar";
import AuthContext from "../../contexts/AuthContext";
import ClientContext from "../../contexts/ClientContext";
import { ReactComponent as Search } from "../../assets/svgs/loupe.svg";
import { ReactComponent as MenuIcon } from "../../assets/svgs/menu.svg";
import { ReactComponent as ChoppingCart } from "../../assets/svgs/shopping-cart.svg";
import shopInfo from "../../utils/general";

const Header = ({ sideMenu, setSideMenu }) => {
  let isMounted = true;
  const history = useHistory();
  const location = useLocation();
  const { user } = useContext(AuthContext);
  const { cartItems } = useContext(ClientContext);
  const [padding, setPadding] = useState(50);
  const [boxShadow, setBoxShadow] = useState(0);
  const [totalQte, setTotalQte] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [clientWindowHeight, setClientWindowHeight] = useState("");
  const [backgroundTransparency, setBackgroundTransparency] = useState(0);

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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    let backgroundTransparencyVar = clientWindowHeight / 200;
    if (backgroundTransparencyVar < 1) {
      let paddingVar = 50 - backgroundTransparencyVar * 25;
      let boxShadowVar = backgroundTransparencyVar * 0.1;
      setBackgroundTransparency(backgroundTransparencyVar);
      setPadding(paddingVar);
      setBoxShadow(boxShadowVar);
    }
    console.log("backgroundTransparencyVar : ", backgroundTransparencyVar);
  }, [clientWindowHeight]);

  return (
    <Container
      style={{
        background: `rgba(255, 255, 255, ${backgroundTransparency + 0.1})`,
        boxShadow: `rgba(149, 157, 165, ${boxShadow}) 0px 8px 24px`,
      }}
    >
      <div
        className="menu-icon"
        style={{
          paddingTop: `${padding}px`,
          paddingBottom: `${padding}px`,
        }}
      >
        <MenuIcon
          onClick={() => {
            setSideMenu(!sideMenu);
          }}
        />
      </div>
      <div
        className="header-right"
        style={{
          paddingTop: `${padding}px`,
          paddingBottom: `${padding}px`,
        }}
      >
        <Link to="/">
          <h2 className="header-right-h2">{shopInfo.name}.</h2>
        </Link>
        <div className="svgs-wrp">
          {!location.pathname.includes("/search/") && (
            <Search onClick={() => setShowSearch(true)} />
          )}
          <div className="cart-svg-wrp">
            <ChoppingCart onClick={() => history.push("/shopping-cart")} />
            <span>{totalQte ? totalQte : 0}</span>
          </div>
          {user && !location.pathname.includes("/account/") ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              onClick={() => {
                history.push("/account/");
              }}
            >
              <path d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z" />
            </svg>
          ) : (
            !location.pathname.includes("/account/") && (
              <Link to="/account/login">
                <Button
                  bg="#393d46"
                  color="#fff"
                  title="Login"
                  margin="0"
                  radius="12px"
                />
              </Link>
            )
          )}
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
  top: 0;
  z-index: 99;
  display: grid;
  position: sticky;
  background: #f6f7fb;
  grid-template-columns: 150px auto;
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
    gap: 1em;
    svg {
      cursor: pointer;
      width: 24px;
      height: 24px;
      fill: #393d46 !important;
      g {
        fill: #393d46 !important;
      }
    }
  }
  @media only screen and (max-width: 1000px) {
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
