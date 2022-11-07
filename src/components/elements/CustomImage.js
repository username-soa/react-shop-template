import React, { useState, useRef } from "react";
import styled from "styled-components";
import Shimmer from "../skeletons/Shimmer";
import { motion, useInView } from "framer-motion/dist/framer-motion";

const CustomImage = ({
  width,
  height,
  imgHeight = "100%",
  imgWidth = "100%",
  borderRadius = 0,
  objectFit,
  ...props
}) => {
  const imageAnimation = {
    hidden: { opacity: 0, scale: 1.75 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8 },
    },
  };
  const ref = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <Container
      width={width}
      height={height}
      imageWidth={imgWidth}
      imageHeight={imgHeight}
      objectFit={objectFit}
      borderRadius={borderRadius}
      onClick={props.onClick}
      ref={ref}
      style={{ ...props.styles }}
    >
      <div
        className="image-skeleton thumb"
        style={{ visibility: isLoaded ? "hidden" : "visible" }}
      >
        <Shimmer />
      </div>
      <motion.img
        onLoad={() => {
          setIsLoaded(true);
        }}
        className="custom-image full"
        style={{ opacity: isLoaded ? 1 : 0 }}
        alt={props?.alt}
        src={props?.src}
        loading="lazy"
        initial="hidden"
        animate={isInView && isLoaded ? "show" : "hidden"}
        variants={imageAnimation}
      />
    </Container>
  );
};

export default CustomImage;

const Container = styled(motion.div)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  .image-skeleton {
    background: #ddd;
    overflow: hidden;
    border-radius: 4px;
    position: absolute;
    inset: 0;
    margin: auto;
    overflow: hidden;
  }
  .custom-image {
    object-fit: ${(props) =>
      props.objectFit ? props.objectFit : "scale-down"};
  }
  .custom-image,
  .image-skeleton {
    width: ${(props) => props.imageWidth};
    height: ${(props) => props.imageHeight};
    border-radius: ${(props) => props.borderRadius};
  }
  .full {
    transition: opacity 400ms ease 0ms;
  }
  .thumb {
    filter: blur(20px);
    transform: scale(1.1);
    transition: visibility 0ms ease 400ms;
    visibility: visible;
  }
`;
