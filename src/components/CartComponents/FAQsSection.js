import React, { useRef } from "react";
import styled from "styled-components";
import { motion, useInView } from "framer-motion/dist/framer-motion";
import FaqQuestion from "../elements/FaqQuestion ";

const FAQsSection = ({ title, data }) => {
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <Container
      animate={isInView ? "show" : "hidden"}
      initial="hidden"
      variants={parentAnimations}
      ref={ref}
    >
      <h3>{title}</h3>
      {data?.map((item, index) => {
        return (
          <FaqQuestion
            key={`faqs-question-${index}`}
            title={item.title}
            animations={childAnimations}
          >
            {item.content}
          </FaqQuestion>
        );
      })}
    </Container>
  );
};

export default FAQsSection;

const Container = styled(motion.div)`
  margin: 6em 0;
  h3 {
    color: #393d46;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2em;
    letter-spacing: 1px;
  }
  p {
    text-align: justify;
    opacity: 0.8;
  }
  a {
    text-decoration: underline;
    text-align: justify;
    display: inline;
    font-weight: bold;
  }

  @media only screen and (max-width: 1200px) {
    h3 {
      font-size: 1.25rem;
    }
  }
  @media only screen and (max-width: 768px) {
    h3 {
      font-size: 1.15rem;
    }
  }
`;
