import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion/dist/framer-motion";

const CartSideMenuItem = ({
  qte,
  uid,
  cid,
  img,
  name,
  slug,
  price,
  updateQte,
  animations,
  description,
  gotoProduct,
}) => {
  const history = useHistory();

  return (
    <Container variants={animations}>
      <div className="cart-items-img">
        <img
          loading="lazy"
          src={img}
          alt="cart-item-image"
          onClick={() => {
            // gotoProduct();
            history.push(`/product-detail/${slug}`);
          }}
        />
      </div>
      <div className="cart-items-info">
        <h4>{name}</h4>
        <p className="text-p">{description}</p>
      </div>
      <div className="cart-items-qte-control">
        <div className="counting">
          <button
            onClick={() => {
              updateQte(-1, uid);
            }}
          >
            -
          </button>
          <input
            type="text"
            value={qte}
            onChange={() => {
              return null;
            }}
          />
          <button
            onClick={() => {
              updateQte(1, uid);
            }}
          >
            +
          </button>
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
      margin: 0.75em 0;
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

  .counting {
    display: flex;
    button {
      font-size: 1.7rem;
      padding: 0.25em;
      height: fit-content;
      margin: auto 0;
      cursor: pointer;
      background: transparent;
    }
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
      h4 {
        margin: 0.5em 0;
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
    .h4-price {
      font-size: 14px;
    }
  }
`;
