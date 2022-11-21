import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion/dist/framer-motion";

const CartSideMenuItem = ({
  qte,
  img,
  name,
  slug,
  price,
  closeMenu,
  updateQte,
  animations,
  description,
  selectedSize,
  selectedColor,
}) => {
  const history = useHistory();
  const [productQte, setProductQte] = useState(qte);

  useEffect(() => {
    const val = isNaN(parseInt(productQte)) ? 1 : parseInt(productQte);
    updateQte(slug, val);
  }, [productQte]);

  return (
    <Container variants={animations}>
      <div className="cart-items-img">
        <img
          loading="lazy"
          src={img}
          alt="cart-item-image"
          onClick={() => {
            closeMenu();
            history.push(`/product-details/${slug}`);
          }}
        />
      </div>
      <div className="cart-items-info">
        <h4>{name}</h4>
        <p className="text-p">{description}</p>
        <div className="div-flex">
          <span className="text-span">Size : {selectedSize}</span>
          <span className="text-span">Color : {selectedColor}</span>
        </div>
      </div>
      <div className="cart-items-qte-control">
        <div className="counting">
          <input
            min="1"
            type="number"
            value={productQte}
            onChange={(e) => {
              setProductQte(e.target.value);
            }}
          />
        </div>
        <h4 className="h4-price">
          {new Intl.NumberFormat("fr-FR", {
            style: "currency",
            currency: "MAD",
          }).format(price)}
        </h4>
      </div>
    </Container>
  );
};

export default CartSideMenuItem;

const Container = styled(motion.div)`
  padding: 0.75em 1em;
  display: grid;
  gap: 10px;
  grid-template-columns: 100px auto;
  .cart-items-img {
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
  .cart-items-info {
    h4 {
      font-size: 14px;
      line-height: 150%;
      font-weight: 500;
      margin-bottom: 0.25em;
    }
    .text-p {
      font-size: 13px;
    }
  }
  .cart-items-qte-control {
    grid-column: 1/3;
    display: flex;
    align-items: center;
    justify-content: space-around;
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
  .counting {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25em;

    input {
      width: 50px;
      padding: 0.5em;
      border-radius: 7px;
      background: #f2f4f8;
      height: fit-content;
      margin: auto 0;
    }
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: 80px auto;
    .cart-items-info {
      .text-p {
        font-size: 12px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        line-clamp: 2;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
    .h4-price {
      font-size: 14px;
    }
    .div-flex {
      .text-span {
        font-size: 10px;
        padding: 4px 6px;
      }
    }
  }
`;
