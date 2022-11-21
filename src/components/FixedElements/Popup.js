import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";
import PopupWrap from "./PopupWrap";
// import DoneIcon from "../../assets/success.svg";
// import ErrorIcon from "../../assets/error.svg";
import Button from "../elements/Button";

const Popup = ({ type, title, description, handleClose }) => {
  const divRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (divRef.current && !divRef.current.contains(event.target)) {
        handleClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [divRef]);

  const variants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { delay: 0.2 },
    },
    exit: { scale: 0, opacity: 0 },
  };

  return (
    <PopupWrap>
      <Container
        animate="visible"
        initial="hidden"
        exit="exit"
        variants={variants}
        ref={divRef}
      >
        {/* {type === "success" ? <DoneIcon /> : <ErrorIcon />} */}

        <div className="popup-info">
          <h3 className="popup-title">{title}</h3>
          <p className="popup-description">{description}</p>
        </div>
        <div className="popup-btn">
          <Button
            handleClick={handleClose}
            title="Close"
            type="button"
            bg="#000"
            color="#fff"
            radius="10px"
            border={"transparent"}
            margin="0.25em"
          />
        </div>
      </Container>
    </PopupWrap>
  );
};

export default Popup;

const Container = styled(motion.div)`
  width: clamp(300px, 50%, 500px);
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0.5em;
  .popup-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .popup-title {
    font-size: 1.4rem;
    color: rgba(0, 0, 0, 0.8);
  }
  .popup-description {
    font-size: 0.95rem;
    color: rgba(0, 0, 0, 0.8);
    margin: 0.5em 0 0.5em 0;
  }
  svg {
    transform: translateY(-25px);
  }
  .popup-btn {
    margin: 0.5em 0 0.75em 0;
  }
  @media only screen and (max-width: 768px) {
    .popup-title {
      font-size: 1.25rem;
    }
    .popup-description {
      font-size: 0.9rem;
      text-align: center;
      margin-top: 0.75em;
    }
  }
  @media only screen and (max-width: 500px) {
    width: clamp(250px, 50%, 500px);
  }
`;
