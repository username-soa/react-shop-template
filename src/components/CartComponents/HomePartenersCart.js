import React, { useRef } from "react";
import styled from "styled-components";
import { motion, useInView } from "framer-motion/dist/framer-motion";
import rebook from "../../assets/rebook.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import puma from "../../assets/puma.png";

const HomePartnersCart = () => {
  const parentAnimations = {
    hidden: { opacity: 0, y: "100px" },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.3 },
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
      variants={parentAnimations}
      ref={ref}
      animate={isInView ? "show" : "hidden"}
      initial="hidden"
    >
      <motion.div variants={childAnimations}>
        {" "}
        <img src={rebook} alt="partner-logo" />
      </motion.div>
      <motion.div variants={childAnimations}>
        {" "}
        <img src={adidas} alt="partner-logo" />
      </motion.div>
      <motion.div variants={childAnimations}>
        {" "}
        <img src={nike} alt="partner-logo" />
      </motion.div>
      <motion.div variants={childAnimations}>
        {" "}
        <img src={puma} alt="partner-logo" />
      </motion.div>
    </Container>
  );
};

export default HomePartnersCart;

const Container = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #fff;
  padding: 4em 1em;
  margin: 4em 150px;
  box-shadow: 0px 50px 130px 0px rgb(57 61 70 / 15%);
  img {
    opacity: 0.6;
    transition: all 0.3s ease;
    &:hover {
      opacity: 1;
    }
  }
  @media only screen and (max-width: 1200px) {
    margin: 4em 2em;
    img {
      width: 50px;
      aspect-ratio: 16/9;
    }
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 1em;
    img {
      margin: 1em 0;
    }
  }
`;
