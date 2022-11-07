import React, { useRef } from "react";
import styled from "styled-components";
import { motion, useInView } from "framer-motion/dist/framer-motion";
import { Link } from "react-router-dom";

const FAQsContact = () => {
  const parentAnimations = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { delayChildren: 0.5, staggerChildren: 0.3 },
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
      <motion.h3 className="faq-contact-h3" variants={childAnimations}>
        Can’t find an answer?
      </motion.h3>
      <motion.p className="faq-contact-p" variants={childAnimations}>
        Contact our customer support team via the contact page. Our customer
        representative will be in touch within 2 business days.
      </motion.p>
      <Link to={"/contact"}>
        <motion.span className="faq-contact-a" variants={childAnimations}>
          CONTACT US
        </motion.span>
      </Link>
    </Container>
  );
};

export default FAQsContact;

const Container = styled(motion.div)`
  padding: 4em 2em;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2em;
  box-shadow: rgb(237 239 247 / 47%) 0px 10px 20px,
    rgb(237 239 247 / 47%) 0px 6px 6px;
  .faq-contact-h3 {
    text-align: center;
    color: #393d46;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 1px;
    line-height: 150%;
  }
  .faq-contact-p {
    color: #68768e;
    text-align: center;
    font-size: 18px;
    line-height: 150%;
    width: 80%;
  }
  .faq-contact-a {
    padding: 12px 30px;
    color: #fff;
    background-color: #393d46;
    font-size: 16px;
  }
  @media only screen and (max-width: 1200px) {
    .faq-contact-h3 {
      font-size: 26px;
    }
    .faq-contact-p {
      width: 100%;
    }
  }
  @media only screen and (max-width: 768px) {
    .faq-contact-h3 {
      font-size: 20px;
    }
    .faq-contact-p {
      font-size: 14px;
    }
    .faq-contact-a {
      font-size: 14px;
    }
  }
`;
