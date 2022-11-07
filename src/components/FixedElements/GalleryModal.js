import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion/dist/framer-motion";

const GalleryModal = ({
  imagesLength,
  handleClose,
  handleNext,
  imgId,
  img,
}) => {
  const fadeDownAnimation = {
    hidden: { opacity: 0, y: "-100vh" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "Inertia" },
    },
    exit: {
      opacity: 0,
      y: "100vh",
      transition: { type: "Inertia" },
    },
  };
  const galleryModalImagesAnimation = {
    enter: (direction) => {
      return {
        x: direction === "left" ? "100vw" : "-100vw",
        opacity: 0,
        transition: {
          x: { type: "Inertia" },
          opacity: { duration: 0.2 },
        },
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction === "right" ? "100vw" : "-100vw",
        opacity: 0,
        transition: {
          x: { type: "Inertia" },
          opacity: { duration: 0.2 },
        },
      };
    },
  };

  const [imageSwipe, setImgSwipe] = useState({
    index: imgId,
    direction: "left",
  });

  const onClose = () => {
    handleClose(false);
  };

  const goNext = () => {
    handleNext(imgId + 1);
    setImgSwipe({ index: imageSwipe.index + 1, direction: "left" });
  };
  const goBack = () => {
    handleNext(imgId - 1);
    setImgSwipe({ index: imageSwipe.index - 1, direction: "right" });
  };
  return (
    <Container
      initial="hidden"
      exit="exit"
      animate="visible"
      variants={fadeDownAnimation}
    >
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        custom={imageSwipe.direction}
      >
        {imageSwipe.index === imgId && (
          <motion.img
            src={img}
            alt="gallery-image"
            initial="enter"
            animate="center"
            exit="exit"
            key={imageSwipe.index}
            custom={imageSwipe.direction}
            variants={galleryModalImagesAnimation}
          />
        )}
      </AnimatePresence>
      <div className="modal-close-svg">
        <button onClick={onClose}>
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
        </button>
      </div>
      {imgId > 1 && (
        <button className="modal-left-arrow" onClick={goBack}>
          &#60;
        </button>
      )}
      {imgId < imagesLength && (
        <button className="modal-right-arrow" onClick={goNext}>
          &#62;
        </button>
      )}
    </Container>
  );
};

export default GalleryModal;

const Container = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  svg {
    fill: #000;
    width: 20px;
    height: 20px;
    cursor: pointer;
    transition: all 0.3 ease-in-out;
    &:hover {
      opacity: 0.8;
    }
  }
  .modal-close-svg {
    position: absolute;
    top: 0;
    right: 0;
    margin: 2em;
    z-index: 99;
    button {
      background: #eee;
      padding: 15px;
      border-radius: 50%;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .modal-left-arrow,
  .modal-right-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 99;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 2rem;
    color: #222;
    transition: all 0.3 ease-in-out;
    &:hover {
      opacity: 0.8;
    }
  }
  .modal-left-arrow {
    left: 20px;
  }
  .modal-right-arrow {
    right: 30px;
    svg {
      transform: rotate(180deg);
    }
  }
  @media only screen and (max-width: 768px) {
    img {
      width: 100%;
    }
    .modal-close-svg {
      margin: 2em 1em;
    }
    .modal-left-arrow,
    .modal-right-arrow {
      background-color: #aaaaaa;
      color: rgba(0, 0, 0, 0.8);
      top: 60%;
    }
  }
  @media screen and (max-width: 600px) {
    svg {
    }
  }
`;
