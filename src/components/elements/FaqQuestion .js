import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion/dist/framer-motion";
import { ReactComponent as CloseIcon } from "../../assets/svgs/close.svg";

const FaqQuestion = ({ title, children, animations }) => {
  const ExtraInfoVariants = {
    hidden: { opacity: 0, y: "-100px" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "Inertia" },
    },
  };

  const [open, setOpen] = useState(false);

  return (
    <Container variants={animations}>
      <div
        className="question-wrp"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <h4>{title}</h4>
        <CloseIcon
          className={open ? "rotated" : null}
          onClick={() => {
            setOpen(!open);
          }}
        />
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            className="extra-info active"
            animate={open ? "visible" : ""}
            initial="hidden"
            variants={ExtraInfoVariants}
            exit={{
              opacity: 0,
              y: "100vh",
              transition: { type: "Inertia" },
            }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default FaqQuestion;

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(
    to right,
    #222 0 10%,
    rgba(255, 255, 255, 0) 10%
  );
  background-position: bottom;
  background-size: 8px 1px;
  background-repeat: repeat-x;
  cursor: pointer;
  h4 {
    color: rgb(29, 43, 63);
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0px;
    line-height: 1.5em !important;
    transition: all 0.3s ease;
  }
  .question-wrp {
    padding: 2em 0;
    display: grid;
    grid-template-columns: auto 20px;
    gap: 1em;
    &:hover {
      h4 {
        opacity: 0.8;
      }
      svg {
        opacity: 0.8;
      }
    }
  }
  .extra-info {
    padding: 0.5em 0 1em;
    margin-bottom: 0.5em;
    display: none;
    height: 0;
    transition: all 0.3s ease-in-out;
    &.active {
      display: flex;
      height: fit-content;
    }
  }
  svg {
    width: 16px;
    height: 16px;
    cursor: pointer;
    transform: rotate(45deg);
    transition: all 0.3s ease-in-out;
    margin: auto;
    fill: #393d46;
    &.rotated {
      transform: rotate(0deg);
    }
  }

  @media only screen and (max-width: 768px) {
    .extra-info {
      p {
        font-size: 12px;
      }
    }
    h4 {
      font-size: 14px;
      line-height: 1.2rem;
    }
    .question-wrp {
      grid-template-columns: 100%;
      gap: 0;
    }
    svg {
      display: none;
    }
  }
`;
