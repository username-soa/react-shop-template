import React, { useState, useRef, useContext, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion/dist/framer-motion";
import Header from "../components/FixedElements/Header";
import Menu from "../components/FixedElements/Menu";
import Footer from "../components/FixedElements/Footer";
import CartSideMenu from "../components/FixedElements/CartSideMenu";
import ClientContext from "../contexts/ClientContext";

const Layout = ({ children }) => {
  const { isOpen, setIsOpen } = useContext(ClientContext);
  const location = useLocation();
  const scrollRef = useRef(null);
  const [sideMenu, setSideMenu] = useState(false);
  const [scrollDir, setScrollDir] = useState(null);
  const [feedback, setFeeadback] = useState({ status: null, message: null });

  return (
    <Container sideMenu={sideMenu} status={scrollDir}>
      <div className="menu">
        <AnimatePresence exitBeforeEnter>
          {sideMenu && <Menu sideMenu={sideMenu} setSideMenu={setSideMenu} />}
        </AnimatePresence>
      </div>
      <div className="body">
        <div
          id="myHeader"
          className={
            scrollDir === "up"
              ? "header fadeOut"
              : scrollDir === "down"
              ? "header fadeIn"
              : scrollDir === "normal"
              ? "header"
              : "header"
          }
          ref={scrollRef}
        >
          <Header sideMenu={sideMenu} setSideMenu={setSideMenu} />
        </div>
        <div className="content">
          {React.cloneElement(children, { url: location.pathname })}
        </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
      <AnimatePresence exitBeforeEnter>
        {isOpen && (
          <CartSideMenu
            menuStatus={isOpen}
            closeSideMenu={() => {
              setIsOpen(false);
            }}
          />
        )}
      </AnimatePresence>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #f6f7fb;
  /* overflow-x: hidden; */
  .menu {
    transition: all 0.3s;
    position: fixed;
    top: 0;
    left: 0;
    width: ${(props) => (props.sideMenu ? "100%" : "0")};
    min-height: 100vh;
    z-index: 999;
  }
  .header {
    width: 100%;
    z-index: 999;
  }
  .content {
    width: 100%;
    min-height: calc(100vh - 150px);
  }
  .footer {
    width: 100%;
  }
  @media only screen and (max-width: 400px) {
    .menu {
      width: ${(props) => (props.sideMenu ? "100vw" : "0")};
    }
  }
  @-webkit-keyframes stick {
    from {
      opacity: 0.5;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes stick {
    from {
      opacity: 0.5;
    }
    to {
      opacity: 1;
    }
  }
  @-webkit-keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0.5;
    }
  }
  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0.5;
    }
  }
`;
