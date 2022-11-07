import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";
import { useHistory, Link } from "react-router-dom";
import testimg from "../../assets/testimg.png";
import Button from "../elements/Button";

const ProductCart = ({ img, title, price, type, uid, cid, animations }) => {
  const history = useHistory();
  return (
    <Container variants={animations}>
      <img
        src={testimg}
        alt="product-image"
        onClick={() => history.push(`/product-details/${uid}/${cid}`)}
      />
      <div className="product-cart-dt">
        <Link to={`/product-details/${uid}/${cid}`}>
          <h2 className="product-cart-h2">{title}</h2>
        </Link>
        <p>
          {new Intl.NumberFormat("fr-FR", {
            style: "currency",
            currency: "MAD",
          }).format(price)}
        </p>
        <Button
          title="Ajouter aux panier"
          bg="#fff"
          color="#393d46"
          border="#393d46"
          hover="#393d46"
          radius="12px"
          margin="1em"
          handleClick={() => {
            console.log("product clicked");
            // setIsOpen(true);
          }}
        />
      </div>
    </Container>
  );
};

export default ProductCart;

const Container = styled(motion.div)`
  background: #fff;
  padding: 2em 1em;
  /* margin: 1em 0.5em; */
  min-width: 260px;
  display: flex;
  flex-direction: column;
  .product-cart-dt {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .product-cart-h2 {
    color: #393d46;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5em;
    margin: 1em 0;
  }
  img {
    object-fit: scale-down;
    cursor: pointer;
  }
  p {
    font-weight: 400;
  }
  @media only screen and (max-width: 1200px) {
  }
  @media only screen and (max-width: 768px) {
  }
`;
