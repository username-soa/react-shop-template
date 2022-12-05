import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";
import useHasBeenViewed from "../../hooks/useHasBeenViewed";
import Button from "../elements/Button";

const CartTotal = ({ price, checkoutEC }) => {
  const AdvantageCartVariants = {
    hidden: { opacity: 0, y: "100px" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, type: "Inertia" },
    },
  };

  const [hasBeenViewed, ref] = useHasBeenViewed();

  return (
    <Container
      ref={ref}
      animate={hasBeenViewed ? "visible" : "hidden"}
      initial="hidden"
      variants={AdvantageCartVariants}
    >
      <h4 className="cart-total-h4">Cart Total</h4>
      <div className="cart-total-row">
        <h5 className="cart-total-h5">Sub-total</h5>
        <h5>
          {new Intl.NumberFormat("fr-FR", {
            style: "currency",
            currency: "MAD",
          }).format(price)}
        </h5>
      </div>
      <div className="cart-total-row">
        <h5 className="cart-total-h5">Taxes</h5>
        <h5 className="cart-total-h5 right">Calculated at checkout</h5>
      </div>
      <div className="cart-total-row">
        <h5 className="cart-total-h5">Shipping</h5>
        <h5 className="cart-total-h5 right">Calculated at checkout</h5>
      </div>
      <Button
        handleClick={() => {
          window.open(checkoutEC?.webUrl);
        }}
        title="CHECK OUT"
        bg="#fff"
        color="#393d46"
        border="#393d46"
        hover="#393d46"
        radius="12px"
      />
      <p>Estimated shipping 1-7 days</p>
    </Container>
  );
};
export default CartTotal;

const Container = styled(motion.div)`
  background: #fff;
  padding: 2em 1em;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: rgb(237 239 247 / 47%) 0px 10px 20px,
    rgb(237 239 247 / 47%) 0px 6px 6px;

  border-radius: 12px;
  .cart-total-row {
    width: 100%;
    display: flex;
    margin: 1em 0;
    align-items: center;
    justify-content: space-between;
  }
  .cart-total-h5 {
    font-weight: 300 !important;
    font-size: 0.8rem;
  }
  .cart-total-h4 {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 1.2rem;
    font-weight: 500 !important;
  }
  .right {
    margin-left: 0.5em;
  }
  p {
    margin-top: 1em;
    font-size: 0.8rem;
    color: #222;
  }
  @media only screen and (min-width: 1200px) {
    position: sticky;
    top: 110px;
  }
`;
