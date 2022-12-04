import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";

const AdvantagesCart = ({ Icon, title, text, bg, animations }) => {
  return (
    <Container bg={bg} variants={animations}>
      {Icon ? <Icon /> : null}
      <h3>{title}</h3>
      <p>{text}</p>
    </Container>
  );
};

export default AdvantagesCart;

const Container = styled(motion.div)`
  padding: 2em;
  border-radius: 12px;
  box-shadow: 0px 50px 130px 0px rgb(57 61 70 / 15%);
  background: ${(props) => (props.bg ? props.bg : "#fff")};
  svg {
    width: 50px;
    height: 50px;
  }
  h3 {
    margin: 1em 0;
  }
  h3 {
    color: #393d46;
    font-size: 24px;
    font-weight: 500;
    line-height: 1.5em;
  }
  p {
    color: #68768e;
    font-size: 15px;
    font-weight: 400;
    line-height: 1.8em;
    margin-top: 1em;
  }
  @media only screen and (max-width: 1200px) {
    padding: 1.5em;
    svg {
      width: 35px;
      height: 35px;
    }
    h3 {
      font-size: 18px;
      margin: 0.5em 0;
    }
    p {
      font-size: 14px;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 1em;
  }
`;
