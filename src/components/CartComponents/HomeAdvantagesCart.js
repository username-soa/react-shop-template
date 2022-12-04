import React, { useRef } from "react";
import styled from "styled-components";
import { motion, useInView } from "framer-motion/dist/framer-motion";
import AdvantagesCart from "../../components/elements/AdvantagesCart";
import { ReactComponent as packageIcon } from "../../assets/svgs/package.svg";
import { ReactComponent as package2Icon } from "../../assets/svgs/package2.svg";
import { ReactComponent as deliveryIcon } from "../../assets/svgs/delivery.svg";

const HomeAdvantagesCart = () => {
  const H2Animations = {
    hidden: { opacity: 0, y: "100px" },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "Inertia" },
    },
  };
  const parentAnimations = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.4 },
    },
  };
  const childAnimations = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
    },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <Container
      ref={ref}
      animate={isInView ? "show" : "hidden"}
      initial="hidden"
      variants={parentAnimations}
    >
      <motion.h2
        variants={H2Animations}
        animate={isInView ? "show" : "hidden"}
        initial="hidden"
      >
        Stay In Trend With Digital Era
      </motion.h2>
      <div className="carts-items-container">
        <AdvantagesCart
          title="Latest Styles"
          Icon={packageIcon}
          text="Our designs follow the latest fashion styles to help you stay updated with new trends."
          animations={childAnimations}
        />
        <AdvantagesCart
          title="Best Prices"
          Icon={package2Icon}
          text="Enjoy the best prices for high quality clothing and accessories."
          animations={childAnimations}
        />
        <AdvantagesCart
          title="Free Shipping"
          Icon={deliveryIcon}
          text="We provide free shipping worldwide. You can order from anywhere, anytime."
          animations={childAnimations}
        />
      </div>
    </Container>
  );
};

export default HomeAdvantagesCart;

const Container = styled(motion.div)`
  background: #393d46;
  margin: 4em 150px;
  padding: 2em;
  border-radius: 12px;
  box-shadow: 0px 50px 130px 0px rgb(57 61 70 / 15%);
  h2 {
    color: #ffffff;
    font-size: 60px;
    font-weight: 400;
    line-height: 1.5em;
    margin-bottom: 1em;
  }
  .carts-items-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1em;
  }
  @media only screen and (max-width: 1200px) {
    margin: 4em 2em;
    h2 {
      font-size: 30px;
    }
    .carts-items-container {
      gap: 0.75em;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 1em;
    h2 {
      font-size: 24px;
    }
    .carts-items-container {
      grid-template-columns: 100% !important;
      gap: 1em;
    }
  }
`;
