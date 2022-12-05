import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";
import useHasBeenViewed from "../hooks/useHasBeenViewed";
import { Link } from "react-router-dom";
import Layout from "../layouts/DefaultLayout";
import CustomHelmet from "../components/elements/CustomHelmet";
import Button from "../components/elements/Button";
import CartTotal from "../components/CartComponents/CartTotal";
import CartItem from "../components/CartComponents/CartItem";
import { productList } from "../utils/Products";
import ClientContext from "../contexts/ClientContext";
import SimilarProductsList from "../components/CartComponents/SimilarProductList";

const CartPage = () => {
  const H1Variants = {
    hidden: { opacity: 0, y: "100px" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, type: "Inertia" },
    },
  };
  const parentAnimations = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.5, duration: 0.5 },
    },
    exit: {
      opacity: 0,
    },
  };
  const childAnimations = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  const [similarProducts, setSimilarProducts] = useState([]);
  const [hasBeenViewed, ref] = useHasBeenViewed();
  const { cartItems, updateProductQte, deleteProduct } =
    useContext(ClientContext);

  useEffect(() => {
    const tempArr = productList.filter(
      (i) => !cartItems.find((f) => f.slug === i.slug)
    );
    setSimilarProducts(tempArr);
  }, [cartItems]);

  const getTotal = () => {
    let total = 0;
    cartItems.map((item) => {
      total = total + item.price * item.qte;
    });
    return total;
  };

  if (cartItems.length === 0) {
    return (
      <Layout>
        <Container
          exit={{
            opacity: 0,
            transition: { ease: "easeInOut" },
          }}
        >
          <CustomHelmet title="Cart" />
          <motion.div
            ref={ref}
            animate={hasBeenViewed ? "visible" : "hidden"}
            initial="hidden"
            variants={H1Variants}
            className="empty-cart-wrp"
          >
            <h1>Your cart is empty.</h1>

            <Link to="/">
              <Button
                title="Return to Shop"
                border="#393d46"
                hover="#393d46"
                bg="#fff"
                color="#393d46"
                radius="12px"
                margin="3em"
              />
            </Link>
          </motion.div>
        </Container>
      </Layout>
    );
  }

  return (
    <Layout>
      <Container
        exit={{
          opacity: 0,
          transition: { ease: "easeInOut" },
        }}
      >
        <CustomHelmet title="Panier" />
        <div className="cart-container">
          <motion.h2 animate="visible" initial="hidden" variants={H1Variants}>
            Your cart
          </motion.h2>
          <div className="cart-content-wrp">
            <motion.div
              className="cart-product-list"
              exit="exit"
              initial="hidden"
              animate="show"
              variants={parentAnimations}
            >
              {cartItems.map((i, index) => {
                return (
                  <CartItem
                    qte={i.qte}
                    name={i.name}
                    slug={i?.slug}
                    img={i.image}
                    price={i.price}
                    description={i.desc}
                    updateQte={updateProductQte}
                    animations={childAnimations}
                    deleteProduct={deleteProduct}
                    selectedSize={i?.selectedSize}
                    selectedColor={i?.selectedColor}
                    key={`cart-product-list-${index}`}
                  />
                );
              })}
            </motion.div>
            <CartTotal price={getTotal()} />
          </div>
        </div>
        <SimilarProductsList
          name="You May Also Like"
          products={similarProducts}
        />
      </Container>
    </Layout>
  );
};

export default CartPage;

const Container = styled(motion.div)`
  .cart-container {
    padding: 2em 150px;
  }
  h2 {
    color: #393d46;
    font-size: 2.5rem;
    font-weight: 400;
    line-height: 2em;
    letter-spacing: 2px;
    grid-column: 1/3;
    margin: 0.5em 0;
  }
  .empty-cart-wrp {
    min-height: calc(100vh - 150px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      font-weight: 300 !important;
      text-align: center;
      line-height: 1.5em;
      margin-bottom: 0.75em;
      margin-top: 2em;
      color: #393d46;
    }
  }
  .cart-top-section {
    padding: 1em;
    h3 {
      font-weight: 300 !important;
      font-size: 2rem;
    }
    .cart-top-section-sub {
      margin-top: 0.5em;
      font-weight: 600;
      color: #222;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .sort {
        display: flex;
        align-items: center;
        justify-content: center;
        p {
          margin-right: 0.5em;
        }
      }
    }
  }
  .cart-content-wrp {
    display: grid;
    grid-template-columns: 60% 40%;
    gap: 1em;
  }
  .cart-product-list {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  @media only screen and (max-width: 1200px) {
    .cart-container {
      padding: 2em 1em;
    }
    h2 {
      font-size: 2rem;
    }
    .cart-content-wrp {
      grid-template-columns: 100% !important;
      grid-template-rows: auto;
    }
  }
  @media only screen and (max-width: 768px) {
    .cart-container {
      padding: 1em;
    }
    h2 {
      font-size: 1.5rem;
    }
  }
  @media only screen and (max-width: 600px) {
    .cart-top-section-sub {
      flex-direction: column;
    }
    .cart-top-section {
      h3 {
        width: fit-content;
        margin: 0 auto;
      }
    }
  }
`;
