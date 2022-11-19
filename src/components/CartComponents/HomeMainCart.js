import React from "react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion/dist/framer-motion";
import styled from "styled-components";
import Img from "../../assets/testimg.png";
import Button from "../elements/Button";

const HomeMainCart = ({ collection, data }) => {
  const history = useHistory();
  let cid = "winter-21";

  const parentAnimations = {
    hidden: { opacity: 0, y: "100vh" },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delayChildren: 0.3, staggerChildren: 0.3 },
    },
  };
  const childAnimations = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
    },
  };

  return (
    <Container variants={parentAnimations} initial="hidden" animate="show">
      <div className="category-desc-container">
        <motion.h2 variants={childAnimations}>
          {data ? data.name : "Winter 21’"}
        </motion.h2>
        <motion.p variants={childAnimations}>
          {data
            ? data.description
            : "Winter layer season is here. Check out our trendy new winter collection to stay warm in style."}
        </motion.p>
        {!collection && (
          <>
            <div className="price-container">
              <motion.h5 variants={childAnimations}>Price: </motion.h5>
              <motion.h4 variants={childAnimations}>
                {" "}
                {new Intl.NumberFormat("fr-FR", {
                  style: "currency",
                  currency: "MAD",
                }).format(114)}
              </motion.h4>
            </div>
            <Button
              handleClick={() => {
                history.push(`/collections/${data ? data.slug : cid}`);
              }}
              bg="#fff"
              color="#393d46"
              title="Voir plus"
              border="#393d46"
              hover="#393d46"
              margin="0"
              radius="12px"
            />
          </>
        )}
      </div>
      <motion.div variants={childAnimations} className="image-container">
        <img
          src={data ? data.img : Img}
          alt={data ? `${data.description}-image` : "collection-image"}
        />
      </motion.div>
    </Container>
  );
};

export default HomeMainCart;

const Container = styled(motion.div)`
  margin: 0 150px 1em 150px;
  min-height: calc(100vh - 170px);
  background: #fff;
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* gap: 1em; */
  overflow: hidden;
  .category-desc-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4em 2em;
    gap: 1em;
    .price-container {
      display: flex;
      align-items: center;
    }
    p,
    h5,
    h4 {
      margin: 1em 0;
    }
    h2 {
      color: #393d46;
      font-family: "Poppins", Sans-serif;
      font-size: 4.5rem;
      font-weight: 400;
      line-height: 1.2em;
    }
    p {
      color: #68768e;
      font-family: "Poppins", Sans-serif;
      font-size: 16px;
      font-weight: 400;
      line-height: 2.2em;
    }
    h5 {
      color: #68768e;
      font-family: "Poppins", Sans-serif;
      font-size: 16px;
      font-weight: 400;
      line-height: 1em;
      margin-right: 1em;
    }
    h4 {
      color: #393d46;
      font-family: "Poppins", Sans-serif;
      font-size: 24px;
      font-weight: 600;
    }
  }
  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  @media only screen and (max-width: 1200px) {
    margin: 1em;
    .category-desc-container {
      h2 {
        font-size: 3rem;
      }
      p {
        font-size: 14px;
        text-align: justify;
      }
      h5,
      h4 {
        font-size: 14px;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    grid-template-columns: 100% !important;
    grid-template-rows: auto auto;
    min-height: unset;
    gap: 0;
    .category-desc-container {
      padding: 2em;
      p,
      h5,
      h4 {
        margin: 1em 0;
      }
      h5 {
        margin-right: 1em;
      }

      h2 {
        font-size: 40px;
      }
    }
  }
`;
