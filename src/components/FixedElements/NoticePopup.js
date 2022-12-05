import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";

const NoticePopup = ({ handleClose, title, description }) => {
  const parentAnimations = {
    hidden: { opacity: 0, scale: 0 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.3 },
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
        animate="visible"
        initial="show"
        exit="exit"
        variants={parentAnimations}
        ref={divRef}
      >
        <div className="notice-popup-top">
          <motion.h2 variants={childAnimations}>{title}</motion.h2>
          <motion.button
            onClick={handleClose}
            variants={childAnimations}
            className="notice-popup-top-close-btn"
          >
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
        <motion.p variants={childAnimations} className="notice-popup-p">
          {description}
        </motion.p>
      </Container>
    </PopupWrap>
  );
};

export default NoticePopup;

const PopupWrap = styled.div`
  top: 0;
  left: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  display: flex;
  position: fixed;
  overflow: hidden;
  align-items: center;
  transition: all 0.3s;
  justify-content: center;
  backdrop-filter: blur(3px);
  background: rgba(0, 0, 0, 0.4);
  -webkit-backdrop-filter: blur(3px);
`;
const Container = styled(motion.div)`
  padding: 1em;
  border-radius: 12px;
  background-color: #fff;
  width: clamp(300px, 90%, 900px);
  .notice-popup-top-close-btn {
    background: #eee;
    padding: 15px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .notice-popup-top {
    display: flex;
    align-items: center;
    padding-bottom: 0.5em;
    margin-bottom: 1em;
    border-bottom: 1px solid #eee;
    justify-content: space-between;
    h2 {
      color: #393d46;
      font-size: 2rem;
      font-weight: 600;
      line-height: 1.5em;
    }
  }
  .notice-popup-p {
    font-size: 14px;
    color: #68768e;
  }
  @media only screen and (max-width: 900px) {
    width: 90%;
    .notice-popup-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      h2 {
        font-size: 1.5rem;
      }
    }
  }
`;
