import React, { useRef, useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion/dist/framer-motion";
import CustomImage from "../elements/CustomImage";
import CustomCheckbox from "../elements/CustomCheckbox";
import ClientContext from "../../contexts/ClientContext";

const AddToCartPopup = ({ product, handleClose }) => {
  const divRef = useRef();
  const history = useHistory();
  const [Qte, setQte] = useState(1);
  const [productSize, setProductSize] = useState(product?.size[0]);
  const [productColor, setProductColor] = useState(product?.colors[0]?.name);
  const { addToCart, isOpen, setIsOpen } = useContext(ClientContext);

  const handleSelect = (value) => {
    setProductColor(value);
  };

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
  const parentAnimations = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.3 },
    },
  };
  const childAnimations = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
    },
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
        <div className="popup-product-image">
          <CustomImage
            width="100%"
            height="100%"
            objectFit="cover"
            src={product?.image}
            alt={`${product?.name}-image`}
            className="collection-card-image"
          />
        </div>
        <motion.div
          variants={parentAnimations}
          initial="hidden"
          animate="show"
          className="popup-product-info"
        >
          <motion.div variants={childAnimations} className="modal-close-svg">
            <button onClick={handleClose}>
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
          </motion.div>
          <motion.h2 variants={childAnimations}>{product?.name}</motion.h2>
          <motion.div className="price-div" variants={childAnimations}>
            <h3>
              {new Intl.NumberFormat("fr-FR", {
                style: "currency",
                currency: "MAD",
              }).format(product?.price)}
            </h3>
            <p className="p-extra-info">
              Tax included. Shipping calculated at checkout.
            </p>
            <motion.div className="stock-container" variants={childAnimations}>
              {product?.availability ? (
                <>
                  <div className="stock-dot green-bg" />
                  <p className="stock-p stock-green">In stock</p>
                </>
              ) : (
                <>
                  <div className="stock-dot red-bg" />
                  <p className="stock-p stock-red">Out of stock</p>
                </>
              )}
            </motion.div>
          </motion.div>
          <motion.div
            className="product-variants-div"
            variants={childAnimations}
          >
            <p className="product-variants-p">Color</p>
            <div className="radio-btn-wrp">
              {product?.colors.map((item, index) => {
                return (
                  <CustomCheckbox
                    color={item.hex}
                    title="green"
                    value={item.name}
                    checked={productColor}
                    key={`custom-checkbox-${index}`}
                    handleSelectChange={handleSelect}
                  />
                );
              })}
            </div>
          </motion.div>
          <motion.div
            className="product-variants-div"
            variants={childAnimations}
          >
            <p className="product-variants-p">Size</p>
            <select
              name="sizes"
              id="sizes"
              onChange={(e) => setProductSize(e.target.value)}
            >
              {product?.size.map((item, index) => {
                return (
                  <option value={item} key={`select-option-${index}`}>
                    {item}
                  </option>
                );
              })}
            </select>
          </motion.div>
          <motion.div
            variants={childAnimations}
            className="product-qte-controls"
          >
            <input
              type="number"
              id="points"
              name="points"
              className="inc-input"
              step="1"
              min="1"
              value={Qte}
              onChange={(e) => setQte(parseInt(e.target.value))}
            />
            <button
              className="add-cart-btn"
              onClick={() => {
                addToCart(product, Qte, productSize, productColor);
                setIsOpen(!isOpen);
                handleClose();
              }}
              disabled={product?.availability === false}
            >
              ADD TO CART
            </button>
            <button
              className="add-cart-btn"
              onClick={() => {
                history.push(`/product-details/${product.slug}`);
              }}
            >
              VIEW FULL PRODUCT
            </button>
          </motion.div>
        </motion.div>
      </Container>
    </PopupWrap>
  );
};

export default AddToCartPopup;

const Container = styled(motion.div)`
  width: clamp(300px, 90%, 900px);
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;

  h2 {
    color: #393d46;
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.5em;
  }
  h3 {
    color: #68768e;
    opacity: 0.7;
    font-weight: 600;
    font-size: 1.2rem;
  }
  .popup-product-info {
    padding: 1em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .modal-close-svg {
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
  }
  .stock-container {
    display: flex;
    align-items: center;
    gap: 0.5em;
    padding-top: 0.5em;
    .stock-dot {
      width: 10px;
      height: 10px;
      background: red;
      border-radius: 50%;
    }
    .stock-p {
      font-size: 12px;
      font-weight: 500;
    }
    .green-bg {
      background: #ace1af;
    }
    .stock-green {
      color: #ace1af;
    }
    .red-bg {
      background: #fd5c63;
    }

    .stock-red {
      color: #fd5c63;
    }
  }
  .product-variants-div {
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75em 0;
    .radio-btn-wrp {
      display: flex;
      gap: 0.5em;
    }
    select {
      color: #000;
      background-color: transparent;
      font: inherit;
      width: 100px;
      padding: 0.75em 1em;
      border: 0.1rem solid #eee;
      border-radius: 0;
      cursor: pointer;
    }
  }
  .product-variants-p {
    font-size: 14px;
    color: #68768e;
  }
  .p-extra-info {
    color: #68768e;
    opacity: 0.7;
    font-weight: 400;
    font-size: 12px;
    text-align: left;
    margin: 0.5em 0;
  }
  .product-qte-controls {
    margin-top: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 0.5em;
    .inc-input {
      width: 100%;
      padding: 10px 5px;
      font-size: 14px;
      border-radius: 7px;
      border: 2px solid rgba(0, 0, 0, 0.05);
    }
    .add-cart-btn {
      background: #000;
      width: 100%;
      color: #fff;
      padding: 1em;
      font-size: 14px;
      border-radius: 7px;
      &:disabled {
        background: #dddddd;
        cursor: not-allowed;
      }
    }
  }
  @media only screen and (max-width: 900px) {
    width: 100%;
    grid-template-columns: 100%;
    border-radius: 12px 12px 0 0;
    .popup-product-image {
      display: none;
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
