import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";

const FeedBack = ({ message, bg, opacity, color }) => {
  const feedbackAnimations = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
    },
    exit: { opacity: 0 },
  };
  return (
    <Container
      bg={bg}
      exit="exit"
      color={color}
      animate="show"
      initial="hidden"
      opacity={opacity}
      className="feedback"
      variants={feedbackAnimations}
    >
      <span>{message}</span>
    </Container>
  );
};

export default FeedBack;

const Container = styled(motion.div)`
  transition: all 0.3s;
  background: ${(props) => (props.bg ? props.bg : "#000")};
  border-radius: 7px;
  padding: 0.5em 0.75em;
  width: fit-content;
  height: fit-content;
  margin: 0 1em;
  position: fixed;
  right: 10px;
  bottom: 10px;
  z-index: 99999;
  span {
    color: ${(props) => (props.color ? props.color : "#000")};
    font-size: 14px;
    opacity: 0.9;
  }
`;
