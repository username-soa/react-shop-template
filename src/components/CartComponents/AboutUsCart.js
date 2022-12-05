import React, { useRef } from "react";
import styled from "styled-components";
import { motion, useInView } from "framer-motion/dist/framer-motion";
import img from "../../assets/collection2.png";

const AboutUsCart = () => {
  const ImageVariants = {
    hidden: { y: "100px", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: 0.5, type: "Inertia" },
    },
  };

  const parentAnimations = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };
  const childAnimations = {
    hidden: { opacity: 0, y: "100px" },
    show: {
      opacity: 1,
      y: 0,
    },
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <Container ref={ref}>
      <motion.div
        className="about-us-cart-img-container"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={ImageVariants}
      >
        <img src={img} alt="about-us" />
      </motion.div>

      <motion.div
        className="about-main-content"
        initial="hidden"
        animate="show"
        variants={parentAnimations}
      >
        <motion.h3 variants={childAnimations}>About us</motion.h3>
        <motion.h2 variants={childAnimations}>Our mission & vision</motion.h2>
        <motion.p variants={childAnimations}>
          We are a team of dedicated, hard-working individuals with a passion
          for fashion and providing quality products and services to our
          customers.
        </motion.p>
        <motion.p variants={childAnimations}>
          We believe that fashion is simply a medium for self-expression and
          strive to help our customers express themselves with our trendy,
          stylish designs made from only the best quality fabric.{" "}
        </motion.p>
        <motion.div className="about-main-row" variants={childAnimations}>
          <p className="p-title">Find us : </p>
          <p className="p-data">
            N° 19 Rue Tambouktou Cité El Massira Agadir, Maroc
          </p>
          <p className="p-data">shop.contact@gmail.com</p>
          <p className="p-data">+212 528230735</p>
        </motion.div>
        <motion.div className="about-main-row" variants={childAnimations}>
          <p className="p-title">Follow us : </p>
          <a
            className="social-link"
            href="https://www.twitter.com"
            target="_blank"
            rel="noreferrer"
          >
            <p className="p-data">Twitter</p>
          </a>
          <a
            className="social-link"
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer"
          >
            <p className="p-data">Facebook</p>
          </a>
          <a
            className="social-link"
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
          >
            <p className="p-data">Instagram</p>
          </a>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default AboutUsCart;

const Container = styled.div`
  height: calc(100vh - 180px);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2em;
  overflow: hidden;
  padding: 0 150px;
  margin-bottom: 4em;

  .about-main-content {
    padding: 0;
    display: flex;
    flex-direction: column;
    /* align-items: flex-start; */
    justify-content: center;
  }
  .about-us-cart-img-container {
    height: calc(100vh - 180px);
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  h2 {
    color: #393d46;
    font-size: 3rem;
    font-weight: 500;
    line-height: 150%;
    margin-bottom: 0.5em;
  }
  h3 {
    color: #393d46;
    opacity: 0.7;
    font-weight: 400;
    font-size: 1.5rem;
    margin-bottom: 0.5em;
    line-height: 150%;
  }
  p {
    color: #68768e;
    text-align: justify;
    font-weight: 500;
    font-size: 1rem;
    line-height: 150%;
    margin: 1em 0px;
  }
  .about-main-row {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.75em;
    padding: 1em 0;
  }
  .p-title {
    text-transform: uppercase;
    font-weight: bold;
    font-style: italic;
    color: #393d46;
    font-size: 16px;
    opacity: 0.9;
    margin: 0.25em 0px;
  }
  .p-data {
    text-align: center;
    color: rgb(0, 0, 0);
    font-weight: 500;
    font-size: 0.85rem;
    line-height: 150%;
    margin: 0px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    &:hover {
      opacity: 0.8;
    }
  }

  @media only screen and (max-width: 1200px) {
    padding: 1em 2em;
    h2 {
      font-size: 30px;
    }
    h3 {
      font-size: 20px;
    }
    .about-us-cart-container {
    }
  }
  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr !important;
    grid-template-rows: auto auto;
    height: fit-content;
    .about-main-content {
      grid-row: 1/2;
      padding: 2em 0;
    }
    .about-us-cart-img-container {
      display: flex;
      align-items: center;
      justify-content: center;
      grid-row: 2/3;
    }
  }
  @media only screen and (max-width: 768px) {
    h2 {
      font-size: 24px;
    }
    h3 {
      font-size: 18px;
    }
    p {
      font-size: 14px;
    }
  }
`;
