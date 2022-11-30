import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion/dist/framer-motion";
import { useHistory, Link } from "react-router-dom";
import CustomImage from "../elements/CustomImage";
import { ReactComponent as ChoppingCart } from "../../assets/svgs/shopping-cart.svg";

const ProductCartV2 = ({
  slug,
  name,
  price,
  image,
  addToCart,
  animations,
  hoverImage,
  availability,
}) => {
  const history = useHistory();
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  const animationVariants = {
    hidden: { opacity: 0, x: "10px" },
    exit: { opacity: 0, x: "-10px" },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <Container
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      variants={animations}
    >
      <div
        className="product-card-images"
        onClick={() => history.push(`/product-details/${slug}`)}
      >
        {isHovering ? (
          <CustomImage
            className="collection-card-image"
            src={image}
            alt={`${name}-image`}
            objectFit="cover"
            width="100%"
            height="100%"
          />
        ) : (
          <CustomImage
            className="collection-card-image"
            src={hoverImage}
            alt={`${name}-image`}
            objectFit="cover"
            width="100%"
            height="100%"
          />
        )}
      </div>
      <div className="product-card-description">
        <Link to={`/product-details/${slug}`}>
          <h3 className="product-cart-h2">{name}</h3>
        </Link>
        <p>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2,
          }).format(price)}
        </p>
        <AnimatePresence exitBeforeEnter>
          {isHovering && (
            <motion.button
              exit="exit"
              initial="hidden"
              animate="visible"
              onClick={addToCart}
              className="hover-btn"
              variants={animationVariants}
              disabled={availability === false}
            >
              <ChoppingCart />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
      {availability === false && (
        <div className="out-of-stock">Out of stock</div>
      )}
    </Container>
  );
};

export default ProductCartV2;

const Container = styled(motion.div)`
  position: relative;
  box-shadow: rgb(237 239 247 / 47%) 0px 10px 20px,
    rgb(237 239 247 / 47%) 0px 6px 6px;
  aspect-ratio: 1/1.6;
  display: grid;
  grid-template-rows: auto 80px;
  background: #fff;
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  .out-of-stock {
    position: absolute;
    top: 10px;
    left: 10px;
    padding: 5px 10px;
    border-radius: 12px;
    font-size: 12px;
    line-height: 1.7rem;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    font-weight: 600;
    background: #fff;
    color: #666666;
  }
  .hover-btn {
    padding: 0.75em;
    background: #000;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 10px;
    bottom: 10px;
    transition: all 0.3s ease-in;
    &:hover {
      transform: scale(1.1);
    }
    &:disabled {
      background-color: #b5b5b5;
      cursor: not-allowed;
      border: none;
    }
    svg {
      width: 15px;
      height: 15px;
      g {
        path {
          fill: #fff !important;
        }
      }
    }
  }
  .product-card-images {
    overflow: hidden;
  }
  .product-card-description {
    padding: 1em 0.75em;
    height: fit-content;
    h3 {
      color: #393d46;
      font-size: 16px;
      font-weight: 500;
      line-height: 150%;
      text-transform: capitalize;
    }
    a {
      width: fit-content;
    }
    p {
      font-size: 12px;
      padding-top: 0.5em;
    }
  }
`;
