import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";
import Button from "../../components/elements/Button";

const SearchTop = ({ updateSearch, handleSearch, searchValue }) => {
  const parentAnimations = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { delayChildren: 0.1, staggerChildren: 0.3 },
    },
  };
  const childAnimations = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
    },
  };
  return (
    <Container
      className="found-block"
      initial="hidden"
      animate="show"
      variants={parentAnimations}
    >
      <motion.h2 className="h2-search-page" variants={childAnimations}>
        Search Results.
      </motion.h2>
      <motion.p variants={childAnimations} className="p-search-page">
        Digital Era only offers you the products from the best companies
        globally
      </motion.p>
      <motion.div
        variants={childAnimations}
        className="search-input-wrap center"
      >
        <input
          type="text"
          placeholder="Search..."
          className="input"
          onChange={(e) => updateSearch(e.target.value)}
          value={searchValue}
        />
        <Button
          handleClick={handleSearch}
          search
          type="submit"
          bg="#000"
          color="#fff"
          margin="0"
          radius="12px"
        />
      </motion.div>
    </Container>
  );
};

export default SearchTop;

const Container = styled(motion.div)`
  margin: 2em 150px 0 150px;
  display: flex;
  flex-direction: column;
  gap: 2em;
  .h2-search-page {
    color: #393d46;
    font-size: 2.5rem;
    font-weight: 600;
  }
  .p-search-page {
    color: #68768e;
    font-size: 15px;
    font-weight: 400;
  }
  .search-input-wrap {
    display: flex;
    width: clamp(200px, 60%, 800px);
    &.center {
      margin: 0 auto;
    }
    input {
      width: calc(100% - 52px);
      padding: 9px;
      border-radius: 7px 0 0 7px;
      box-shadow: rgb(237 239 247 / 47%) 6px 6px 6px,
        rgb(237 239 247 / 47%) 0px 0px 0px;
    }
    button {
      margin: 0 0.5em 0 0;
      border-radius: 0 7px 7px 0;
      padding: 10px 15px;
      color: #fff;
      background: #000;
    }
    svg {
      width: 150px;
      height: 150px;
      g {
        fill: #fff !important;
      }
      path {
        fill: #fff !important;
      }
    }
  }
  @media only screen and (max-width: 1200px) {
    margin: 2em 1em 0 1em;
    .h2-search-page {
      font-size: 30px;
    }
  }

  @media only screen and (max-width: 768px) {
    .h2-search-page {
      font-size: 24px;
    }
  }
`;
