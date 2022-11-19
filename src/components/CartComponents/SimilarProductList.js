import React, { useRef } from "react";
import styled from "styled-components";
import { motion, useInView } from "framer-motion/dist/framer-motion";
import ProductCartV2 from "./ProductCartV2";

const SimilarProductsList = ({ name, products, showResults = false }) => {
  const parentAnimations = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { delay: 0.3, staggerChildren: 0.3 },
    },
  };
  const childAnimations = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
    },
  };
  const H2CartVariants = {
    hidden: { opacity: 0, y: "100px" },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <Container>
      <motion.h2
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={H2CartVariants}
      >
        {name}
      </motion.h2>
      {showResults && (
        <motion.h5
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={H2CartVariants}
        >
          Showing <span>{products?.length}</span> results
        </motion.h5>
      )}

      <motion.div
        className="products-list-container"
        ref={ref}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={parentAnimations}
      >
        {products.map((i, index) => {
          return (
            <ProductCartV2
              name={i.name}
              slug={i.slug}
              price={i.price}
              image={i.image}
              key={`p-${index}`}
              hoverImage={i.hoverImage}
              animations={childAnimations}
              availability={i?.availability}
            />
          );
        })}
      </motion.div>
    </Container>
  );
};

export default SimilarProductsList;

const Container = styled.div`
  padding: 2em 0;
  margin: 0em 150px;
  display: flex;
  flex-direction: column;
  h2 {
    color: #393d46;
    font-size: 4rem;
    font-weight: 400;
    line-height: 2em;
  }
  h5 {
    color: #393d46;
    font-size: 1rem;
    font-weight: 400;
    line-height: 2em;
    span {
      font-weight: 600;
    }
  }
  .products-list-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2em;
    padding: 2em 0;
  }
  @media only screen and (max-width: 1400px) {
    .products-list-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media only screen and (max-width: 1200px) {
    padding: 2em 1em;
    margin: 0;
    h2 {
      font-size: 30px;
    }
  }
  @media only screen and (max-width: 1000px) {
    .products-list-container {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 1.5em;
    }
  }
  @media only screen and (max-width: 768px) {
    h2 {
      font-size: 24px;
    }
  }
  @media only screen and (max-width: 500px) {
    .products-list-container {
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 1.5em;
    }
  }
`;
