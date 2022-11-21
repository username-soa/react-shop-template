import React, { useState, useRef, useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";
import CustomCheckbox from "../elements/CustomCheckbox";
import ClientContext from "../../contexts/ClientContext";

const ProductInfo = ({ data }) => {
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
  const ref = useRef(null);
  const [Qte, setQte] = useState(1);
  const [productSize, setProductSize] = useState(data?.size[0]);
  const [productColor, setProductColor] = useState(data?.colors[0]?.name);
  const { addToCart, isOpen, setIsOpen } = useContext(ClientContext);

  const handleSelect = (value) => {
    setProductColor(value);
  };

  return (
    <Container
      ref={ref}
      initial="hidden"
      animate="show"
      variants={parentAnimations}
    >
      <motion.h2 variants={childAnimations}>{data?.name}</motion.h2>
      <motion.div className="price-div" variants={childAnimations}>
        <h3>
          {new Intl.NumberFormat("fr-FR", {
            style: "currency",
            currency: "MAD",
          }).format(data?.price)}
        </h3>
        <p className="p-extra-info">
          Tax included. Shipping calculated at checkout.
        </p>
        <motion.div className="stock-container" variants={childAnimations}>
          {data?.availability ? (
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
      <motion.div className="product-variants-div" variants={childAnimations}>
        <p className="product-variants-p">Color</p>
        <div className="radio-btn-wrp">
          {data?.colors.map((item, index) => {
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
      <motion.div className="product-variants-div" variants={childAnimations}>
        <p className="product-variants-p">Size</p>
        <select
          name="sizes"
          id="sizes"
          onChange={(e) => setProductSize(e.target.value)}
        >
          {data?.size.map((item, index) => {
            return (
              <option value={item} key={`select-option-${index}`}>
                {item}
              </option>
            );
          })}
        </select>
      </motion.div>
      <motion.div
        className="product-description-div"
        variants={childAnimations}
      >
        <p className="product-variants-p">Description</p>
        <p className="p-extra-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </p>
        <p className="p-extra-description">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s. L orem Ipsum is simply dummy text of
          the printing and typesetting industry.
        </p>
      </motion.div>
      <motion.div variants={childAnimations} className="product-qte-controls">
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
            addToCart(data, Qte, productSize, productColor);
            setIsOpen(!isOpen);
          }}
          disabled={data?.availability === false}
        >
          ADD TO CART
        </button>
      </motion.div>
    </Container>
  );
};

export default ProductInfo;

const Container = styled(motion.div)`
  background: #fff;
  padding: 2em;
  display: flex;
  flex-direction: column;
  gap: 1em;
  height: 100%;
  border-radius: 0 15px 15px 0;
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
  .product-description-div {
    padding: 0.75em 0;
  }
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
  .product-variants-p {
    font-size: 14px;
    color: #68768e;
  }
  .p-extra-description {
    color: #68768e;
    opacity: 0.7;
    font-weight: 400;
    font-size: 1rem;
    text-align: justify;
    margin: 1em 0;
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
    gap: 1em;
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

  @media only screen and (max-width: 768px) {
    .product-qte-controls {
      flex-direction: column;
      .inc-input {
        margin: 1em 0;
      }
    }
    h2 {
      font-size: 1.5rem;
    }
  }
`;
