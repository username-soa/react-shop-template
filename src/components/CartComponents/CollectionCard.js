import React, { useRef } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { motion, useInView } from "framer-motion/dist/framer-motion";
import CustomImage from "../elements/CustomImage";

const CollectionCard = ({ image, name, slug }) => {
  const parentAnimations = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,

      transition: { delayChildren: 0.3, staggerChildren: 0.3 },
    },
  };
  const childAnimations = {
    hidden: { opacity: 0, y: "10px" },
    show: {
      opacity: 1,
      y: 0,
    },
  };
  const history = useHistory();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <Container
      ref={ref}
      variants={childAnimations}
      onClick={() => {
        history.push(`/collections/${slug}`);
      }}
    >
      <CustomImage
        className="collection-card-image"
        src={image}
        alt={`${name}-image`}
        objectFit="cover"
        width="100%"
        height="100%"
      />
      <span className="collection-card__bg" />
      <motion.div
        className="collection-card-details"
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={parentAnimations}
      >
        <motion.h6 variants={childAnimations}>{name}</motion.h6>
        <motion.div variants={childAnimations}>
          <Link to={`/collections/${slug}`}>Shop Collection</Link>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default CollectionCard;

const Container = styled(motion.div)`
  overflow: hidden;
  aspect-ratio: 16/9;
  position: relative;
  box-shadow: rgb(237 239 247 / 47%) 0px 10px 20px,
    rgb(237 239 247 / 47%) 0px 6px 6px;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    .collection-card-image {
      transform: scale(1.05);
    }
  }
  .collection-card-image {
    height: 100%;
    width: 100%;
    transition: all 0.3s ease-in-out;
    object-fit: cover;
  }
  .collection-card__bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
    opacity: 0.4;
    z-index: 2;
  }
  .collection-card-details {
    z-index: 4;
    position: absolute;
    bottom: 0;
    padding: 1.25em;
    display: flex;
    flex-direction: column;
    gap: 0.25em;
    h6 {
      color: #eee;
      font-size: 1.8rem;
      font-weight: 700;
      line-height: 150%;
    }
    a {
      border-bottom: 1px solid #fff;
      font-size: 13px;
      color: #eee;
      width: fit-content;
      padding: 1px 3px;
    }
  }
  @media only screen and (max-width: 768px) {
    .collection-card-details {
      padding: 1em;
      h6 {
        font-size: 1.4rem;
      }
      a {
        font-size: 11px;
      }
    }
  }
`;
