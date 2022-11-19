import React, { useState, useRef, useEffect, useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";
import { ReactComponent as Close } from "../../assets/close.svg";
import CartSideMenuBottom from "../CartComponents/CartSideMenuBottom";
import CartSideMenuItem from "../CartComponents/CartSideMenuItem";
import { productList } from "../../utils/Products";

const CartSideMenu = ({ menuStatus, closeSideMenu, checkoutEC }) => {
  const parentAnimations = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { delayChildren: 0.1, staggerChildren: 0.3 },
    },
    exit: {
      opacity: 0,
    },
  };
  const childAnimations = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  const getTotal = () => {
    let total = null;
    return total;
  };

  return (
    <Container
      exit="exit"
      initial="hidden"
      animate="show"
      active={menuStatus}
      variants={parentAnimations}
    >
      <div className="cart-items-wrp">
        <motion.div variants={childAnimations} className="cart-items-wrp-top">
          <h3>Your cart</h3>
          <Close onClick={closeSideMenu} />
        </motion.div>
        <div className="cart-items-wrp-middle">
          {[...productList.slice(1, 4)]?.map((item, index) => {
            return (
              <CartSideMenuItem
                qte={item?.qte}
                cid={item?.cid}
                uid={item?.uid}
                updateQte={() => {
                  return null;
                }}
                slug={item.slug}
                name={item?.name}
                img={item?.image}
                description={item.desc}
                gotoProduct={closeSideMenu}
                animations={childAnimations}
                brand={item?.product?.vendor}
                key={`side-cart-item-${index}`}
                price={parseFloat(item?.price, 10)}
              />
            );
          })}
        </div>
        <motion.div variants={childAnimations}>
          <CartSideMenuBottom
            price={getTotal()}
            seeCatalogue={closeSideMenu}
            checkoutEC={checkoutEC}
          />
        </motion.div>
      </div>
    </Container>
  );
};

export default CartSideMenu;

const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.active ? "100%" : "0")};
  height: 100vh;
  z-index: 999999;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  transition: all 0.9s ease-in-out;
  .cart-items-wrp {
    width: 500px;
    height: 100vh;
    background: #fff;
    position: absolute;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .cart-items-wrp-top {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
    h3 {
      text-transform: capitalize;
    }
    svg {
      width: 18px;
      height: 18px;
      cursor: pointer;
      fill: #878787;
    }
  }
  .cart-items-wrp-middle {
    width: 100%;
    height: calc(100vh - 80px - 244px);
    overflow-y: scroll;
  }
  @media only screen and (max-width: 768px) {
    .cart-items-wrp {
      width: 100%;
    }
  }
`;
