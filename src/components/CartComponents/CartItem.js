import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";
import { useHistory } from "react-router-dom";
import { ReactComponent as DeleteIcon } from "../../assets/trash.svg";

const CartItem = ({
  img,
  qte,
  name,
  slug,
  price,
  updateQte,
  animations,
  description,
  selectedSize,
  selectedColor,
  deleteProduct,
}) => {
  const history = useHistory();
  const [productQte, setProductQte] = useState(qte);
  useEffect(() => {
    const val = isNaN(parseInt(productQte)) ? 1 : parseInt(productQte);
    updateQte(slug, val);
  }, [productQte]);

  return (
    <Container variants={animations}>
      <div className="cart-item-image">
        <img
          loading="lazy"
          src={img}
          alt={name}
          onClick={() => {
            history.push(`/product-details/${slug}`);
          }}
        />
      </div>
      <div className="cart-item-info">
        <h4>{name}</h4>
        <p className="text-p">{description}</p>
        <div className="div-flex">
          <span className="text-span">Size : {selectedSize}</span>
          <span className="text-span">Color : {selectedColor}</span>
        </div>
      </div>
      <div className="cart-item-controls">
        <h4 className="product-price">
          {new Intl.NumberFormat("fr-FR", {
            style: "currency",
            currency: "MAD",
          }).format(price)}
        </h4>
        <input
          min="1"
          type="number"
          value={productQte}
          onChange={(e) => {
            setProductQte(e.target.value);
          }}
        />
        <DeleteIcon onClick={() => deleteProduct(slug)} />
      </div>
    </Container>
  );
};
export default CartItem;

const Container = styled(motion.div)`
  background: #fff;
  padding: 0.5em;
  display: grid;
  gap: 0.75em;
  grid-template-columns: 100px 2fr 1fr;
  box-shadow: rgb(237 239 247 / 47%) 0px 10px 20px,
    rgb(237 239 247 / 47%) 0px 6px 6px;
  border-radius: 12px;
  .cart-item-image {
    border: 1px solid #eee;
    border-radius: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      cursor: pointer;
    }
  }
  .cart-item-info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    h4 {
      font-weight: 500;
      line-height: 150%;
      font-weight: 500;
      margin-bottom: 0.25em;
    }
    .text-p {
      font-size: 12px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      line-clamp: 3;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }
  .div-flex {
    display: flex;
    flex-wrap: wrap;
    gap: 0.25em;
    padding-top: 0.35em;
    .text-span {
      font-size: 12px;
      padding: 5px 10px;
      background: #ccc;
      border-radius: 12px;
      color: rgba(0, 0, 0, 0.8);
    }
  }
  .cart-item-controls {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 0.75em 0;
    input {
      width: 50px;
      padding: 0.5em;
      border-radius: 7px;
      background: #f2f4f8;
      height: fit-content;
      margin: auto 0;
    }
    svg {
      cursor: pointer;
      transition: all 0.3s ease;
      &:hover {
        fill: red;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    grid-template-columns: 100px 1fr;
    .cart-item-info {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      h4 {
        font-size: 13px;
      }
      .text-p {
        line-clamp: 2;
        -webkit-line-clamp: 2;
      }
    }
    .div-flex {
      padding-top: 0.25em;
      .text-span {
        font-size: 10px;
        padding: 4px 6px;
      }
    }
    .product-price {
      font-size: 14px;
    }
    .cart-item-controls {
      grid-column: 1/3;
      flex-direction: row;
    }
  }
`;
