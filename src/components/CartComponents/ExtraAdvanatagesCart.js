import React, { useRef } from "react";
import styled from "styled-components";
import { motion, useInView } from "framer-motion/dist/framer-motion";
import AdvantagesCart from "../elements/AdvantagesCart";

const ExtraAdvantagesCart = () => {
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
    <Container ref={ref}>
      <motion.h2
        animate={isInView ? "show" : "hidden"}
        initial="hidden"
        variants={H2Animations}
      >
        Why Choose Us?
      </motion.h2>
      <motion.div
        className="test-new-div"
        animate={isInView ? "show" : "hidden"}
        initial="hidden"
        variants={parentAnimations}
      >
        <motion.div className="test-new-div-item" variants={childAnimations}>
          <h5>100% Guarantee</h5>
          <p>
            Not happy with your purchase? Get 100% money back by returning
            within 7 days of purchase
          </p>
        </motion.div>
        <motion.div className="test-new-div-item" variants={childAnimations}>
          <h5>Express delivery</h5>
          <p>
            Don't feel like waiting? Our express delivery service ensures you
            receive your new items within 5 business days.
          </p>
        </motion.div>
        <motion.div className="test-new-div-item" variants={childAnimations}>
          <h5>24/7 Support</h5>
          <p>
            We have the friendliest and most dedicated customer support who stay
            online 24/7 to help you with your needs.
          </p>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default ExtraAdvantagesCart;

const Container = styled.div`
  margin: 4em 150px;
  .test-new-div {
    display: grid;
    grid-gap: 1em;
    grid-template-columns: 1fr;
    .test-new-div-item {
      padding: 5em 0;
      display: grid;
      grid-gap: 1em;
      align-items: center;
      grid-template-columns: 1fr 2fr;
      border-bottom: 2px solid #eee;
      h5 {
        font-size: 2rem;
        color: #393d46;
        font-weight: 700;
        line-height: 1.5em;
      }
      p {
        color: #68768e;
        font-size: 15px;
        font-weight: 400;
        line-height: 1.8em;
      }
    }
  }
  h2 {
    color: #393d46;
    font-size: 60px;
    font-weight: 400;
    line-height: 1.5em;
  }
  .carts-items-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1em;
    margin: 2em 0;
  }
  @media only screen and (max-width: 1200px) {
    padding: 1em;
    margin: 2em 1em 4em 1em;
    h2 {
      margin: 1em 0;
      font-size: 40px;
    }
  }
  @media only screen and (max-width: 1000px) {
    .test-new-div {
      .test-new-div-item {
        padding: 3em 0;
        grid-gap: 2em;
        grid-template-columns: 100%;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    h2 {
      font-size: 1.5rem;
    }
    .carts-items-container {
      grid-template-columns: 100% !important;
    }
    .test-new-div {
      .test-new-div-item {
        grid-gap: 1em;
        h5 {
          font-size: 1.25rem;
        }
        p {
          font-size: 13px;
        }
      }
    }
  }
`;
