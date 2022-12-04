import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";

const UpdateAddressPopup = ({ children, handleClose, name }) => {
  const variants = {
    hidden: { scale: 0 },
    show: {
      scale: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.2 },
    },
    exit: { scale: 0, opacity: 0 },
  };

  const childAnimations = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
    },
  };
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

  return (
    <PopupWrap>
      <Container
        animate="show"
        initial="hidden"
        exit="exit"
        variants={variants}
        ref={divRef}
        className="overflow-modal-mobile"
      >
        <div className="modal-close-svg">
          <motion.h2 variants={childAnimations} className="modal-close-svg-h2">
            Updating Address : {name}
          </motion.h2>
          <motion.button onClick={handleClose} variants={childAnimations}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 2.41L13.59 1L8 6.59L2.41 1L1 2.41L6.59 8L1 13.59L2.41 15L8 9.41L13.59 15L15 13.59L9.41 8L15 2.41Z"
                fill="currentColor"
                strokeWidth="0.5"
              ></path>
            </svg>
          </motion.button>
        </div>
        <motion.div variants={childAnimations}>{children}</motion.div>
      </Container>
    </PopupWrap>
  );
};

export default UpdateAddressPopup;

const Container = styled(motion.div)`
  padding: 1em;
  display: flex;
  overflow: hidden;
  border-radius: 12px;
  background-color: #fff;
  flex-direction: column;
  width: clamp(300px, 90%, 900px);

  .modal-close-svg {
    display: flex;
    align-items: center;
    z-index: 99;
    button {
      background: #eee;
      padding: 15px;
      border-radius: 50%;
      margin-left: auto;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .modal-close-svg-h2 {
      color: #393d46;
      font-size: 1.5rem;
      font-weight: 600;
      line-height: 1.5em;
    }
  }
  @media only screen and (max-width: 900px) {
    width: 100%;
    grid-template-columns: 100%;
    border-radius: 12px 12px 0 0;
    max-height: 90vh;
    overflow-y: scroll;
    .popup-product-image {
      display: none;
    }
  }
  @media only screen and (max-width: 768px) {
    .modal-close-svg {
      .modal-close-svg-h2 {
        font-size: 1rem;
      }
    }
  }
`;

const PopupWrap = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  margin: 0;
  @media only screen and (max-width: 900px) {
    align-items: flex-end;
  }
`;
